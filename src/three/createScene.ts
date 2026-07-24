import * as THREE from "three";

export interface SceneHandle {
  setScrollProgress: (p: number) => void;
  setMouse: (x: number, y: number) => void;
  dispose: () => void;
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function createStreakTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 64;
  const ctx = c.getContext("2d")!;
  const grad = ctx.createLinearGradient(0, 0, 512, 0);
  grad.addColorStop(0, "rgba(232,176,74,0)");
  grad.addColorStop(0.5, "rgba(232,176,74,0.95)");
  grad.addColorStop(1, "rgba(232,176,74,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 64);
  const vgrad = ctx.createLinearGradient(0, 0, 0, 64);
  vgrad.addColorStop(0, "rgba(0,0,0,0)");
  vgrad.addColorStop(0.5, "rgba(0,0,0,1)");
  vgrad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.globalCompositeOperation = "destination-in";
  ctx.fillStyle = vgrad;
  ctx.fillRect(0, 0, 512, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

export function createScene(canvas: HTMLCanvasElement): SceneHandle {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    120
  );
  camera.position.set(0, 0, 9);

  // ---- Lighting ----
  scene.add(new THREE.AmbientLight(0x3a3a44, 0.7));

  const goldLight = new THREE.PointLight(0xe8b04b, 2.4, 60);
  goldLight.position.set(4, 3, 5);
  scene.add(goldLight);

  const coldLight = new THREE.PointLight(0x9ab0d6, 1.5, 60);
  coldLight.position.set(-6, -2, 4);
  scene.add(coldLight);

  const rimLight = new THREE.PointLight(0xffffff, 0.6, 40);
  rimLight.position.set(0, 5, -6);
  scene.add(rimLight);

  // ---- Film reel ----
  const reelGroup = new THREE.Group();
  reelGroup.position.set(3.6, 0.4, -1);
  scene.add(reelGroup);

  const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xc9a227,
    metalness: 1,
    roughness: 0.28,
    emissive: 0x3a2c08,
    emissiveIntensity: 0.35,
    transparent: true,
    opacity: 1,
  });

  const rimGeo = new THREE.TorusGeometry(2.2, 0.15, 18, 120);
  const rim = new THREE.Mesh(rimGeo, goldMaterial);
  reelGroup.add(rim);

  const hubGeo = new THREE.TorusGeometry(0.5, 0.13, 16, 80);
  const hub = new THREE.Mesh(hubGeo, goldMaterial);
  reelGroup.add(hub);

  const hubCapGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.12, 32);
  const hubCap = new THREE.Mesh(hubCapGeo, goldMaterial);
  hubCap.rotation.x = Math.PI / 2;
  reelGroup.add(hubCap);

  const spokes: { mesh: THREE.Mesh; angle: number; baseRadius: number }[] = [];
  const spokeCount = 6;
  for (let i = 0; i < spokeCount; i++) {
    const angle = (i / spokeCount) * Math.PI * 2;
    const spokeGeo = new THREE.BoxGeometry(1.7, 0.08, 0.08);
    const spoke = new THREE.Mesh(spokeGeo, goldMaterial);
    spoke.position.set(Math.cos(angle) * 1.35, Math.sin(angle) * 1.35, 0);
    spoke.rotation.z = angle;
    reelGroup.add(spoke);
    spokes.push({ mesh: spoke, angle, baseRadius: 1.35 });
  }

  // ---- Camera lens ----
  const lensGroup = new THREE.Group();
  lensGroup.position.set(0, 0, 11);
  lensGroup.scale.setScalar(0.001);
  scene.add(lensGroup);

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x33405e,
    metalness: 0.2,
    roughness: 0.12,
    transparent: true,
    opacity: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    emissive: 0x0a1428,
    emissiveIntensity: 0.4,
  });

  const lensGoldMaterial = new THREE.MeshStandardMaterial({
    color: 0xc9a227,
    metalness: 1,
    roughness: 0.28,
    emissive: 0x3a2c08,
    emissiveIntensity: 0.4,
  });

  const lensBodyGeo = new THREE.CylinderGeometry(1.25, 1.25, 0.55, 72);
  const lensBody = new THREE.Mesh(lensBodyGeo, glassMaterial);
  lensBody.rotation.x = Math.PI / 2;
  lensGroup.add(lensBody);

  const lensRimGeo = new THREE.TorusGeometry(1.25, 0.09, 18, 120);
  const lensRim = new THREE.Mesh(lensRimGeo, lensGoldMaterial);
  lensGroup.add(lensRim);

  const lensInnerGeo = new THREE.TorusGeometry(0.85, 0.05, 16, 100);
  const lensInner = new THREE.Mesh(lensInnerGeo, lensGoldMaterial);
  lensGroup.add(lensInner);

  // ---- Particle dust field ----
  const particleCount = 700;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const particleData: { offset: number; speed: number; baseY: number }[] = [];
  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 44;
    const y = (Math.random() - 0.5) * 32;
    const z = (Math.random() - 0.5) * 44 - 4;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    particleData.push({
      offset: Math.random() * Math.PI * 2,
      speed: 0.2 + Math.random() * 0.5,
      baseY: y,
    });
  }
  particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particleMaterial = new THREE.PointsMaterial({
    color: 0xf2f0ea,
    size: 0.045,
    transparent: true,
    opacity: 0.5,
    sizeAttenuation: true,
    depthWrite: false,
  });
  const particles = new THREE.Points(particleGeo, particleMaterial);
  scene.add(particles);

  // ---- Light streaks ----
  const streakTex = createStreakTexture();
  const streaks: { mesh: THREE.Mesh; speed: number }[] = [];
  for (let i = 0; i < 4; i++) {
    const streakGeo = new THREE.PlaneGeometry(7, 0.16);
    const streakMat = new THREE.MeshBasicMaterial({
      map: streakTex,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const streak = new THREE.Mesh(streakGeo, streakMat);
    streak.position.set(
      (Math.random() - 0.5) * 22,
      (Math.random() - 0.5) * 12,
      -8 - i * 9
    );
    streak.rotation.z = (Math.random() - 0.5) * 0.35;
    scene.add(streak);
    streaks.push({ mesh: streak, speed: 0.6 + Math.random() * 0.6 });
  }

  // ---- State ----
  let scrollProgress = 0;
  let mouseX = 0;
  let mouseY = 0;
  let targetRotX = 0;
  let targetRotY = 0;
  let currentRotX = 0;
  let currentRotY = 0;
  const clock = new THREE.Clock();
  let elapsed = 0;

  function update() {
    const dt = clock.getDelta();
    elapsed += dt;

    // Reel slow rotation
    if (!prefersReduced) {
      reelGroup.rotation.z += 0.0035;
    }

    // Reel disassembly (scroll 0 -> 0.25)
    const disProgress = Math.min(1, scrollProgress / 0.25);
    const disEased = easeInOut(disProgress);
    spokes.forEach((s) => {
      const fly = disEased * 3.2;
      s.mesh.position.set(
        Math.cos(s.angle) * (s.baseRadius + fly),
        Math.sin(s.angle) * (s.baseRadius + fly),
        0
      );
    });
    goldMaterial.opacity = 1 - disEased;
    reelGroup.position.z = -1 + disEased * 5;
    reelGroup.position.y = 0.4 + disEased * 2.5;

    // Lens reveal (scroll 0.18 -> 0.45)
    const lensProgressRaw = (scrollProgress - 0.18) / (0.45 - 0.18);
    const lensProgress = Math.max(0, Math.min(1, lensProgressRaw));
    const lensEased = easeInOut(lensProgress);
    lensGroup.scale.setScalar(0.001 + lensEased * 0.999);
    lensGroup.position.z = 11 - lensEased * 7.5;
    lensGroup.position.y = -2.5 + lensEased * 2.5;
    if (!prefersReduced) {
      lensGroup.rotation.y = elapsed * 0.25;
      lensGroup.rotation.x = Math.sin(elapsed * 0.3) * 0.15;
    }

    // Camera dolly (scroll 0 -> 1): z from 9 to 3
    camera.position.z = 9 - scrollProgress * 6;

    // Mouse parallax
    if (!prefersReduced) {
      targetRotY = mouseX * 0.35;
      targetRotX = -mouseY * 0.22;
      currentRotY += (targetRotY - currentRotY) * 0.05;
      currentRotX += (targetRotX - currentRotX) * 0.05;
      camera.rotation.y = currentRotY;
      camera.rotation.x = currentRotX;
    }

    // Particle drift
    if (!prefersReduced) {
      const posAttr = particleGeo.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        const d = particleData[i];
        posAttr.setY(i, d.baseY + Math.sin(elapsed * d.speed + d.offset) * 0.6);
      }
      posAttr.needsUpdate = true;
      particles.rotation.y = elapsed * 0.02;
    }

    // Streaks drift toward camera
    if (!prefersReduced) {
      streaks.forEach((s) => {
        s.mesh.position.z += s.speed * dt * 2.2;
        if (s.mesh.position.z > camera.position.z + 3) {
          s.mesh.position.z = -22 - Math.random() * 12;
          s.mesh.position.x = (Math.random() - 0.5) * 22;
          s.mesh.position.y = (Math.random() - 0.5) * 12;
        }
      });
    }

    renderer.render(scene, camera);
  }

  let rafId = 0;
  function loop() {
    update();
    rafId = requestAnimationFrame(loop);
  }
  loop();

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", onResize);

  return {
    setScrollProgress: (p: number) => {
      scrollProgress = p;
    },
    setMouse: (x: number, y: number) => {
      mouseX = x;
      mouseY = y;
    },
    dispose: () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const mat = obj.material;
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat.dispose();
        }
      });
      streakTex.dispose();
      particleGeo.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    },
  };
}

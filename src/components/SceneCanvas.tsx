import { useEffect, useRef } from "react";
import { createScene } from "../three/createScene";

export default function SceneCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handle = createScene(canvas);

    const onScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      handle.setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      handle.setMouse(x, y);
    };

    let scrollRaf = 0;
    const onScrollThrottled = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        onScroll();
      });
    };

    onScroll();
    window.addEventListener("scroll", onScrollThrottled, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScrollThrottled);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      handle.dispose();
    };
  }, []);

  return <canvas id="scene-canvas" ref={canvasRef} />;
}

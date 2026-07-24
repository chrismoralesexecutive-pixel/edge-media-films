import { useEffect, useRef } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "../utils/reducedMotion";

interface HeroProps {
  startAnimations: boolean;
}

export default function Hero({ startAnimations }: HeroProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!startAnimations) return;
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(".hero-line span", { yPercent: 0 });
        gsap.set(".hero-desc", { opacity: 1 });
        gsap.set(".cta-row", { opacity: 1 });
        gsap.set("#scroll-hint", { opacity: 1 });
        return;
      }
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        ".hero-line span",
        { yPercent: 115 },
        { yPercent: 0, duration: 1.1, stagger: 0.12 }
      )
        .to(".hero-desc", { opacity: 1, duration: 0.9, ease: "power2.out" }, "-=0.5")
        .to(".cta-row", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.5")
        .to("#scroll-hint", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.4");
    }, rootRef);
    return () => ctx.revert();
  }, [startAnimations]);

  return (
    <section id="hero" ref={rootRef}>
      <div className="hero-inner">
        <div className="eyebrow">Edge Media Films</div>
        <h1>
          <span className="line hero-line"><span>Where</span></span>
          <span className="line hero-line"><span>stories</span></span>
          <span className="line hero-line">
            <span style={{ color: "var(--gold-bright)", WebkitTextFillColor: "var(--gold-bright)" }}>
              begin.
            </span>
          </span>
        </h1>
        <p className="hero-desc">
          Edge Media Films creates cinematic experiences through storytelling, production, design,
          and strategic visual communication for productions, organizations, and creative partners.
        </p>
        <div className="cta-row">
          <a href="#services" className="btn primary">Explore Our Services</a>
          <a href="#contact" className="btn">Start a Conversation</a>
        </div>
      </div>
      <div className="scroll-hint" id="scroll-hint">
        <div className="bar"></div>SCROLL TO EXPLORE
      </div>
    </section>
  );
}

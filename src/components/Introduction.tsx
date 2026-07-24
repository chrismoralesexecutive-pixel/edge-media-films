import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../utils/reducedMotion";
import { PlayIcon, ArrowRightIcon } from "./Icons";

gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(".intro-anim", { opacity: 1, y: 0 });
        return;
      }
      gsap.from(".intro-anim", {
        opacity: 0, y: 34,
        duration: 0.9, ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: "#about", start: "top 75%" },
      });
      gsap.from(".stat-item", {
        opacity: 0, y: 20,
        duration: 0.7, ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".intro-stats", start: "top 85%" },
      });
      gsap.from(".intro-visual-card", {
        opacity: 0, scale: 0.94,
        duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".intro-visual", start: "top 80%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section-block" ref={rootRef}>
      <div className="intro-grid">
        <div className="intro-text">
          <div className="eyebrow intro-anim">The Studio</div>
          <p className="lead intro-anim">
            <strong>Edge Media Films</strong> is a creative production company specializing in
            cinematic storytelling and strategic visual communication. We develop creative solutions
            that combine <strong>storytelling</strong>, visual craftsmanship, and strategic
            communication to support productions, brands, and organizations.
          </p>
          <div className="intro-stats">
            <div className="stat-item">
              <div className="num">120+</div>
              <div className="label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="num">14</div>
              <div className="label">Awards Won</div>
            </div>
            <div className="stat-item">
              <div className="num">09</div>
              <div className="label">Years Running</div>
            </div>
          </div>
          <div className="intro-links intro-anim">
            <Link to="/who-we-are">Who We Are <ArrowRightIcon size={12} className="arrow-icon" /></Link>
            <Link to="/what-we-do">What We Do <ArrowRightIcon size={12} className="arrow-icon" /></Link>
            <Link to="/why-we-do-it">Why We Do It <ArrowRightIcon size={12} className="arrow-icon" /></Link>
          </div>
        </div>
        <div className="intro-visual">
          <div className="intro-visual-card">
            <div className="play-btn-wrap" role="button" aria-label="Play introduction video" tabIndex={0}>
              <PlayIcon size={22} />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "18px",
                left: "20px",
                fontFamily: "var(--mono)",
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                opacity: 0.6,
              }}
            >
              Cinematic Introduction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

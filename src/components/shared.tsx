import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../utils/reducedMotion";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

/* ---------- Scroll Reveal Wrapper ---------- */
interface RevealProps {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  selector?: string;
  stagger?: number;
  as?: string;
}

export function Reveal({
  children,
  className,
  y = 34,
  delay = 0,
  selector,
  stagger = 0.1,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const targets = selector ? el.querySelectorAll(selector) : [el];
      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.9,
        ease: "power3.out",
        stagger: selector ? stagger : 0,
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [y, delay, selector, stagger]);

  const Tag = as as any;
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

/* ---------- Page Hero ---------- */
interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, highlight, subtitle }: PageHeroProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      gsap.set(el.querySelectorAll(".hero-anim"), { opacity: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        delay: 0.1,
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="page-hero" ref={rootRef}>
      <div className="page-hero-inner">
        <div className="eyebrow hero-anim">{eyebrow}</div>
        <h1 className="page-hero-title">
          <span className="hero-anim">{title}</span>
          {highlight && (
            <span className="hero-anim" style={{ display: "block" }}>
              <em style={{ fontStyle: "normal", color: "var(--gold-bright)" }}>{highlight}</em>
            </span>
          )}
        </h1>
        {subtitle && (
          <p className="page-hero-subtitle hero-anim">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

/* ---------- Section Divider ---------- */
export function SectionDivider() {
  return <div className="section-divider" />;
}

/* ---------- CTA Section ---------- */
interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function CTASection({
  title = "Let's create something meaningful.",
  subtitle = "We welcome partnership inquiries from organizations, production companies, agencies, and creative collaborators.",
  buttonText = "Contact Edge Media Films",
}: CTASectionProps) {
  return (
    <section className="cta-section">
      <Reveal>
        <div className="cta-inner">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-subtitle">{subtitle}</p>
          <Link to="/contact" className="btn primary">
            {buttonText}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Info Card Grid Item ---------- */
interface InfoCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  num?: string;
}

export function InfoCard({ icon, title, desc, num }: InfoCardProps) {
  return (
    <div className="info-card">
      <div className="info-card-head">
        <div className="info-card-icon">{icon}</div>
        {num && <div className="info-card-num">{num}</div>}
      </div>
      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-desc">{desc}</p>
    </div>
  );
}

/* ---------- Section Heading ---------- */
interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">
        {title}
        {highlight && (
          <>
            {" "}
            <em style={{ fontStyle: "normal", color: "var(--gold-bright)" }}>{highlight}</em>
          </>
        )}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

/* ---------- Full-width Value Block ---------- */
interface ValueBlockProps {
  num: string;
  title: string;
  desc: string;
  icon: ReactNode;
  illustration: ReactNode;
  reverse?: boolean;
}

export function ValueBlock({ num, title, desc, icon, illustration, reverse }: ValueBlockProps) {
  return (
    <div className={`value-block ${reverse ? "reverse" : ""}`}>
      <div className="value-block-text">
        <div className="value-block-num">{num}</div>
        <div className="value-block-icon">{icon}</div>
        <h3 className="value-block-title">{title}</h3>
        <p className="value-block-desc">{desc}</p>
      </div>
      <div className="value-block-visual">{illustration}</div>
    </div>
  );
}

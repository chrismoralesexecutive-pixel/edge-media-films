import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../utils/reducedMotion";
import {
  TrophyIcon,
  AwardIcon,
  StarIcon,
  SparkleIcon,
  LightbulbIcon,
  UsersIcon,
  ShieldIcon,
  LockIcon,
} from "./Icons";

gsap.registerPlugin(ScrollTrigger);

const awards = [
  { icon: TrophyIcon, title: "Creative Excellence", desc: "Recognized for outstanding visual storytelling" },
  { icon: AwardIcon, title: "Industry Recognition", desc: "Honored by film festivals and industry bodies" },
  { icon: StarIcon, title: "Production Quality", desc: "Acknowledged for cinematic craftsmanship" },
  { icon: SparkleIcon, title: "Innovation", desc: "Pioneering new approaches in visual media" },
];

const values = [
  { icon: SparkleIcon, title: "Creativity" },
  { icon: LightbulbIcon, title: "Innovation" },
  { icon: StarIcon, title: "Craftsmanship" },
  { icon: UsersIcon, title: "Collaboration" },
  { icon: ShieldIcon, title: "Excellence" },
  { icon: LockIcon, title: "Confidentiality" },
];

export default function Recognition() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(".recog-anim, .recog-card, .value-card", { opacity: 1, y: 0 });
        return;
      }

      gsap.from(".recog-anim", {
        opacity: 0, y: 30,
        duration: 0.9, ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: "#recognition", start: "top 78%" },
      });
      gsap.from(".recog-card", {
        opacity: 0, y: 30,
        duration: 0.7, ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".recog-grid", start: "top 85%" },
      });
      gsap.from(".values-anim", {
        opacity: 0, y: 30,
        duration: 0.9, ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: "#values-section", start: "top 78%" },
      });
      gsap.from(".value-card", {
        opacity: 0, y: 20,
        duration: 0.6, ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: { trigger: ".values-row", start: "top 85%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      {/* Awards */}
      <section id="recognition" className="section-block" style={{ paddingBottom: 0 }}>
        <div style={{ maxWidth: 560 }}>
          <div className="eyebrow recog-anim">Awards & Recognition</div>
          <h2 className="section-title recog-anim">Recognized for<br />creative excellence.</h2>
          <p className="section-subtitle recog-anim">
            Our commitment to cinematic craftsmanship and professional excellence has been
            acknowledged across the industry.
          </p>
        </div>
        <div className="recog-grid">
          {awards.map((a) => {
            const Icon = a.icon;
            return (
              <div className="recog-card" key={a.title}>
                <div className="recog-card-icon"><Icon size={22} /></div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="recog-anim" style={{ marginTop: 40 }}>
          <Link to="/awards" className="btn">View Awards & Recognition</Link>
        </div>
      </section>

      <div className="section-divider" />

      {/* Values */}
      <section id="values-section" className="section-block">
        <div style={{ maxWidth: 560 }}>
          <div className="eyebrow values-anim">Our Values</div>
          <h2 className="section-title values-anim">Principles that guide<br />every project.</h2>
          <p className="section-subtitle values-anim">
            These commitments inform every decision, every collaboration, and every frame we produce.
          </p>
        </div>
        <div className="values-row">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div className="value-card" key={v.title}>
                <div className="value-card-icon"><Icon size={18} /></div>
                <h4>{v.title}</h4>
              </div>
            );
          })}
        </div>
        <div className="values-anim" style={{ marginTop: 40 }}>
          <Link to="/values" className="btn">Explore Our Values</Link>
        </div>
      </section>
    </div>
  );
}

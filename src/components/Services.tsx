import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../utils/reducedMotion";
import {
  PenIcon,
  CameraIcon,
  ApertureIcon,
  PlayIcon,
  CodeIcon,
  ChartIcon,
  ArrowRightIcon,
} from "./Icons";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    icon: PenIcon,
    title: "Screenwriting & Story Development",
    desc: "Developing narratives, treatments, scripts, and story concepts that establish the creative foundation of every production.",
    link: "/services/screenwriting",
  },
  {
    num: "02",
    icon: CameraIcon,
    title: "Cinematography & Production",
    desc: "Capturing stories through cinematic composition, lighting, camera movement, and professional production techniques.",
    link: "/services/cinematography",
  },
  {
    num: "03",
    icon: ApertureIcon,
    title: "Photography & Visual Content",
    desc: "Creating visual assets that strengthen campaigns, publications, brands, and productions.",
    link: "/services/photography",
  },
  {
    num: "04",
    icon: PlayIcon,
    title: "Trailers & Promotional Media",
    desc: "Crafting cinematic promotional materials designed to introduce stories with emotion and impact.",
    link: "/services/trailers",
  },
  {
    num: "05",
    icon: CodeIcon,
    title: "Website & Digital Design",
    desc: "Designing modern digital experiences that communicate clearly while maintaining strong visual identity.",
    link: "/services/web-design",
  },
  {
    num: "06",
    icon: ChartIcon,
    title: "Marketing & Branding Solutions",
    desc: "Developing strategic branding systems that create consistency across every audience touchpoint.",
    link: "/services/marketing",
  },
];

export default function Services() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(".svc-anim", { opacity: 1, y: 0 });
        gsap.set(".service-card", { opacity: 1, y: 0 });
        return;
      }
      gsap.from(".svc-anim", {
        opacity: 0, y: 30,
        duration: 0.9, ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: "#services", start: "top 78%" },
      });
      gsap.from(".service-card", {
        opacity: 0, y: 40,
        duration: 0.8, ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".services-grid", start: "top 82%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="section-block" ref={rootRef}>
      <div style={{ maxWidth: 640 }}>
        <div className="eyebrow svc-anim">Our Services</div>
        <h2 className="section-title svc-anim">Six disciplines.<br />One vision.</h2>
        <p className="section-subtitle svc-anim">
          Edge Media Films develops cinematic and digital media solutions designed to communicate
          ideas through powerful storytelling and thoughtful visual execution.
        </p>
      </div>
      <div className="services-grid">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Link to={s.link} className="service-card" key={s.num}>
              <div className="service-icon">
                <Icon size={20} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-num" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span>{s.num}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--gold-bright)" }}>
                  Learn More <ArrowRightIcon size={12} className="arrow-icon" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="svc-anim" style={{ marginTop: 44 }}>
        <Link to="/what-we-do" className="btn">View All Services</Link>
      </div>
    </section>
  );
}

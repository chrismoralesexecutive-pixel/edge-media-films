import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../utils/reducedMotion";
import {
  SearchIcon,
  BookIcon,
  ClipboardIcon,
  ClapperIcon,
  FilmIcon,
  GlobeIcon,
  LockIcon,
} from "./Icons";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  { icon: SearchIcon, title: "Research & Development", status: "Active", progress: 88, desc: "Investigating emerging narratives, technologies, and creative opportunities." },
  { icon: BookIcon, title: "Story Development", status: "Active", progress: 72, desc: "Building story bibles, treatments, and narrative frameworks." },
  { icon: ClipboardIcon, title: "Pre-Production", status: "Active", progress: 65, desc: "Casting, scheduling, location scouting, and production design." },
  { icon: ClapperIcon, title: "Production", status: "Active", progress: 42, desc: "Principal photography, direction, and on-set management." },
  { icon: FilmIcon, title: "Post-Production", status: "In Progress", progress: 30, desc: "Editing, color grading, sound design, and visual effects." },
  { icon: GlobeIcon, title: "Distribution Planning", status: "Ongoing", progress: 18, desc: "Strategic release planning across platforms and markets." },
];

const platforms = [
  "Amazon Prime Video",
  "Netflix",
  "Apple TV+",
  "Hulu",
  "HBO",
  "Paramount+",
  "Disney+",
];

export default function Productions() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(".prod-anim", { opacity: 1, y: 0 });
        gsap.set(".prod-card", { opacity: 1, y: 0 });
        document.querySelectorAll<HTMLElement>(".prod-bar").forEach((el) => {
          el.style.width = el.dataset.width || "0%";
        });
        return;
      }

      gsap.from(".prod-anim", {
        opacity: 0, y: 30,
        duration: 0.9, ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: "#productions", start: "top 78%" },
      });

      gsap.from(".prod-card", {
        opacity: 0, y: 40,
        duration: 0.8, ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".prod-timeline",
          start: "top 82%",
          onEnter: () => {
            document.querySelectorAll<HTMLElement>(".prod-bar").forEach((el) => {
              el.style.width = el.dataset.width || "0%";
            });
          },
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="productions" className="section-block" ref={rootRef}>
      <div style={{ maxWidth: 640 }}>
        <div className="eyebrow prod-anim">Current Productions</div>
        <h2 className="section-title prod-anim">Active projects across<br />every stage.</h2>
        <p className="section-subtitle prod-anim">
          Edge Media Films is currently engaged in multiple productions across research,
          development, and production. Project details remain confidential until publicly released.
        </p>
      </div>

      <div className="prod-timeline">
        {stages.map((s) => {
          const Icon = s.icon;
          return (
            <div className="prod-card" key={s.title}>
              <div className="prod-card-head">
                <div className="prod-card-icon"><Icon size={18} /></div>
                <div className="prod-status">{s.status}</div>
              </div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <div className="prod-bar-wrap">
                <div className="prod-bar" style={{ width: "0%" }} data-width={`${s.progress}%`}></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="prod-confidential">
        <LockIcon size={20} />
        <p>
          To protect confidential information and intellectual property, project titles,
          production materials, and client identities are not publicly disclosed. Active projects
          remain confidential until formally released.
        </p>
      </div>

      <div className="prod-anim" style={{ marginTop: 36 }}>
        <Link to="/productions" className="btn">View Full Production Pipeline</Link>
      </div>

      {/* Industry Ecosystem */}
      <div className="ecosystem-wrap">
        <div className="ecosystem-fade-l"></div>
        <div className="ecosystem-fade-r"></div>
        <div className="ecosystem-label">Industry Ecosystem</div>
        <div className="marquee-track">
          {[0, 1, 2, 3].map((setIndex) => (
            <div className="marquee-set" key={setIndex}>
              {platforms.map((p) => (
                <span className="marquee-item" key={`${setIndex}-${p}`}>{p}</span>
              ))}
            </div>
          ))}
        </div>
        <p className="ecosystem-disclaimer">
          The above platforms are displayed solely to represent the broader film and streaming
          industry ecosystem. Their inclusion does not imply partnership, affiliation, endorsement,
          or current client relationships.
        </p>
      </div>
    </section>
  );
}

import { PageHero, SectionDivider, CTASection, Reveal, SectionHeading } from "../components/shared";
import {
  SearchIcon,
  BookIcon,
  ClipboardIcon,
  ClapperIcon,
  FilmIcon,
  GlobeIcon,
  LockIcon,
} from "../components/Icons";

const stages = [
  { icon: SearchIcon, title: "Research & Development", status: "Active", progress: 88, desc: "Projects currently exploring new concepts, market research, and creative direction." },
  { icon: BookIcon, title: "Story Development", status: "Active", progress: 72, desc: "Narrative development, screenplay writing, treatments, and story refinement." },
  { icon: ClipboardIcon, title: "Pre-Production", status: "Active", progress: 65, desc: "Creative planning, scheduling, visual development, location planning, and production preparation." },
  { icon: ClapperIcon, title: "Production", status: "Active", progress: 42, desc: "Principal photography, filming, recording, and creative execution." },
  { icon: FilmIcon, title: "Post Production", status: "In Progress", progress: 30, desc: "Editing, color grading, sound design, visual effects, and finishing." },
  { icon: GlobeIcon, title: "Distribution Planning", status: "Ongoing", progress: 18, desc: "Preparing completed productions for presentation, marketing, and release strategies." },
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
  return (
    <>
      <PageHero
        eyebrow="Current Productions"
        title="Current Productions"
        subtitle="Edge Media Films maintains an active production pipeline spanning concept development, screenplay research, production planning, and post-production. Our ongoing work reflects our commitment to developing thoughtful, high-quality visual experiences across multiple creative disciplines."
      />
      <SectionDivider />

      <section className="page-section">
        <Reveal>
          <SectionHeading
            eyebrow="Current Activity"
            title="Stages of"
            highlight="active production."
          />
        </Reveal>
        <Reveal selector=".prod-card" stagger={0.08}>
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
        </Reveal>
      </section>
      <SectionDivider />

      {/* Industry Ecosystem */}
      <section className="page-section">
        <Reveal>
          <SectionHeading
            eyebrow="Industry Ecosystem"
            title="The broader"
            highlight="streaming landscape."
            subtitle="The following platforms represent the broader film and streaming industry ecosystem — not active partnerships or client relationships."
          />
        </Reveal>
        <Reveal>
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
        </Reveal>
      </section>
      <SectionDivider />

      {/* Confidentiality Statement */}
      <section className="page-section">
        <Reveal>
          <div className="glass-panel" style={{ padding: "clamp(32px, 4vw, 56px)", maxWidth: 820, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <span className="lock-icon-wrap" style={{ flexShrink: 0, color: "var(--gold-bright)", marginTop: 2, display: "inline-flex" }}>
                <LockIcon size={24} />
              </span>
              <div>
                <h3 style={{ fontFamily: "var(--display)", fontSize: "clamp(20px, 2.5vw, 28px)", textTransform: "uppercase", marginBottom: 14 }}>
                  Confidentiality Statement
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text-dim)", fontWeight: 300 }}>
                  Many ongoing productions remain protected under confidentiality agreements and
                  intellectual property regulations. As a result, project names, creative materials,
                  and production details are not publicly disclosed until officially announced.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}

import { PageHero, SectionDivider, CTASection, Reveal, SectionHeading } from "./shared";
import { LayersIllustration } from "./illustrations";

export interface ServiceConfig {
  slug: string;
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  overview: string[];
  approach: string[];
  capabilities: { icon: any; title: string }[];
  workflow: { num: string; title: string }[];
  industries: string[];
  faqs: { q: string; a: string }[];
}

export default function ServicePage({ config }: { config: ServiceConfig }) {
  return (
    <>
      <PageHero
        eyebrow={config.eyebrow}
        title={config.title}
        highlight={config.highlight}
        subtitle={config.subtitle}
      />
      <SectionDivider />

      {/* Overview */}
      <section className="page-section">
        <div className="two-col">
          <Reveal>
            <SectionHeading
              eyebrow="Service Overview"
              title="What we"
              highlight="deliver."
            />
            <div className="text-content">
              {config.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="illustration-wrap">
              <LayersIllustration />
            </div>
          </Reveal>
        </div>
      </section>
      <SectionDivider />

      {/* Our Approach */}
      <section className="page-section">
        <Reveal>
          <SectionHeading
            eyebrow="Our Approach"
            title="How we"
            highlight="work."
          />
        </Reveal>
        <Reveal selector=".workflow-step" stagger={0.06}>
          <div className="workflow-timeline" style={{ maxWidth: 700 }}>
            {config.approach.map((p, i) => (
              <div className="workflow-step" key={i}>
                <div className="workflow-step-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="workflow-step-desc" style={{ fontSize: "clamp(15px, 1.5vw, 17px)", color: "var(--text)", fontWeight: 400 }}>{p}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <SectionDivider />

      {/* Capabilities */}
      <section className="page-section">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Key"
            highlight="deliverables."
          />
        </Reveal>
        <Reveal selector=".cap-card" stagger={0.05}>
          <div className="grid-3">
            {config.capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div className="cap-card" key={c.title}>
                  <div className="cap-card-icon"><Icon size={18} /></div>
                  <span className="cap-card-text">{c.title}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>
      <SectionDivider />

      {/* Creative Workflow */}
      <section className="page-section">
        <Reveal>
          <SectionHeading
            eyebrow="Creative Workflow"
            title="Step-by-step"
            highlight="process."
          />
        </Reveal>
        <Reveal selector=".workflow-step" stagger={0.06}>
          <div className="workflow-timeline" style={{ maxWidth: 700 }}>
            {config.workflow.map((w) => (
              <div className="workflow-step" key={w.num}>
                <div className="workflow-step-num">{w.num}</div>
                <div className="workflow-step-title">{w.title}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <SectionDivider />

      {/* Industries Served */}
      <section className="page-section-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Industries Served"
            title="Where this"
            highlight="applies."
          />
        </Reveal>
        <Reveal selector=".badge" stagger={0.05}>
          <div className="badge-row">
            {config.industries.map((ind) => (
              <span className="badge" key={ind}>{ind}</span>
            ))}
          </div>
        </Reveal>
      </section>
      <SectionDivider />

      {/* FAQ */}
      <section className="page-section">
        <Reveal>
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Questions,"
            highlight="answered."
          />
        </Reveal>
        <Reveal selector=".faq-item" stagger={0.05}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            {config.faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}

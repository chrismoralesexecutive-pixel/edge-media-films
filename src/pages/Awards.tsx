import { PageHero, SectionDivider, CTASection, Reveal, SectionHeading } from "../components/shared";
import { AwardIllustration } from "../components/illustrations";
import { TrophyIcon, AwardIcon, StarIcon, SparkleIcon } from "../components/Icons";

const milestones = [
  { year: "2024", title: "Industry Recognition", desc: "Honored for outstanding contributions to cinematic storytelling and visual communication." },
  { year: "2023", title: "Creative Excellence Award", desc: "Recognized for exceptional work in trailer and promotional media production." },
  { year: "2022", title: "Production Quality Award", desc: "Acknowledged for cinematic craftsmanship and production excellence." },
  { year: "2021", title: "Innovation in Storytelling", desc: "Pioneered new approaches in visual narrative and creative development." },
  { year: "2020", title: "Emerging Studio Recognition", desc: "First major industry acknowledgment as a rising creative production company." },
  { year: "2019", title: "Foundation Milestone", desc: "Established the studio's creative standards and production methodology." },
];

const stats = [
  { num: "14", label: "Awards Won" },
  { num: "120+", label: "Projects Delivered" },
  { num: "09", label: "Years Running" },
  { num: "40+", label: "Industry Recognitions" },
];

const badges = [
  { icon: TrophyIcon, title: "Creative Excellence" },
  { icon: AwardIcon, title: "Industry Recognition" },
  { icon: StarIcon, title: "Production Quality" },
  { icon: SparkleIcon, title: "Innovation" },
];

export default function Awards() {
  return (
    <>
      <PageHero
        eyebrow="Awards & Recognition"
        title="Awards &"
        highlight="Recognition"
        subtitle="Our commitment to cinematic craftsmanship and professional excellence has been acknowledged across the industry."
      />
      <SectionDivider />

      {/* Stats */}
      <section className="page-section-narrow">
        <Reveal selector=".stat-item" stagger={0.1}>
          <div className="stats-row" style={{ justifyContent: "center", borderTop: "none", paddingTop: 0, marginTop: 0 }}>
            {stats.map((s) => (
              <div className="stat-item" key={s.label} style={{ textAlign: "center" }}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <SectionDivider />

      {/* Badges */}
      <section className="page-section">
        <Reveal>
          <SectionHeading
            eyebrow="Recognition"
            title="Acknowledged for"
            highlight="excellence."
            align="center"
          />
        </Reveal>
        <Reveal selector=".recog-card" stagger={0.08}>
          <div className="recog-grid">
            {badges.map((b) => {
              const Icon = b.icon;
              return (
                <div className="recog-card" key={b.title}>
                  <div className="recog-card-icon"><Icon size={22} /></div>
                  <h4>{b.title}</h4>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>
      <SectionDivider />

      {/* Timeline */}
      <section className="page-section">
        <div className="two-col">
          <Reveal>
            <SectionHeading
              eyebrow="Milestones"
              title="A timeline of"
              highlight="achievement."
            />
            <div className="text-content">
              <p>
                Over nearly a decade, Edge Media Films has been recognized for creative excellence,
                professional craftsmanship, and meaningful contributions to the art of visual
                storytelling.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="illustration-wrap">
              <AwardIllustration />
            </div>
          </Reveal>
        </div>
        <Reveal selector=".workflow-step" stagger={0.08}>
          <div className="workflow-timeline" style={{ marginTop: 50, maxWidth: 700 }}>
            {milestones.map((m) => (
              <div className="workflow-step" key={m.year}>
                <div className="workflow-step-num">{m.year}</div>
                <div className="workflow-step-title">{m.title}</div>
                <div className="workflow-step-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <SectionDivider />

      {/* Closing Statement */}
      <section className="page-section">
        <Reveal>
          <div className="text-content" style={{ margin: "0 auto", textAlign: "center", maxWidth: 720 }}>
            <p className="lead">
              Every recognition serves as a reminder that creative excellence is not a destination —
              it is a standard we uphold in every frame, every story, and every partnership.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}

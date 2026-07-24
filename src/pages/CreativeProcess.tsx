import { PageHero, SectionDivider, CTASection, Reveal, SectionHeading } from "../components/shared";
import { PipelineIllustration, SpiralIllustration } from "../components/illustrations";
import {
  SearchIcon,
  BookIcon,
  PenIcon,
  ClipboardIcon,
  ClapperIcon,
  FilmIcon,
  GlobeIcon,
} from "../components/Icons";

const stages = [
  {
    num: "01",
    icon: SearchIcon,
    title: "Discovery",
    desc: "Understanding the story, objectives, and audience through collaborative discovery sessions.",
  },
  {
    num: "02",
    icon: BookIcon,
    title: "Research",
    desc: "Gathering creative references, audience insights, and production insights to inform every decision.",
  },
  {
    num: "03",
    icon: PenIcon,
    title: "Concept Development",
    desc: "Developing visual direction, narrative structure, and production strategy that align with the project's objectives.",
  },
  {
    num: "04",
    icon: PenIcon,
    title: "Screenwriting",
    desc: "Crafting scripts, treatments, and story frameworks that establish the narrative foundation for production.",
  },
  {
    num: "05",
    icon: ClipboardIcon,
    title: "Pre-Production",
    desc: "Planning every detail — casting, scheduling, locations, production design, and technical preparation.",
  },
  {
    num: "06",
    icon: ClapperIcon,
    title: "Production",
    desc: "Capturing the creative vision through professional filmmaking, direction, and on-set production management.",
  },
  {
    num: "07",
    icon: FilmIcon,
    title: "Post Production",
    desc: "Editing, sound, music, color, graphics, and finishing that shape the final narrative.",
  },
  {
    num: "08",
    icon: GlobeIcon,
    title: "Delivery",
    desc: "Preparing the final production for distribution across digital, theatrical, and promotional platforms.",
  },
];

export default function CreativeProcess() {
  return (
    <>
      <PageHero
        eyebrow="Creative Process"
        title="Creative Process"
        subtitle="Our production pipeline moves every project through eight stages — from initial discovery to final delivery — with precision, collaboration, and creative intention at every step."
      />
      <SectionDivider />

      <section className="page-section">
        <div className="two-col">
          <Reveal>
            <SectionHeading
              eyebrow="The Pipeline"
              title="From concept to"
              highlight="final delivery."
            />
            <div className="text-content">
              <p>
                Every production follows a structured creative process designed to ensure quality,
                consistency, and creative integrity from the first conversation to the final frame.
              </p>
              <p>
                This pipeline is not rigid — it is a framework that adapts to each project's unique
                needs while maintaining our standards of excellence throughout.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="illustration-wrap">
              <PipelineIllustration />
            </div>
          </Reveal>
        </div>
      </section>
      <SectionDivider />

      <section className="page-section">
        <Reveal>
          <SectionHeading
            eyebrow="Production Stages"
            title="Eight stages of"
            highlight="creative production."
          />
        </Reveal>
        <Reveal selector=".workflow-step" stagger={0.06}>
          <div className="workflow-timeline" style={{ maxWidth: 800, margin: "0 auto" }}>
            {stages.map((s) => {
              const Icon = s.icon;
              return (
                <div className="workflow-step" key={s.num}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                    <span className="workflow-icon" style={{ color: "var(--gold-bright)" }}><Icon size={18} /></span>
                    <span className="workflow-step-num" style={{ margin: 0 }}>{s.num}</span>
                  </div>
                  <div className="workflow-step-title">{s.title}</div>
                  <div className="workflow-step-desc">{s.desc}</div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>
      <SectionDivider />

      <section className="page-section">
        <Reveal>
          <div className="illustration-wrap" style={{ maxWidth: 280, margin: "0 auto 40px" }}>
            <SpiralIllustration />
          </div>
          <div className="text-content" style={{ margin: "0 auto", textAlign: "center", maxWidth: 680 }}>
            <p className="lead">
              The creative process is not a linear path — it is a spiral of refinement, where each
              stage informs and elevates the next.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}

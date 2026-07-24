import { Link } from "react-router-dom";
import { PageHero, SectionDivider, CTASection, Reveal, SectionHeading } from "../components/shared";
import { LayersIllustration, PipelineIllustration } from "../components/illustrations";
import {
  PenIcon,
  CameraIcon,
  ApertureIcon,
  PlayIcon,
  CodeIcon,
  ChartIcon,
  ArrowRightIcon,
} from "../components/Icons";

const services = [
  {
    icon: PenIcon,
    title: "Screenwriting & Story Development",
    desc: "Developing narratives, treatments, scripts, and story concepts that establish the creative foundation of every production.",
    link: "/services/screenwriting",
  },
  {
    icon: CameraIcon,
    title: "Cinematography & Production",
    desc: "Capturing stories through cinematic composition, lighting, camera movement, and professional production techniques.",
    link: "/services/cinematography",
  },
  {
    icon: ApertureIcon,
    title: "Photography & Visual Content",
    desc: "Creating visual assets that strengthen campaigns, publications, brands, and productions.",
    link: "/services/photography",
  },
  {
    icon: PlayIcon,
    title: "Trailers & Promotional Media",
    desc: "Crafting cinematic promotional materials designed to introduce stories with emotion and impact.",
    link: "/services/trailers",
  },
  {
    icon: CodeIcon,
    title: "Website & Digital Design",
    desc: "Designing modern digital experiences that communicate clearly while maintaining strong visual identity.",
    link: "/services/web-design",
  },
  {
    icon: ChartIcon,
    title: "Marketing & Branding Solutions",
    desc: "Developing strategic branding systems that create consistency across every audience touchpoint.",
    link: "/services/marketing",
  },
];

const workflow = [
  { num: "01", title: "Discovery", desc: "Understanding objectives, audience, and creative direction." },
  { num: "02", title: "Research", desc: "Researching context, references, and creative possibilities." },
  { num: "03", title: "Development", desc: "Developing concepts, scripts, and creative frameworks." },
  { num: "04", title: "Production", desc: "Executing the creative vision through professional filmmaking." },
  { num: "05", title: "Post Production", desc: "Editing, sound, music, color, graphics, and finishing." },
  { num: "06", title: "Delivery", desc: "Finalizing, mastering, and delivering the final production." },
];

export default function WhatWeDo() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="What We Do"
        subtitle="Edge Media Films develops cinematic and digital media solutions designed to communicate ideas through powerful storytelling and thoughtful visual execution."
      />
      <SectionDivider />

      <section className="page-section">
        <div className="two-col">
          <Reveal>
            <SectionHeading
              eyebrow="Creative Services"
              title="Six disciplines,"
              highlight="one integrated approach."
            />
            <div className="text-content">
              <p>
                Edge Media Films offers multidisciplinary creative services that combine storytelling, production, design, and strategic communication. Each service is developed to complement the others, creating a seamless creative process from concept to final delivery.
              </p>
              <p>
                We collaborate with filmmakers, production companies, publishers, organizations, and creative partners to produce work that informs, inspires, and connects with audiences.
              </p>
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

      <section className="page-section">
        <Reveal>
          <SectionHeading
            eyebrow="Service Overview"
            title="Creative services"
            highlight="across disciplines."
          />
        </Reveal>
        <Reveal selector=".service-card" stagger={0.08}>
          <div className="services-grid" style={{ marginTop: 0 }}>
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link to={s.link} className="service-card" key={s.title}>
                  <div className="service-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="service-num" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--gold-bright)" }}>
                      Learn More <ArrowRightIcon size={12} className="arrow-icon" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </section>
      <SectionDivider />

      <section className="page-section">
        <Reveal>
          <SectionHeading
            eyebrow="Workflow"
            title="An integrated"
            highlight="creative process."
            subtitle="Discovery → Research → Development → Production → Post Production → Delivery — a seamless pipeline that moves every project through with precision."
          />
        </Reveal>
        <div className="two-col">
          <Reveal>
            <div className="illustration-wrap">
              <PipelineIllustration />
            </div>
          </Reveal>
          <Reveal>
            <div className="workflow-timeline">
              {workflow.map((w) => (
                <div className="workflow-step" key={w.num}>
                  <div className="workflow-step-num">{w.num}</div>
                  <div className="workflow-step-title">{w.title}</div>
                  <div className="workflow-step-desc">{w.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <SectionDivider />

      <section className="page-section">
        <Reveal>
          <div className="text-content" style={{ margin: "0 auto", textAlign: "center", maxWidth: 720 }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Why Our Process Matters</div>
            <p className="lead">
              Successful creative work is achieved through collaboration, planning, technical expertise, and a clear understanding of each project's objectives.
            </p>
            <p>
              Every production is guided by thoughtful planning, artistic craftsmanship, and a commitment to delivering work that reflects the highest professional standards.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}

import { PageHero, SectionDivider, CTASection, Reveal, InfoCard, SectionHeading } from "../components/shared";
import { CollaborationIllustration } from "../components/illustrations";
import {
  PenIcon,
  FilmIcon,
  CodeIcon,
  ChartIcon,
  ClapperIcon,
  PlayIcon,
  ApertureIcon,
  StarIcon,
  SparkleIcon,
  ShieldIcon,
} from "../components/Icons";

const disciplines = [
  { icon: ClapperIcon, title: "Directors", desc: "Visionary storytellers who shape every frame with intention and purpose." },
  { icon: FilmIcon, title: "Producers", desc: "Strategic leaders who orchestrate complex productions from concept to delivery." },
  { icon: PenIcon, title: "Screenwriters", desc: "Narrative architects who craft compelling stories and memorable characters." },
  { icon: PlayIcon, title: "Editors", desc: "Precision craftspeople who shape rhythm, pacing, and emotional impact." },
  { icon: ApertureIcon, title: "Designers", desc: "Visual artists who build identities, interfaces, and immersive experiences." },
  { icon: ChartIcon, title: "Creative Strategists", desc: "Analytical thinkers who align creative vision with strategic objectives." },
];

const industries = [
  { icon: FilmIcon, title: "Film" },
  { icon: PlayIcon, title: "Entertainment" },
  { icon: PenIcon, title: "Publishing" },
  { icon: ChartIcon, title: "Corporate" },
  { icon: CodeIcon, title: "Education" },
  { icon: ApertureIcon, title: "Digital Media" },
];

const standards = [
  { icon: PenIcon, title: "Story-First Development" },
  { icon: ClapperIcon, title: "Collaborative Production" },
  { icon: StarIcon, title: "Attention to Detail" },
  { icon: SparkleIcon, title: "Technical Excellence" },
  { icon: ShieldIcon, title: "Creative Integrity" },
];

export default function WhoWeAre() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Who We Are"
        subtitle="Every production begins with people who understand the power of story. At Edge Media Films, we bring together creative professionals with expertise in filmmaking, visual communication, design, and strategic storytelling to produce work that resonates across audiences and platforms."
      />
      <SectionDivider />

      {/* Our Identity */}
      <section className="page-section">
        <div className="two-col">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Our Identity"
                title="A studio built on"
                highlight="craft and collaboration."
              />
              <div className="text-content">
                <p>
                  Edge Media Films is a <strong>cinematic production company</strong> dedicated to
                  developing compelling visual experiences through thoughtful storytelling, creative
                  craftsmanship, and technical precision.
                </p>
                <p>
                  We approach every project as a <strong>collaboration</strong>, combining artistic
                  vision with strategic execution to produce work that is engaging, authentic, and
                  purposeful.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="illustration-wrap">
              <CollaborationIllustration />
            </div>
          </Reveal>
        </div>
      </section>
      <SectionDivider />

      {/* Our Team Philosophy */}
      <section className="page-section">
        <Reveal>
          <SectionHeading
            eyebrow="Our Team Philosophy"
            title="Disciplines within"
            highlight="the studio."
            subtitle="Rather than focusing on individuals, we emphasize the collective expertise behind every production. Our multidisciplinary approach brings together writers, producers, cinematographers, editors, designers, and creative strategists who contribute their specialized skills throughout each stage of development."
          />
        </Reveal>
        <Reveal selector=".info-card" stagger={0.08}>
          <div className="grid-3">
            {disciplines.map((d) => {
              const Icon = d.icon;
              return (
                <InfoCard key={d.title} icon={<Icon size={20} />} title={d.title} desc={d.desc} />
              );
            })}
          </div>
        </Reveal>
      </section>
      <SectionDivider />

      {/* Professional Standards */}
      <section className="page-section">
        <Reveal>
          <SectionHeading
            eyebrow="Professional Standards"
            title="Every production follows"
            highlight="structured creative workflows."
          />
        </Reveal>
        <Reveal selector=".cap-card" stagger={0.06}>
          <div className="grid-3">
            {standards.map((s) => {
              const Icon = s.icon;
              return (
                <div className="cap-card" key={s.title}>
                  <div className="cap-card-icon"><Icon size={18} /></div>
                  <span className="cap-card-text">{s.title}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>
      <SectionDivider />

      {/* Industries We Serve */}
      <section className="page-section">
        <Reveal>
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Serving diverse"
            highlight="creative sectors."
          />
        </Reveal>
        <Reveal selector=".industry-card" stagger={0.06}>
          <div className="grid-3">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div className="industry-card" key={ind.title}>
                  <div className="industry-card-icon"><Icon size={22} /></div>
                  <h3>{ind.title}</h3>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>
      <SectionDivider />

      {/* Closing Statement */}
      <section className="page-section">
        <Reveal>
          <div className="text-content" style={{ margin: "0 auto", textAlign: "center", maxWidth: 720 }}>
            <p className="lead">
              Every project represents an opportunity to create meaningful visual experiences that
              connect with audiences and elevate the stories entrusted to us.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}

import { PageHero, SectionDivider, CTASection, Reveal, InfoCard, SectionHeading } from "../components/shared";
import { CommitmentIllustration } from "../components/illustrations";
import {
  SparkleIcon,
  StarIcon,
  LightbulbIcon,
  LockIcon,
  HeartIcon,
  GlobeIcon,
} from "../components/Icons";

const commitments = [
  {
    icon: SparkleIcon,
    title: "Creative Integrity",
    desc: "Every production remains true to its creative vision while respecting the goals of our collaborators. We never compromise artistic intention for expediency.",
  },
  {
    icon: StarIcon,
    title: "Professional Excellence",
    desc: "We strive for consistency, precision, and quality in every aspect of our work — from production planning to final delivery.",
  },
  {
    icon: LightbulbIcon,
    title: "Innovation",
    desc: "We continue to evolve alongside emerging technologies and storytelling techniques, exploring new creative possibilities in every production.",
  },
  {
    icon: LockIcon,
    title: "Confidentiality",
    desc: "We are committed to protecting the confidentiality of every project, partnership, and creative concept — safeguarding intellectual property with the utmost discretion.",
  },
  {
    icon: HeartIcon,
    title: "Long-Term Partnerships",
    desc: "Our objective is to build relationships based on trust, collaboration, and shared success — investing in partnerships that endure beyond individual projects.",
  },
  {
    icon: GlobeIcon,
    title: "Industry Responsibility",
    desc: "We support ethical production practices, originality, copyright protection, and professional standards throughout the creative industry.",
  },
];

export default function Commitments() {
  return (
    <>
      <PageHero
        eyebrow="Our Commitments"
        title="Our Commitments"
        subtitle="The principles that define how we work, how we collaborate, and how we deliver — every project, every time."
      />
      <SectionDivider />

      <section className="page-section">
        <div className="two-col">
          <Reveal>
            <SectionHeading
              eyebrow="What We Stand For"
              title="Commitments that"
              highlight="define our work."
            />
            <div className="text-content">
              <p>
                Every project we undertake is guided by a set of core commitments that define our
                approach to creative work, professional relationships, and industry responsibility.
              </p>
              <p>
                These commitments are not aspirational — they are operational. They shape how we
                plan, how we create, how we collaborate, and how we deliver.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="illustration-wrap">
              <CommitmentIllustration />
            </div>
          </Reveal>
        </div>
      </section>
      <SectionDivider />

      <section className="page-section">
        <Reveal>
          <SectionHeading
            eyebrow="Our Commitments"
            title="Six commitments,"
            highlight="one standard."
          />
        </Reveal>
        <Reveal selector=".info-card" stagger={0.08}>
          <div className="grid-3">
            {commitments.map((c, i) => {
              const Icon = c.icon;
              return (
                <InfoCard
                  key={c.title}
                  num={String(i + 1).padStart(2, "0")}
                  icon={<Icon size={20} />}
                  title={c.title}
                  desc={c.desc}
                />
              );
            })}
          </div>
        </Reveal>
      </section>
      <SectionDivider />

      <section className="page-section">
        <Reveal>
          <div className="text-content" style={{ margin: "0 auto", textAlign: "center", maxWidth: 720 }}>
            <p className="lead">
              These commitments are not just what we promise — they are what we deliver. Every
              project, every partnership, every frame.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}

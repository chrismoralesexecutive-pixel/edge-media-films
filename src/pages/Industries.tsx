import { PageHero, SectionDivider, CTASection, Reveal, SectionHeading } from "../components/shared";
import { IndustryIllustration } from "../components/illustrations";
import {
  FilmIcon,
  ClapperIcon,
  BookIcon,
  ChartIcon,
  CodeIcon,
  ApertureIcon,
  SparkleIcon,
  StarIcon,
} from "../components/Icons";

const industries = [
  {
    icon: FilmIcon,
    title: "Film & Entertainment",
    desc: "Supporting film studios and entertainment brands with trailers, promotional media, and creative development.",
  },
  {
    icon: ClapperIcon,
    title: "Production Companies",
    desc: "Partnering with production companies across development, production, and post-production.",
  },
  {
    icon: StarIcon,
    title: "Independent Creators",
    desc: "Collaborating with independent filmmakers and creators to bring ambitious visions to life.",
  },
  {
    icon: BookIcon,
    title: "Publishing",
    desc: "Bringing stories to visual life through cinematic adaptations and promotional content.",
  },
  {
    icon: ChartIcon,
    title: "Corporate Communications",
    desc: "Producing professional visual content for corporate storytelling and branding.",
  },
  {
    icon: ApertureIcon,
    title: "Education",
    desc: "Creating educational media and visual content that informs and inspires.",
  },
  {
    icon: SparkleIcon,
    title: "Digital Media",
    desc: "Developing visual experiences and digital content across emerging platforms.",
  },
  {
    icon: CodeIcon,
    title: "Creative Agencies",
    desc: "Delivering cinematic production and creative content for agency campaigns.",
  },
];

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Clients & Industries"
        title="Industries We Serve"
        subtitle="Rather than showing confidential clients, we display the industries we serve — reflecting the breadth of our creative expertise across diverse sectors."
      />
      <SectionDivider />

      <section className="page-section">
        <div className="two-col">
          <Reveal>
            <SectionHeading
              eyebrow="Our Reach"
              title="Serving diverse"
              highlight="creative sectors."
            />
            <div className="text-content">
              <p>
                Edge Media Films serves a broad range of industries — from film studios and
                production companies to corporate communications and technology brands.
              </p>
              <p>
                Our multidisciplinary approach allows us to adapt our creative expertise to the
                unique needs of each sector, while maintaining the same standards of cinematic
                excellence across every project.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="illustration-wrap">
              <IndustryIllustration />
            </div>
          </Reveal>
        </div>
      </section>
      <SectionDivider />

      <section className="page-section">
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="Sectors we"
            highlight="serve."
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
                  <p>{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>
      <SectionDivider />

      <section className="page-section">
        <Reveal>
          <div className="text-content" style={{ margin: "0 auto", textAlign: "center", maxWidth: 720 }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Closing Statement</div>
            <p className="lead">
              We value the trust our collaborators place in us. To protect confidential information
              and intellectual property, many of our productions and partnerships remain undisclosed
              until publicly released.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}

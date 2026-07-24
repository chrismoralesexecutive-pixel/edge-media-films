import { PageHero, SectionDivider, CTASection, Reveal, SectionHeading } from "../components/shared";
import { VisionIllustration, StorytellingIllustration, SpiralIllustration } from "../components/illustrations";

export default function WhyWeDoIt() {
  return (
    <>
      <PageHero
        eyebrow="Why We Do It"
        title="Why We Do It"
        subtitle="Stories shape perspectives, preserve ideas, and connect people across cultures and generations. Our work is driven by the belief that thoughtful storytelling can create meaningful experiences that endure beyond the screen."
      />
      <SectionDivider />

      {/* Our Purpose */}
      <section className="page-section">
        <div className="two-col">
          <Reveal>
            <SectionHeading
              eyebrow="Our Purpose"
              title="Stories that"
              highlight="endure."
            />
            <div className="text-content">
              <p>
                We exist to help <strong>creators, organizations, and brands</strong> communicate with
                clarity, creativity, and authenticity through cinematic media.
              </p>
              <p>
                We believe that stories have the ability to <strong>educate, inspire, preserve culture,
                and create lasting emotional connections</strong> — and our work is driven by a
                commitment to helping meaningful stories reach their audiences through thoughtful
                creative execution.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="illustration-wrap">
              <VisionIllustration />
            </div>
          </Reveal>
        </div>
      </section>
      <SectionDivider />

      {/* Our Vision */}
      <section className="page-section">
        <div className="two-col">
          <Reveal>
            <div className="illustration-wrap">
              <StorytellingIllustration />
            </div>
          </Reveal>
          <Reveal>
            <SectionHeading
              eyebrow="Our Vision"
              title="A creative industry"
              highlight="built to last."
            />
            <div className="text-content">
              <p>
                To contribute to a creative industry that values <strong>originality, craftsmanship,
                and responsible storytelling</strong> while continuously embracing innovation.
              </p>
              <p>
                We approach every production with the understanding that <strong>every frame serves
                the story</strong> — that technical excellence is not an end in itself, but a means to
                deeper emotional resonance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <SectionDivider />

      {/* Looking Forward */}
      <section className="page-section">
        <Reveal>
          <div className="illustration-wrap" style={{ maxWidth: 320, margin: "0 auto 40px" }}>
            <SpiralIllustration />
          </div>
          <div className="text-content" style={{ margin: "0 auto", textAlign: "center", maxWidth: 720 }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Looking Forward</div>
            <p className="lead">
              As technology evolves, so do the ways stories are shared. Edge Media Films remains
              committed to exploring new creative possibilities while preserving the timeless
              principles of cinematic storytelling.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}

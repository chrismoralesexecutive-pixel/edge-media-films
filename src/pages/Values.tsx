import { PageHero, SectionDivider, CTASection, Reveal, ValueBlock } from "../components/shared";
import {
  ValueIllustration,
  SpiralIllustration,
  LayersIllustration,
  CommitmentIllustration,
  VisionIllustration,
  IndustryIllustration,
} from "../components/illustrations";
import {
  SparkleIcon,
  LightbulbIcon,
  StarIcon,
  UsersIcon,
  AwardIcon,
  LockIcon,
} from "../components/Icons";

const values = [
  {
    num: "01",
    title: "Creativity",
    desc: "Creativity is the foundation of every project, inspiring fresh ideas and meaningful visual experiences. We approach every story with a commitment to finding the most compelling way to bring it to life.",
    icon: SparkleIcon,
    illustration: ValueIllustration,
  },
  {
    num: "02",
    title: "Innovation",
    desc: "We continually embrace new techniques, technologies, and creative approaches that strengthen our productions — pushing creative boundaries while maintaining the highest standards of craft.",
    icon: LightbulbIcon,
    illustration: SpiralIllustration,
  },
  {
    num: "03",
    title: "Craftsmanship",
    desc: "Every frame, edit, and design decision reflects our commitment to quality and precision. We believe that excellence lives in the details — and that those details define exceptional work.",
    icon: StarIcon,
    illustration: LayersIllustration,
  },
  {
    num: "04",
    title: "Collaboration",
    desc: "Successful productions are built through open communication, mutual respect, and shared creative goals. We approach every partnership as a genuine collaboration, not a transaction.",
    icon: UsersIcon,
    illustration: CommitmentIllustration,
  },
  {
    num: "05",
    title: "Excellence",
    desc: "We pursue the highest standards across every stage of production, from concept development to final delivery — refusing to settle for anything less than our best.",
    icon: AwardIcon,
    illustration: VisionIllustration,
  },
  {
    num: "06",
    title: "Confidentiality",
    desc: "Professional trust begins with protecting the ideas, intellectual property, and creative work entrusted to us. We safeguard every partnership with the utmost discretion.",
    icon: LockIcon,
    illustration: IndustryIllustration,
  },
];

export default function Values() {
  return (
    <>
      <PageHero
        eyebrow="Our Values"
        title="Our Values"
        subtitle="These principles guide every project, every partnership, and every creative decision we make at Edge Media Films."
      />
      <SectionDivider />

      {values.map((v, i) => {
        const Icon = v.icon;
        const Illustration = v.illustration;
        return (
          <div key={v.num}>
            <section className="page-section" style={{ paddingTop: i === 0 ? "clamp(80px, 12vh, 130px)" : undefined }}>
              <Reveal>
                <ValueBlock
                  num={v.num}
                  title={v.title}
                  desc={v.desc}
                  icon={<Icon size={22} />}
                  illustration={<Illustration />}
                  reverse={i % 2 === 1}
                />
              </Reveal>
            </section>
            {i < values.length - 1 && <SectionDivider />}
          </div>
        );
      })}

      <CTASection />
    </>
  );
}

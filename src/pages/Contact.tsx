import { useState } from "react";
import { PageHero, SectionDivider, Reveal, SectionHeading } from "../components/shared";
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from "../components/Icons";

const faqs = [
  {
    q: "What types of projects does Edge Media Films accept?",
    a: "We accept projects across film, entertainment, publishing, corporate, education, and digital media. Our multidisciplinary team handles everything from story development to final delivery.",
  },
  {
    q: "How does the consultation process work?",
    a: "We operate through scheduled consultations. After receiving your inquiry, we schedule a discovery call to understand your project, objectives, and timeline before proposing a creative approach.",
  },
  {
    q: "What is the typical project timeline?",
    a: "Timelines vary based on project scope and complexity. A typical production moves through discovery, research, development, production, and delivery — usually spanning several weeks to several months.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Based in New York, we work with clients and partners worldwide through remote collaboration and scheduled consultations.",
  },
  {
    q: "How do you handle confidentiality?",
    a: "We operate under strict confidentiality agreements and intellectual property protections. All project details, creative concepts, and client identities remain confidential until publicly released.",
  },
  {
    q: "Do you accept unsolicited project submissions?",
    a: "No. We operate through scheduled consultations and partnership inquiries only. We do not accept walk-in appointments or unsolicited project submissions.",
  },
];

const inquiryCategories = [
  "Film & Trailer Production",
  "Story Development & Screenwriting",
  "Photography & Visual Content",
  "Website & Digital Design",
  "Marketing & Branding",
  "General Inquiry",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's create something"
        highlight="meaningful."
        subtitle="We welcome partnership inquiries from organizations, production companies, agencies, and creative collaborators."
      />
      <SectionDivider />

      <section className="page-section">
        <div className="contact-grid">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Send an Inquiry"
                title="Start a"
                highlight="conversation."
              />
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <label>
                    <span className="field-label">Full Name</span>
                    <input type="text" placeholder="Your name" required />
                  </label>
                  <label>
                    <span className="field-label">Organization</span>
                    <input type="text" placeholder="Company or studio" />
                  </label>
                </div>
                <label>
                  <span className="field-label">Email Address</span>
                  <input type="email" placeholder="your@email.com" required />
                </label>
                <label>
                  <span className="field-label">Inquiry Category</span>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      borderRadius: 12,
                      border: "1px solid var(--panel-border)",
                      background: "rgba(16,16,19,0.6)",
                      backdropFilter: "blur(12px)",
                      color: "var(--text)",
                      fontFamily: "var(--body-font)",
                      fontSize: 14,
                      fontWeight: 300,
                      outline: "none",
                    }}
                  >
                    <option value="">Select a category...</option>
                    {inquiryCategories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </label>
                <label>
                  <span className="field-label">Project Details</span>
                  <textarea placeholder="Tell us about your project, timeline, and vision..." required />
                </label>
                <button type="submit" className="btn primary" style={{ alignSelf: "flex-start" }}>
                  {submitted ? "Message Sent ✓" : "Send Inquiry"}
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal>
            <div className="contact-info-panel glass-panel">
              <h3>Contact Information</h3>
              <div className="contact-info-item">
                <MailIcon size={18} />
                <a href="mailto:contact@edgemediafilms.com">contact@edgemediafilms.com</a>
              </div>
              <div className="contact-info-item">
                <PhoneIcon size={18} />
                <a href="tel:+12125551234">+1 (212) 555-1234</a>
              </div>
              <div className="contact-info-item">
                <MapPinIcon size={18} />
                <span>New York, NY — Worldwide</span>
              </div>
              <div className="contact-info-item">
                <ClockIcon size={18} />
                <span>Mon–Fri, 9:00 AM – 6:00 PM EST</span>
              </div>

              <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--panel-border)" }}>
                <h4 style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold-bright)", marginBottom: 12 }}>
                  Expected Response Time
                </h4>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--text-dim)", fontWeight: 300 }}>
                  We respond to all inquiries within 2–3 business days. For urgent matters, please
                  indicate the timeline in your message.
                </p>
              </div>

              <div className="contact-notice">
                <p>
                  Edge Media Films operates through scheduled consultations and partnership inquiries.
                  We do not accept walk-in appointments or unsolicited project submissions.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
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
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}

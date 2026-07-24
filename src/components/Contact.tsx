import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../utils/reducedMotion";
import { MailIcon, PhoneIcon, MapPinIcon } from "./Icons";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const rootRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(".contact-anim", { opacity: 1, y: 0 });
        return;
      }
      gsap.from(".contact-anim", {
        opacity: 0, y: 30,
        duration: 0.9, ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: "#contact", start: "top 78%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" ref={rootRef}>
      <div style={{ maxWidth: 560 }}>
        <div className="eyebrow contact-anim">Contact</div>
        <h2 className="section-title contact-anim">Let's create something<br />meaningful.</h2>
        <p className="section-subtitle contact-anim">
          We welcome partnership inquiries from organizations, production companies, agencies,
          and creative collaborators.
        </p>
      </div>

      <div className="contact-grid contact-anim">
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
            <span className="field-label">Project Details</span>
            <textarea placeholder="Tell us about your project, timeline, and vision..." required />
          </label>
          <button type="submit" className="btn primary" style={{ alignSelf: "flex-start" }}>
            {submitted ? "Message Sent ✓" : "Send Inquiry"}
          </button>
        </form>

        <div className="contact-info-panel glass-panel">
          <h3>Get in Touch</h3>
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
          <div className="contact-notice">
            <p>
              Edge Media Films operates through scheduled consultations and partnership inquiries.
              We do not accept walk-in appointments or unsolicited project submissions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

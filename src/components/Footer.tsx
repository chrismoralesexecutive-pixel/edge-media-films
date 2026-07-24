import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            EDGE <em>MEDIA</em> FILMS
          </div>
          <p>
            Edge Media Films is committed to delivering cinematic storytelling, creative excellence,
            and professional collaboration through every project.
          </p>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <Link to="/who-we-are">Who We Are</Link>
          <Link to="/why-we-do-it">Why We Do It</Link>
          <Link to="/values">Our Values</Link>
          <Link to="/commitments">Our Commitments</Link>
        </div>
        <div className="footer-col">
          <h5>Work</h5>
          <Link to="/what-we-do">What We Do</Link>
          <Link to="/creative-process">Creative Process</Link>
          <Link to="/productions">Productions</Link>
          <Link to="/industries">Industries</Link>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <Link to="/services/screenwriting">Screenwriting</Link>
          <Link to="/services/cinematography">Cinematography</Link>
          <Link to="/services/photography">Photography</Link>
          <Link to="/services/trailers">Trailers & Promo</Link>
          <Link to="/services/web-design">Web Design</Link>
          <Link to="/services/marketing">Marketing</Link>
        </div>
        <div className="footer-col">
          <h5>Contact</h5>
          <Link to="/contact">Contact</Link>
          <Link to="/awards">Awards & Recognition</Link>
          <a href="mailto:contact@edgemediafilms.com">contact@edgemediafilms.com</a>
          <a href="tel:+12125551234">+1 (212) 555-1234</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} Edge Media Films. All rights reserved.</span>
        <span>New York, NY — Worldwide</span>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/who-we-are", label: "Who We Are" },
    { to: "/what-we-do", label: "What We Do" },
    { to: "/productions", label: "Productions" },
    { to: "/awards", label: "Awards" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <Link to="/" className="logo">
        EDGE <em>MEDIA</em> FILMS
      </Link>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map((l) => (
          <Link key={l.to} to={l.to}>{l.label}</Link>
        ))}
      </div>
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>
    </nav>
  );
}

import { useState } from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Services from "../components/Services";
import Productions from "../components/Productions";
import Recognition from "../components/Recognition";
import Contact from "../components/Contact";
import Loader from "../components/Loader";

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      <Loader onComplete={() => setLoaderDone(true)} />
      <Hero startAnimations={loaderDone} />
      <div className="section-divider" />
      <Introduction />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <Productions />
      <div className="section-divider" />
      <Recognition />
      <div className="section-divider" />
      <Contact />
    </>
  );
}

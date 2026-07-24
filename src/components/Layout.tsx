import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SceneCanvas from "./SceneCanvas";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <SceneCanvas />
      <div id="vignette"></div>
      <div id="grain"></div>
      <Nav />
      <main className="page-content" key={location.pathname}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

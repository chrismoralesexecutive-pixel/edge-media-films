import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import WhyWeDoIt from "./pages/WhyWeDoIt";
import Productions from "./pages/Productions";
import Awards from "./pages/Awards";
import Values from "./pages/Values";
import Commitments from "./pages/Commitments";
import CreativeProcess from "./pages/CreativeProcess";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import ServicePage from "./components/ServicePage";
import {
  screenwriting,
  cinematography,
  photography,
  trailers,
  webDesign,
  marketing,
} from "./data/services";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/why-we-do-it" element={<WhyWeDoIt />} />
        <Route path="/productions" element={<Productions />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/values" element={<Values />} />
        <Route path="/commitments" element={<Commitments />} />
        <Route path="/creative-process" element={<CreativeProcess />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/screenwriting" element={<ServicePage config={screenwriting} />} />
        <Route path="/services/cinematography" element={<ServicePage config={cinematography} />} />
        <Route path="/services/photography" element={<ServicePage config={photography} />} />
        <Route path="/services/trailers" element={<ServicePage config={trailers} />} />
        <Route path="/services/web-design" element={<ServicePage config={webDesign} />} />
        <Route path="/services/marketing" element={<ServicePage config={marketing} />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

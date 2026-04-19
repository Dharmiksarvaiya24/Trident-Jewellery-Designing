import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "../pages/Index";
import About from "../pages/About";
import Clients from "../pages/Clients";
import Pricing from "../pages/Pricing";
import Services from "../pages/Services";
import OurCreations from "../pages/OurCreations";
import Terms from "../pages/Terms";
import FAQs from "../pages/FAQs";
import CadDesigning from "../pages/services/CadDesigning";
import Rendering from "../pages/services/Rendering";
import HiphopWork from "../pages/services/HiphopWork";
import FaceWork from "../pages/services/FaceWork";
import ManualDesigning from "../pages/services/ManualDesigning";
import Manufacturing from "../pages/services/Manufacturing";
import FileSelling from "../pages/services/FileSelling";
import CustomJewelry from "../pages/services/CustomJewelry";
import NotFound from "../pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-creations" element={<OurCreations />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/services/cad-designing" element={<CadDesigning />} />
        <Route path="/services/rendering" element={<Rendering />} />
        <Route path="/services/hiphop-work" element={<HiphopWork />} />
        <Route path="/services/face-work" element={<FaceWork />} />
        <Route path="/services/manual-designing" element={<ManualDesigning />} />
        <Route path="/services/manufacturing" element={<Manufacturing />} />
        <Route path="/services/file-selling" element={<FileSelling />} />
        <Route path="/services/custom-jewelry" element={<CustomJewelry />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

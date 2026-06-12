import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React, { Suspense } from "react";

// Code splitting for all pages
const Index = React.lazy(() => import("../pages/Index"));
const About = React.lazy(() => import("../pages/About"));
const Clients = React.lazy(() => import("../pages/Clients"));
const Pricing = React.lazy(() => import("../pages/Pricing"));
const Services = React.lazy(() => import("../pages/Services"));
const OurCreations = React.lazy(() => import("../pages/OurCreations"));
const Terms = React.lazy(() => import("../pages/Terms"));
const FAQs = React.lazy(() => import("../pages/FAQs"));
const CadDesigning = React.lazy(() => import("../pages/services/CadDesigning"));
const Rendering = React.lazy(() => import("../pages/services/Rendering"));
const HiphopWork = React.lazy(() => import("../pages/services/HiphopWork"));
const FaceWork = React.lazy(() => import("../pages/services/FaceWork"));
const ManualDesigning = React.lazy(() => import("../pages/services/ManualDesigning"));
const Manufacturing = React.lazy(() => import("../pages/services/Manufacturing"));
const FileSelling = React.lazy(() => import("../pages/services/FileSelling"));
const CustomJewelry = React.lazy(() => import("../pages/services/CustomJewelry"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

// Loading fallback for Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
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
    </Suspense>
  );
};

export default AnimatedRoutes;

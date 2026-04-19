import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import mfg1_1 from "@/assets/imgs/Manufacturing/1.mp4";
import mfg1_2 from "@/assets/imgs/Manufacturing/2.jpg";
import mfg1_3 from "@/assets/imgs/Manufacturing/3.jpg";

import mfg2_1 from "@/assets/imgs/Manufacturing/4.mp4";
import mfg2_2 from "@/assets/imgs/Manufacturing/5.webp";
import mfg2_3 from "@/assets/imgs/Manufacturing/6.png";

import mfg3_1 from "@/assets/imgs/Manufacturing/7.mp4";
import mfg3_2 from "@/assets/imgs/Manufacturing/8.jpg";
import mfg3_3 from "@/assets/imgs/Manufacturing/9.png";

import mfg4_1 from "@/assets/imgs/Manufacturing/10.mp4";
import mfg4_2 from "@/assets/imgs/Manufacturing/11.jpg";
import mfg4_3 from "@/assets/imgs/Manufacturing/12.jpg";

const sections = [
  {
    images: [mfg1_1, mfg1_2, mfg1_3],
    title: "1. Premium-Quality Finish Results",
    description: "With a smooth workflow across every stage — CAD → CAM → Casting → Setting — the final jewellery comes out with a premium, high-end finish."
  },
  {
    images: [mfg2_1, mfg2_2, mfg2_3],
    title: "2. Premium Polishing & Finishing",
    description: "Smooth surfaces, sharp detailing, and a clean shine — our polishing gives jewellery a luxury-level finish. No rough marks, no uneven shine."
  },
  {
    images: [mfg3_1, mfg3_2, mfg3_3],
    title: "3. Strong Quality Check at Every Stage",
    description: "From Wax → Casting → Filing → Setting → Polishing, every step goes through strict QC. Mistakes are caught during manufacturing, not at delivery."
  },
  {
    images: [mfg4_1, mfg4_2, mfg4_3],
    title: "4. Perfect Comfort Fit for Daily Wear",
    description: "Smooth edges, soft inner finishing, and a comfortable wearing experience — the jewellery feels like it was made personally for the customer."
  },
];

const RenderMedia = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  if (src.endsWith(".mp4")) {
    return <video src={src} autoPlay loop muted playsInline className={className} />;
  }
  return <OptimizedImage src={src} alt={alt} className={className} />;
};

const Manufacturing = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-10 transition-colors text-sm tracking-wide group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Services
          </Link>
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Production</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Manufacturing</h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
          </div>
          <div className="flex flex-col gap-16 md:gap-24">
            {sections.map((section, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
                <div className="w-full md:w-1/2">
                  <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
                    <div className="col-span-2 aspect-video overflow-hidden rounded-2xl border border-border hover:border-primary/40 transition-colors duration-300 relative group">
                      <RenderMedia src={section.images[0]} alt={section.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-xl border border-border hover:border-primary/40 transition-colors duration-300 relative group">
                      <RenderMedia src={section.images[1]} alt={`${section.title} detail 1`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-xl border border-border hover:border-primary/40 transition-colors duration-300 relative group">
                      <RenderMedia src={section.images[2]} alt={`${section.title} detail 2`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="w-8 h-px bg-primary/60 mb-4 mx-auto md:mx-0" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{section.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Manufacturing;
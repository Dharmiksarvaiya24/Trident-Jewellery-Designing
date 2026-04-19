import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import cad1_1 from "@/assets/imgs/Cad/1.3.jpg";
import cad1_2 from "@/assets/imgs/Cad/1.2.png";
import cad1_3 from "@/assets/imgs/Cad/1.1.png";
import cad2_1 from "@/assets/imgs/Cad/2.3.jpg";
import cad2_2 from "@/assets/imgs/Cad/2.2.png";
import cad2_3 from "@/assets/imgs/Cad/2.1.png";
import cad3_1 from "@/assets/imgs/Cad/3.3.jpg";
import cad3_2 from "@/assets/imgs/Cad/3.2.png";
import cad3_3 from "@/assets/imgs/Cad/3.1.png";
import cad4_1 from "@/assets/imgs/Cad/4.3.jpg";
import cad4_2 from "@/assets/imgs/Cad/4.2.png";
import cad4_3 from "@/assets/imgs/Cad/4.1.png";

const sections = [
  {
    images: [cad1_1, cad1_2, cad1_3],
    title: "1. Realistic Photo Before Manufacturing",
    description: "Clients can see the jewellery in a realistic look even before it is manufactured.Metal shine, diamond sparkle, lighting — everything appears perfect."
  },
  {
    images: [cad2_1, cad2_2, cad2_3],
    title: "2. Extremely Useful for Marketing",
    description: "For websites, Instagram, WhatsApp, and catalogs,renering provides premium-quality images.You can even sell jewellery without making the actual piece. "
  },
  {
    images: [cad3_1, cad3_2, cad3_3],
    title: "3. Cost & Time Saving",
    description: "No need for photoshoots or physical samples.Clients can approve the design directly through rendering."
  },
  {
    images: [cad4_1, cad4_2, cad4_3],
    title: "4. Gives Jewellery a High-End Premium Look",
    description: "Rendered images make the jewellery appear expensive, luxurious, and polished.This strongly enhances the brand image."
  },
];

const CadDesigning = () => {
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
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Our Expertise</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground text-center mb-6">
              CAD Designing
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
              >
                <div className="w-full md:w-1/2">
                  <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
                    <div className="col-span-2 aspect-video overflow-hidden rounded-2xl border border-border hover:border-primary/40 transition-colors duration-300">
                      <OptimizedImage src={section.images[0]} alt={section.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-xl border border-border hover:border-primary/40 transition-colors duration-300">
                      <OptimizedImage src={section.images[1]} alt={`${section.title} detail 1`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-xl border border-border hover:border-primary/40 transition-colors duration-300">
                      <OptimizedImage src={section.images[2]} alt={`${section.title} detail 2`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="w-8 h-px bg-primary/60 mb-4 mx-auto md:mx-0" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {section.description}
                  </p>
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

export default CadDesigning;
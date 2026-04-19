import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import custom1_1 from "@/assets/imgs/Custom jewellery/1.jpg";
import custom1_2 from "@/assets/imgs/Custom jewellery/2.jpg";
import custom1_3 from "@/assets/imgs/Custom jewellery/3.jpg";

import custom2_1 from "@/assets/imgs/Custom jewellery/4.jpg";
import custom2_2 from "@/assets/imgs/Custom jewellery/5.jpg";
import custom2_3 from "@/assets/imgs/Custom jewellery/6.jpg";

import custom3_1 from "@/assets/imgs/Custom jewellery/7.jpg";
import custom3_2 from "@/assets/imgs/Custom jewellery/8.jpg";
import custom3_3 from "@/assets/imgs/Custom jewellery/9.jpg";

import custom4_1 from "@/assets/imgs/Custom jewellery/10.jpg";
import custom4_2 from "@/assets/imgs/Custom jewellery/11.jpg";
import custom4_3 from "@/assets/imgs/Custom jewellery/12.jpg";

const sections = [
  {
    images: [custom1_1, custom1_2, custom1_3],
    title: "1. Optimized Weight in Bold Designs",
    description: "The jewellery looks bold and heavy but is internally optimized for controlled weight."
  },
  {
    images: [custom2_1, custom2_2, custom2_3],
    title: "2. Complex Geometry & Artistic Structures",
    description: "Multi-layer forms, hollow patterns, moving elements, and organic shapes require advanced CAD expertise."
  },
  {
    images: [custom3_1, custom3_2, custom3_3],
    title: "3. Truly Unique & Non-Commercial Designs",
    description: "These designs are not made for mass production. Each jewellery piece is exclusive and cannot be created by regular CAD designers."
  },
  {
    images: [custom4_1, custom4_2, custom4_3],
    title: "4. Advanced Stone Setting Techniques",
    description: "Micro pavé, invisible settings, curved surfaces, and irregular stone layouts are planned with extreme precision."
  },
];

const RenderMedia = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  if (src.endsWith(".mp4")) {
    return <video src={src} autoPlay loop muted playsInline className={className} />;
  }
  return <OptimizedImage src={src} alt={alt} className={className} />;
};

const CustomJewelry = () => {
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
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Bespoke</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Custom Jewelry</h1>
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

export default CustomJewelry;
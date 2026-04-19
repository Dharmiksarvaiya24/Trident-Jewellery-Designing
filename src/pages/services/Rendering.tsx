import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import render1 from "@/assets/imgs/Render/3.mp4";
import render2 from "@/assets/imgs/Render/2.png";
import render3 from "@/assets/imgs/Render/1.png";
import render4 from "@/assets/imgs/Render/6.mp4";
import render5 from "@/assets/imgs/Render/5.png";
import render6 from "@/assets/imgs/Render/4.png";
import render7 from "@/assets/imgs/Render/9.mp4";
import render10 from "@/assets/imgs/Render/6.png";
import render9 from "@/assets/imgs/Render/7.png";
import render11 from "@/assets/imgs/Render/12.mp4";
import render6_png from "@/assets/imgs/Render/10.png";
import render12 from "@/assets/imgs/Render/11.png";

const sections = [
  {
    images: [render1, render2, render3],
    title: "1. Realistic Photo Before Manufacturing",
    description: (
      <div className="space-y-4">
        <p>Clients can see the jewellery in a realistic look even before it is manufactured.</p>
        <p>Metal shine, diamond sparkle, lighting — everything appears perfect.</p>
      </div>
    )
  },
  {
    images: [render4, render5, render6],
    title: "2. Extremely Useful for Marketing",
    description: (
      <div className="space-y-4">
        <p>For websites, Instagram, WhatsApp, and catalogs, rendering provides premium-quality images.</p>
        <p>You can even sell jewellery without making the actual piece.</p>
      </div>
    )
  },
  {
    images: [render7, render10, render9],
    title: "3. Cost & Time Saving",
    description: (
      <div className="space-y-4">
        <p>No need for photoshoots or physical samples.</p>
        <p>Clients can approve the design directly through rendering.</p>
      </div>
    )
  },
  {
    images: [render11, render6_png, render12],
    title: "4. Gives Jewellery a High-End Premium Look",
    description: (
      <div className="space-y-4">
        <p>Rendered images make the jewellery appear expensive, luxurious, and polished.</p>
        <p>This strongly enhances the brand image.</p>
      </div>
    )
  },
];

const RenderMedia = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  if (src.endsWith(".mp4")) {
    return <video src={src} autoPlay loop muted playsInline className={className} />;
  }
  return <OptimizedImage src={src} alt={alt} className={className} />;
};

const Rendering = () => {
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
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Visual Excellence</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Rendering</h1>
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
                  <div className="text-muted-foreground text-lg leading-relaxed">{section.description}</div>
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

export default Rendering;
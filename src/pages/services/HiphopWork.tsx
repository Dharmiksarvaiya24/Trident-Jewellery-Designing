import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import hiphop1_1 from "@/assets/imgs/Hiphop/1.3.mp4";
import hiphop1_2 from "@/assets/imgs/Hiphop/1.2.png";
import hiphop1_3 from "@/assets/imgs/Hiphop/1.1.png";
import hiphop2_1 from "@/assets/imgs/Hiphop/2.3.mp4";
import hiphop2_2 from "@/assets/imgs/Hiphop/2.2.png";
import hiphop2_3 from "@/assets/imgs/Hiphop/2.1.png";
import hiphop3_1 from "@/assets/imgs/Hiphop/3.1.png";
import hiphop3_2 from "@/assets/imgs/Hiphop/3.2.png";
import hiphop3_3 from "@/assets/imgs/Hiphop/3.3.png";
import hiphop4_1 from "@/assets/imgs/Hiphop/4.1.png";
import hiphop4_2 from "@/assets/imgs/Hiphop/4.2.png";
import hiphop4_3 from "@/assets/imgs/Hiphop/4.3.png";

const sections = [
  {
    images: [hiphop1_1, hiphop1_2, hiphop1_3],
    title: "1. Bold & Heavy Look Designs",
    description: (
      <div className="space-y-4">
        <p>HipHop jewellery features big, bold, and oversized designs that instantly grab attention.</p>
      </div>
    )
  },
  {
    images: [hiphop2_1, hiphop2_2, hiphop2_3],
    title: "2. Iced-Out Watches",
    description: (
      <div className="space-y-4">
        <p>Full diamond-encrusted watches — dial, strap, and body completely covered with stones.</p>
        <p>Highly demanded in HipHop fashion.</p>
      </div>
    )
  },
  {
    images: [hiphop3_1, hiphop3_2, hiphop3_3],
    title: "3. Cuban Chains",
    description: (
      <div className="space-y-4">
        <p>One of the most iconic HipHop styles — heavy, wide, and bold links, often made fully iced-out for maximum shine.</p>
      </div>
    )
  },
  {
    images: [hiphop4_1, hiphop4_2, hiphop4_3],
    title: "4. Face-Type Pendants",
    description: (
      <div className="space-y-4">
        <p>Large pendants shaped like characters, rapper faces, cartoon icons, lion faces, etc.</p>
        <p>Very popular for creating a standout HipHop look.</p>
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

const HiphopWork = () => {
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
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Urban Luxury</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Hiphop Work</h1>
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

export default HiphopWork;
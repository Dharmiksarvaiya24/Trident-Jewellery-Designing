import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import manual1_1 from "@/assets/imgs/Manual/M0.mp4";
import manual1_2 from "@/assets/imgs/Manual/M1.jpeg";
import manual1_3 from "@/assets/imgs/Manual/M3.jpeg";

import manual2_1 from "@/assets/imgs/Manual/M4.mp4";
import manual2_2 from "@/assets/imgs/Manual/M5.jpeg";
import manual2_3 from "@/assets/imgs/Manual/M6.jpeg";

import manual3_1 from "@/assets/imgs/Manual/M7.mp4";
import manual3_2 from "@/assets/imgs/Manual/M8.jpeg";
import manual3_3 from "@/assets/imgs/Manual/M9.jpeg";

import manual4_1 from "@/assets/imgs/Manual/M10.jpeg";
import manual4_2 from "@/assets/imgs/Manual/M11.jpeg";
import manual4_3 from "@/assets/imgs/Manual/M12.jpeg";

const sections = [
  {
    images: [manual1_1, manual1_2, manual1_3],
    title: "1. Unique & Creative Concept Building",
    description: (
      <div className="space-y-4">
        <p>Complex ideas, new shapes, motifs, and styling are easily developed through manual sketching before converting them into CAD.</p>
      </div>
    )
  },
  {
    images: [manual2_1, manual2_2, manual2_3],
    title: "2. Perfect Flow & Design Logic",
    description: (
      <div className="space-y-4">
        <p>Our manual sketches already have a clean and natural flow —</p>
        <p>this ensures that both CAD and casting come out smooth, balanced, and proportionate.</p>
      </div>
    )
  },
  {
    images: [manual3_1, manual3_2, manual3_3],
    title: "3. Experienced Designers Who Understand Manufacturing",
    description: (
      <div className="space-y-4">
        <p>Our manual designers understand manufacturing logic deeply,</p>
        <p>so while sketching they already decide which area needs strength,</p>
        <p>where thickness should be adjusted, and how the design will perform in casting.</p>
      </div>
    )
  },
  {
    images: [manual4_1, manual4_2, manual4_3],
    title: "4. Strong Concept Building (Original Ideas Only)",
    description: (
      <div className="space-y-4">
        <p>Every sketch is created with a fresh idea and unique concept,</p>
        <p>giving clients exclusive designs that stand out from regular market patterns.</p>
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

const ManualDesigning = () => {
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
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Traditional Craft</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Manual Designing</h1>
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

export default ManualDesigning;
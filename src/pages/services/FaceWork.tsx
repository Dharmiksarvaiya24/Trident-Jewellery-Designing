import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import face1_1 from "@/assets/imgs/Face/1.3.mp4";
import face1_2 from "@/assets/imgs/Face/1.2.png";
import face1_3 from "@/assets/imgs/Face/1.1.png";
import face3_1 from "@/assets/imgs/Face/3.3.mp4";
import face3_2 from "@/assets/imgs/Face/3.2.png";
import face3_3 from "@/assets/imgs/Face/3.1.png";
import face4_1 from "@/assets/imgs/Face/4.1.png";
import face4_2 from "@/assets/imgs/Face/4.2.png";
import face4_3 from "@/assets/imgs/Face/4.3.png";
import face5_1 from "@/assets/imgs/Face/5.1.png";
import face5_2 from "@/assets/imgs/Face/5.2.png";
import face5_3 from "@/assets/imgs/Face/5.3.png";

const sections = [
  {
    images: [face1_1, face1_2, face1_3],
    title: "1. High Detailing in Expressions",
    description: (
      <div className="space-y-4">
        <p>Eyes, nose, beard, and hair texture —</p>
        <p>every small detail is crafted carefully in CAD to make the face look realistic, expressive, and powerful.</p>
      </div>
    )
  },
  {
    images: [face3_1, face3_2, face3_3],
    title: "2. Use of Gold + Diamond Combinations",
    description: (
      <div className="space-y-4">
        <p>Face pendants are mostly made in yellow gold with white stones,</p>
        <p>but many prefer rose gold, two-tone, or multi-colour combinations for a modern HipHop aesthetic.</p>
      </div>
    )
  },
  {
    images: [face4_1, face4_2, face4_3],
    title: "3. Baguette + Round Stone Mix Setting",
    description: (
      <div className="space-y-4">
        <p>In face work, a mix of stone settings is used:</p>
        <p>round diamonds for shine</p>
        <p>and baguettes for a premium structured look.</p>
      </div>
    )
  },
  {
    images: [face5_1, face5_2, face5_3],
    title: "4. Custom Human Faces",
    description: (
      <div className="space-y-4">
        <p>Clients sometimes provide their own photo,</p>
        <p>and we convert it into a HipHop-style custom face pendant.</p>
        <p>This personalised style is highly trending.</p>
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

const FaceWork = () => {
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
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Portrait Art</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Face Work</h1>
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

export default FaceWork;
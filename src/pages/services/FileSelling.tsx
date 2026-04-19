import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import file1_1 from "@/assets/imgs/File Selling/1.mp4";
import file1_2 from "@/assets/imgs/File Selling/1.png";
import file1_3 from "@/assets/imgs/File Selling/2.png";

import file2_1 from "@/assets/imgs/File Selling/3.mp4";
import file2_2 from "@/assets/imgs/File Selling/3.png";
import file2_3 from "@/assets/imgs/File Selling/4.png";

import file3_1 from "@/assets/imgs/File Selling/5.mp4";
import file3_2 from "@/assets/imgs/File Selling/5.png";
import file3_3 from "@/assets/imgs/File Selling/6.png";

import file4_1 from "@/assets/imgs/File Selling/7.mp4";
import file4_2 from "@/assets/imgs/File Selling/7.png";
import file4_3 from "@/assets/imgs/File Selling/8.png";

const sections = [
  {
    images: [file1_1, file1_2, file1_3],
    title: "1. Instant Use Designs (No Waiting)",
    description: (
      <div className="space-y-4">
        <p>Ready files are pre-completed CAD/STL designs that require no modifications.</p>
        <p>Clients can download them instantly and start production immediately.</p>
      </div>
    )
  },
  {
    images: [file2_1, file2_2, file2_3],
    title: "2. Multiple Style Categories Available",
    description: (
      <div className="space-y-4">
        <p>Our ready files include a wide variety of jewellery types such as:</p>
        <ul className="grid grid-cols-2 gap-2 text-left w-fit mx-auto md:mx-0">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>Rings</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>Earrings</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>Pendants</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>Bracelets</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>Necklaces</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>Bangles</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>Facework designs</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>HipHop designs</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>Lightweight pieces</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>Trend-based collections</li>
        </ul>
        <p>These categories help clients choose exactly what they need.</p>
      </div>
    )
  },
  {
    images: [file3_1, file3_2, file3_3],
    title: "3. STL + 3DM + Render Images Included",
    description: (
      <div className="space-y-4">
        <p>We provide a complete package with every design, including:</p>
        <ul className="space-y-2 text-left w-fit mx-auto md:mx-0">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>CAD File (3DM)</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>STL File (Casting-Ready)</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>Rendering Files (JPG, PNG, MP4)</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>Render Videos</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>Render Images in Multiple Angles / Views</li>
        </ul>
        <p>This bundle is perfect for manufacturing, marketing, and instant use.</p>
      </div>
    )
  },
  {
    images: [file4_1, file4_2, file4_3],
    title: "4. Affordable & Time-Saving",
    description: (
      <div className="space-y-4">
        <p>Clients don't need to order custom designs or wait for new CAD work.</p>
        <p>By purchasing ready files, they save both cost and time while getting professional-quality designs.</p>
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

const FileSelling = () => {
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
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Digital Library</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">File Selling</h1>
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

export default FileSelling;
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";
import { Link } from "react-router-dom";

import cadImg from "@/assets/imgs/Searvices /Cad.png";
import renderingImg from "@/assets/imgs/Searvices /Rendering.png";
import hiphopImg from "@/assets/imgs/Searvices /Hiphop.png";
import faceImg from "@/assets/imgs/Searvices /Face.png";
import manualImg from "@/assets/imgs/Searvices /Manual.jpeg";
import mfgImg from "@/assets/imgs/Searvices /manufacturing.png";
import fileSellingImg from "@/assets/imgs/Searvices /File seling.png";
import customImg from "@/assets/imgs/Searvices /Custom.png";

const services = [
  { name: "CAD Designing", path: "/services/cad-designing", image: cadImg },
  { name: "Rendering", path: "/services/rendering", image: renderingImg },
  { name: "Hiphop Work", path: "/services/hiphop-work", image: hiphopImg },
  { name: "Face Work", path: "/services/face-work", image: faceImg },
  { name: "Manual Designing", path: "/services/manual-designing", image: manualImg },
  { name: "Manufacturing", path: "/services/manufacturing", image: mfgImg },
  { name: "File Selling", path: "/services/file-selling", image: fileSellingImg },
  { name: "Custom Jewelry", path: "/services/custom-jewelry", image: customImg },
];

const Services = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20 min-h-[80vh] flex flex-col items-center justify-center">

          <div className="text-center mb-12">
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">What We Offer</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-6">
              Our Services
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <p className="text-muted-foreground text-center max-w-2xl">
              Explore our wide range of jewelry design services
            </p>
          </div>



          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
            {services.map((service, index) => (
              <Link
                key={service.name}
                to={service.path}
                className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:scale-105"
                style={{ transition: 'all 0.3s ease' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 30px hsl(11 88% 67% / 0.15)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                <OptimizedImage
                  src={service.image}
                  alt={service.name}
                  priority={index < 4}
                  aspectRatio="square"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="transition-transform duration-700 group-hover:scale-110"
                />

                {/* Minimalist Name Overlay - Blends with UI */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/90 via-background/40 to-transparent pt-12">
                  <span className="block text-foreground font-medium text-xs md:text-sm tracking-[0.2em] uppercase text-center group-hover:text-primary transition-colors duration-300">
                    {service.name}
                  </span>
                  <div className="w-0 h-px bg-primary mx-auto mt-2 transition-all duration-500 group-hover:w-12" />
                </div>

                {/* Subtle Border Glow on Hover */}
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-xl transition-colors duration-500 pointer-events-none" />
              </Link>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Services;
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";
import tridentLogo from "@/assets/imgs/image copy.png";
import founderPhoto from "@/assets/founder-photo.png";

const About = () => {
  const [visible, setVisible] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!boxRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(boxRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto">

              {/* Page Title */}
              <div className="text-center mb-16">
                <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Our Story</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-6">
                  About <span className="text-primary">Us</span>
                </h1>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
                </div>
              </div>

              {/* Company Info */}
              <div className="flex justify-center">
                <div
                  ref={boxRef}
                  className={`bg-card rounded-2xl p-8 md:p-12 border border-border transition-all duration-1000 max-w-4xl w-full text-center hover:border-primary/40 relative overflow-hidden ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="group w-56 md:w-80 rounded-xl overflow-hidden border-2 border-primary/40 bg-muted/40 mb-4 p-4 transition-transform hover:scale-105 duration-300 flex items-center justify-center" style={{ boxShadow: '0 0 20px hsl(11 88% 67% / 0.15)' }}>
                      <OptimizedImage src={tridentLogo} alt="Trident Jewellery Logo" className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <p className="text-lg font-semibold text-foreground tracking-wide">Trident Jewellery</p>
                    <p className="text-muted-foreground leading-relaxed max-w-xl mt-2">
                      Trident Jewellery Design is a young and creative jewellery design studio, founded in 2025......
                      Whether it’s a fresh modern concept or a timeless classic, our team of experienced designers can create any CAD design — from nose pins to chokers........
                      We’re not limited to CAD only — we also specialize in realistic renderings....
                      Till now, we’ve proudly worked with 50+ clients, delivering unique creations known for their quality, precision, and fine detailing.
                      “We don’t follow trends, we create them.......”
                    </p>
                  </div>
                </div>
              </div>

              {/* About the Founder */}
              <div className="flex justify-center mt-12">
                <div className="bg-card rounded-2xl p-8 md:p-12 border border-border max-w-4xl w-full hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-primary/40 flex-shrink-0" style={{ boxShadow: '0 0 30px hsl(11 88% 67% / 0.15)' }}>
                      <OptimizedImage src={founderPhoto} alt="Founder of Trident Jewellery" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-primary text-xs tracking-[0.3em] uppercase font-medium mb-2">Founder</p>
                      <h3 className="text-2xl font-bold text-foreground mb-1">Pritesh Prajapati</h3>
                      <p className="text-primary text-sm mb-4"></p>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;

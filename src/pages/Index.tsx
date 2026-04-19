import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/imgs/1.png";
import AnimatedCounter from "@/components/AnimatedCounter";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";
import OptimizedVideo from "@/components/OptimizedVideo";
import stepSketch from "@/assets/imgs/How we are work/0Manual.png";
import stepCad from "@/assets/imgs/How we are work/1CAD.jpg";
import stepRendering from "@/assets/imgs/How we are work/2Render.jpg";
import stepStl from "@/assets/imgs/How we are work/3STL.jpg";

import exotic1 from "@/assets/imgs/Exotik collecton/0001.png";
import exotic2 from "@/assets/imgs/Exotik collecton/005.png";
import exotic3 from "@/assets/imgs/Exotik collecton/007.png";
import exotic4 from "@/assets/imgs/Exotik collecton/010.png";
import exotic5 from "@/assets/imgs/Exotik collecton/011.png";
import exotic6 from "@/assets/imgs/Exotik collecton/014.png";
import exotic7 from "@/assets/imgs/Exotik collecton/39.png";


const Index = () => {
  const [visibleBoxes, setVisibleBoxes] = useState<boolean[]>([false, false, false]);
  const [visibleImages, setVisibleImages] = useState<boolean[]>([false, false, false, false, false]);
  const [visibleWorkflowBoxes, setVisibleWorkflowBoxes] = useState<boolean[]>([false, false, false, false]);
  const [visibleWhyUsBoxes, setVisibleWhyUsBoxes] = useState<boolean[]>([false, false, false, false, false, false]);
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const galleryItems = [
    { img: exotic1, alt: "" },
    { img: exotic2, alt: "" },
    { img: exotic3, alt: "" },
    { img: exotic4, alt: "" },
    { img: exotic5, alt: "" },
    { img: exotic6, alt: "" },
    { img: exotic7, alt: "" },
  ];

  const startAutoPlay = () => {
    if (sliderInterval.current) clearInterval(sliderInterval.current);
    sliderInterval.current = setInterval(() => {
      setSliderIndex(prev => (prev + 1) % galleryItems.length);
    }, 3500);
  };

  useEffect(() => {
    startAutoPlay();
    return () => { if (sliderInterval.current) clearInterval(sliderInterval.current); };
  }, []);

  const goToSlide = (index: number) => {
    setSliderIndex(index);
    startAutoPlay();
  };

  const prevSlide = () => {
    setSliderIndex(prev => (prev - 1 + galleryItems.length) % galleryItems.length);
    startAutoPlay();
  };

  const nextSlide = () => {
    setSliderIndex(prev => (prev + 1) % galleryItems.length);
    startAutoPlay();
  };
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const workflowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const whyUsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = boxRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibleBoxes(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      }, { threshold: 0.2 });
      observer.observe(ref);
      return observer;
    });
    const imageObservers = imageRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibleImages(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      }, { threshold: 0.2 });
      observer.observe(ref);
      return observer;
    });
    const workflowObservers = workflowRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibleWorkflowBoxes(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      }, { threshold: 0.2 });
      observer.observe(ref);
      return observer;
    });
    const whyUsObservers = whyUsRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibleWhyUsBoxes(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      }, { threshold: 0.2 });
      observer.observe(ref);
      return observer;
    });
    return () => {
      observers.forEach((observer, index) => {
        if (observer && boxRefs.current[index]) observer.disconnect();
      });
      imageObservers.forEach((observer, index) => {
        if (observer && imageRefs.current[index]) observer.disconnect();
      });
      workflowObservers.forEach((observer, index) => {
        if (observer && workflowRefs.current[index]) observer.disconnect();
      });
      whyUsObservers.forEach((observer, index) => {
        if (observer && whyUsRefs.current[index]) observer.disconnect();
      });
    };
  }, []);

  return <PageTransition><div className="min-h-screen flex flex-col bg-background">

    <Header />

    <main className="flex-1 relative">

      <section className="relative z-10 bg-background">
        <div className="w-full h-[92vh] overflow-hidden relative">
          <OptimizedImage
            src={heroImg}
            alt="Trident Jewellery Hero"
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
            priority={true}
          />
        </div>
      </section>

      {/* Three Boxes Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-background">
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">

            {/* Top Row: Two Boxes */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Box 1: Role of CAD */}
              <div ref={el => boxRefs.current[0] = el} className={`bg-card rounded-xl p-6 border border-border transition-all duration-1000 hover:border-primary/40 group ${visibleBoxes[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />
                <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                  <h3 className="text-base font-semibold text-primary">Role of CAD in the Jewelry Industry</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong className="text-primary">Precision:</strong>reativity + Precision CAD ensures every design is created with accurate proportions and detailed finishing.
                    </li>
                    <li><strong className="text-primary">Prototyping:</strong> Speed & Efficiency Compared to traditional methods, CAD makes the entire designing process much faster.
                    </li>
                    <li><strong className="text-primary">Efficiency:</strong> Customization It allows easy creation of unique jewelry pieces based on each client’s personal preferences.
                    </li>
                    <li><strong className="text-primary">Custom:</strong> Visualization A realistic 3D view can be seen before the manufacturing starts, giving a clear picture of the final product.
                    </li>
                    <li><strong className="text-primary">Custom:</strong> Manufacturing Ready  CAD files can be directly used for 3D printing, CAM, and casting.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Box 2: Why CAD is Essential */}
              <div ref={el => boxRefs.current[1] = el} className={`bg-card rounded-xl p-6 border border-border transition-all duration-1000 delay-300 hover:border-primary/40 group ${visibleBoxes[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                  <h3 className="text-base font-semibold text-primary">Why CAD is Essential in Jewelry</h3>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <ul className="space-y-1 list-disc list-inside text-xs">
                        <li>High-quality, precise designs</li>
                        <li>Quick adaptability to market trends</li>
                        <li>Saves time and reduces overall cost</li>
                        <li>Better communication between designer and client </li>
                        <li>Modern workflow that meets international standards</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-primary">Business</h3>
                      <ul className="space-y-1 list-disc list-inside text-xs">
                        <li>Faster delivery</li>
                        <li>Better communication</li>
                        <li>Reduced errors</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Video Box */}
            <div ref={el => boxRefs.current[2] = el} className={`bg-card rounded-xl p-6 border border-border transition-all duration-1000 delay-600 hover:border-primary/40 ${visibleBoxes[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} max-w-3xl mx-auto`}>

              <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-muted">
                <OptimizedVideo className="w-full h-full object-cover" src="/01.mp4" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Exotic Collection Slider */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-wider">
            Exotic Collection
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          {/* Main slider */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
            >
              {galleryItems.map((item, index) => (
                <div key={index} className="min-w-full">
                  <div className="relative group">
                    <OptimizedImage
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      containerClassName="w-full h-[50vh] md:h-[65vh]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 border border-border hover:border-primary/60 flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 border border-border hover:border-primary/60 flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${sliderIndex === index
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Together Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-background">
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Our Process</p>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-wider mb-6">
              How We Will Work Together
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[{
              title: "1. Sketch or Reference Image",
              description: "You send us your sketch or reference image with your design concept.",
              img: stepSketch
            }, {
              title: "2. CAD Design",
              description: "We create a precise CAD design based on your reference.",
              img: stepCad
            }, {
              title: "3. Confirmation Images",
              description: "We share detailed images (dimensions, multiple views, proportions) for your approval.",
              img: stepRendering
            }, {
              title: "4. Final STL File Delivery",
              description: "After your confirmation, we deliver the final STL file in manufacturing-ready format.",
              img: stepStl
            }].map((step, index) => <div key={index} ref={el => workflowRefs.current[index] = el} className={`bg-card rounded-xl overflow-hidden border border-border transition-all duration-1000 hover:border-primary/40 ${visibleWorkflowBoxes[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
              transitionDelay: `${index * 200}ms`
            }}>
              <div className="relative h-64 overflow-hidden">
                <OptimizedImage
                  src={step.img}
                  alt={step.title}
                  className="transition-transform duration-500 hover:scale-110"
                  containerClassName="h-full"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>)}
          </div>

          {/* Video below workflow */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-4 border border-border hover:border-primary/40 transition-colors duration-300">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-muted">
                <OptimizedVideo className="w-full h-full object-cover" src="/Complet.mp4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-background">
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-wider mb-6">
              Why Work With Us?
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[{
              number: "01",
              title: "⚡ Super Fast Delivery",
              description: "Most designs delivered within 24 hours. Our team works with speed and accuracy to ensure your production never gets delayed. "
            }, {
              number: "02",
              title: "📈 Bulk Work Handling",
              description: "Whether you need 1 design a day or 20, we can handle bulk work efficiently "
            }, {
              number: "03",
              title: "💰 Fair Pricing With Premium Output",
              description: "Affordable pricing with top-quality results"
            }, {
              number: "04",
              title: "👨‍🏭 Experienced Team",
              description: "We have a skilled and experienced design team capable of handling even the most complex jewelry designs with high precision and professionalism."
            }, {
              number: "05",
              title: "💫 Smooth & Perfect Flow Designs",
              description: "Our designs have a clean, natural, and perfectly balanced flow. Every curve, surface, and proportion is crafted in a way that makes the design visually appealing and flawless during manufacturing."
            }, {
              number: "06",
              title: "🔐 Trust & Reliability",
              description: "The biggest reason clients work with us is trust. Your designs remain 100% secure — never leaked or shared. We always deliver on time as promised, ensuring our clients have complete confidence in our work and reliability."
            }].map((item, index) => <div key={index} ref={el => whyUsRefs.current[index] = el} className={`group bg-card rounded-xl p-6 border border-border transition-all duration-300 hover:scale-105 hover:border-primary/40 ${visibleWhyUsBoxes[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
              transitionDelay: `${index * 150}ms`
            }}>
              <div className="relative mb-4">
                <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                  {item.number}
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-primary to-gold-light rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>)}
          </div>
        </div>
      </section>

      {/* Stats Counter Strip */}
      <section className="relative overflow-hidden py-16 mb-20 bg-card border-y border-border">
        {/* Top/bottom copper dividers */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10 tracking-widest uppercase text-sm text-primary opacity-70">
            We Deliver Excellence Worldwide
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">Happy Clients</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                <AnimatedCounter end={5000} suffix="+" />
              </div>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">Designs Delivered</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                <AnimatedCounter end={4} suffix="+" />
              </div>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">Countries Served</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                <AnimatedCounter end={3} suffix="+" />
              </div>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">Years Experience</p>
            </div>
          </div>
        </div>
      </section>


    </main>

    {/* Professional Footer - End of Page */}
    <Footer />
  </div></PageTransition>;
};
export default Index;

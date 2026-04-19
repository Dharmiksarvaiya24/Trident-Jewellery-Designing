import { useEffect, useState, useRef } from "react";  
import jewelry1 from "@/assets/imgs/1.png";
import jewelry2 from "@/assets/imgs/2.png";
import jewelry3 from "@/assets/imgs/3.png";

const JewelryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([false, false, false]);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const images = [jewelry1, jewelry2, jewelry3];

  // Preload first image immediately
  useEffect(() => {
    const firstImg = new Image();
    firstImg.src = images[0];
    firstImg.onload = () => {
      setImagesLoaded(prev => {
        const newState = [...prev];
        newState[0] = true;
        return newState;
      });
    };

    // Preload next images after first one loads
    const timer = setTimeout(() => {
      images.forEach((src, index) => {
        if (index > 0) {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setImagesLoaded(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          };
        }
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 5000); // Change slide every 5 seconds
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    // Reset autoplay timer
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 5000);
    }
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
    // Reset autoplay timer
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 5000);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    // Reset autoplay timer
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 5000);
    }
  };

  return (
    <div className="w-full h-[92vh] overflow-hidden relative group">
      {!imagesLoaded[0] && (
        <div className="absolute inset-0 skeleton-shimmer z-0" />
      )}

      <div
        className="flex h-full transition-transform duration-700 ease-in-out will-change-transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full relative z-0">
            <img
              src={image}
              alt={`Luxury jewelry piece ${index + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-500 ${imagesLoaded[index] ? "opacity-100" : "opacity-0"
                }`}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding={index === 0 ? "sync" : "async"}
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/50 border border-border hover:border-primary/60 flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 backdrop-blur-sm z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/50 border border-border hover:border-primary/60 flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 backdrop-blur-sm z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                ? "bg-primary w-8"
                : "bg-muted-foreground/50 hover:bg-muted-foreground"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default JewelryCarousel;

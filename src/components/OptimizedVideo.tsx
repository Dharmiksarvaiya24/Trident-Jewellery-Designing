import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  priority?: boolean;
  aspectRatio?: "square" | "video" | "portrait" | "auto";
  containerClassName?: string;
}

const OptimizedVideo = ({
  src,
  poster,
  priority = false,
  aspectRatio = "auto",
  className,
  containerClassName,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  ...props
}: OptimizedVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Start playing once in view
          if (videoRef.current && autoPlay) {
            videoRef.current.play();
          }
          observer.disconnect();
        } else {
          // Pause when out of view to save resources
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, autoPlay]);

  // Preload priority videos
  useEffect(() => {
    if (priority && src) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "video";
      link.href = src;
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, src]);

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    auto: "",
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-muted flex items-center justify-center w-full h-full",
        aspectClasses[aspectRatio],
        containerClassName
      )}
    >
      {/* Skeleton shimmer effect */}
      {!isLoaded && (
        <div className="absolute inset-0 skeleton-shimmer z-10" />
      )}

      {/* Actual video */}
      {isInView && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          preload={priority ? "auto" : "metadata"}
          onLoadedData={() => setIsLoaded(true)}
          onCanPlayThrough={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedVideo;

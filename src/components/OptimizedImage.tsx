import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  aspectRatio?: "square" | "video" | "portrait" | "auto";
  sizes?: string;
  className?: string;
  containerClassName?: string;
  webpSrc?: string;
  quality?: "high" | "medium" | "low";
}

const OptimizedImage = ({
  src,
  alt,
  priority = false,
  aspectRatio = "auto",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className,
  containerClassName,
  webpSrc,
  quality = "high",
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [supportsWebp, setSupportsWebp] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check WebP support
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const context = canvas.getContext("2d");
    if (context) {
      context.fillStyle = "rgb(0,0,0)";
      context.fillRect(0, 0, 1, 1);
      setSupportsWebp(canvas.toDataURL("image/webp").startsWith("data:image/webp"));
    }
  }, []);

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
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Preload priority images
  useEffect(() => {
    if (priority && src) {
      const imageToPreload = supportsWebp && webpSrc ? webpSrc : src;
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = imageToPreload;
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, src, webpSrc, supportsWebp]);

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    auto: "",
  };

  // Select image source based on WebP support
  const imageSrc = supportsWebp && webpSrc ? webpSrc : src;

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

      {/* Actual image */}
      {isInView && (
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            // Fallback to original format if WebP fails
            if (imgRef.current && imageSrc !== src) {
              imgRef.current.src = src;
            }
          }}
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

export default OptimizedImage;

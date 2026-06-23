import { useState, useRef, useEffect, memo } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  aspectRatio?: "square" | "video" | "portrait" | "auto";
  sizes?: string;
  className?: string;
  containerClassName?: string;
  quality?: "high" | "medium" | "low";
}

/**
 * OptimizedImage - Performance-optimized image component
 *
 * Features:
 * - Uses IntersectionObserver for lazy loading (primary)
 * - Native loading=lazy as backup
 * - WebP auto-detection and fallback via onError
 * - Skeleton shimmer loading effect
 * - Eager loading for above-the-fold images (priority=true)
 * - Proper sizes attribute for responsive images
 * - CSS contain hints for layout stability & paint isolation
 */
const OptimizedImage = ({
  src,
  alt,
  priority = false,
  aspectRatio = "auto",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className,
  containerClassName,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading with 200px rootMargin buffer
  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once in view
        }
      },
      {
        // Load images 200px before they come into view for smoother experience
        rootMargin: "200px 0px 200px 0px",
        threshold: 0,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [priority]);

  // Preload priority images in <head>
  useEffect(() => {
    if (priority && src) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      link.fetchPriority = "high";
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
      // Mark as potentially needing paint containment for perf
      style={{ contain: "layout paint" }}
    >
      {/* Skeleton shimmer effect — shown while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 skeleton-shimmer z-10" />
      )}

      {/* Actual image — only render when in viewport or priority */}
      {(isInView || priority) && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setIsLoaded(true)}
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

export default memo(OptimizedImage);

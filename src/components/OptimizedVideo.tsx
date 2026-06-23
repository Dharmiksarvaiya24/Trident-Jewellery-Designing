import { useState, useRef, useEffect, memo } from "react";
import { cn } from "@/lib/utils";

interface OptimizedVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  priority?: boolean;
  aspectRatio?: "square" | "video" | "portrait" | "auto";
  containerClassName?: string;
  /** Whether the video starts playing automatically. Defaults to true. */
  autoPlay?: boolean;
  /** Whether the video loops. Defaults to true. */
  loop?: boolean;
  /** Whether the video is muted. Defaults to true. */
  muted?: boolean;
}

/**
 * OptimizedVideo - Performance-optimized video component
 *
 * Features:
 * - IntersectionObserver for lazy loading (loads 200px before viewport)
 * - Starts playback only when in viewport to save CPU/battery
 * - Skeleton shimmer loading effect
 * - Metadata-only preload for non-priority videos to save bandwidth
 * - Poster frame support for instant visual before first frame
 * - CSS contain hints for better paint/layout performance
 */
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
  ...props
}: OptimizedVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const videoRef = useRef<HTMLVideoElement>(null);
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
        // Load videos 200px before they come into view for smoother experience
        rootMargin: "200px 0px 200px 0px",
        threshold: 0,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [priority]);

  // Start playback once loaded and in view
  useEffect(() => {
    if (isInView && videoRef.current && autoPlay) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked by browser policy; ignore error
      });
    }
  }, [isInView, autoPlay]);

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

      {/* Actual video — only render when in viewport or priority */}
      {isInView && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
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

export default memo(OptimizedVideo);

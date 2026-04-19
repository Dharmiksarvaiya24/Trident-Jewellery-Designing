import { useEffect, useState } from "react";

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  cls: number | null; // Cumulative Layout Shift
  fid: number | null; // First Input Delay
  imageLoadTime: number | null;
  videoLoadTime: number | null;
}

type LargestContentfulPaintEntry = PerformanceEntry & {
  renderTime?: number;
  loadTime?: number;
};

type LayoutShiftEntry = PerformanceEntry & {
  hadRecentInput?: boolean;
  value?: number;
};

type FirstInputEntry = PerformanceEntry & {
  processingDuration?: number;
};

export const usePerformanceMonitor = (
  logMetrics: boolean = false
): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    imageLoadTime: null,
    videoLoadTime: null,
  });

  useEffect(() => {
    const updateMetrics = { ...metrics };

    // First Contentful Paint
    const paintEntries = performance.getEntriesByType("paint");
    const fcp = paintEntries.find((e) => e.name === "first-contentful-paint");
    if (fcp) {
      updateMetrics.fcp = Math.round(fcp.startTime);
    }

    // Largest Contentful Paint
    if ("PerformanceObserver" in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const lastEntry = list.getEntries().pop() as LargestContentfulPaintEntry;
        if (lastEntry) {
          updateMetrics.lcp = Math.round(
            lastEntry.renderTime || lastEntry.loadTime || 0
          );
          setMetrics({ ...updateMetrics });
          if (logMetrics) {
            console.log("LCP:", updateMetrics.lcp, "ms");
          }
        }
      });

      try {
        lcpObserver.observe({
          type: "largest-contentful-paint" as any,
          buffered: true,
        });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutEntry = entry as LayoutShiftEntry;
            if (!layoutEntry.hadRecentInput && layoutEntry.value) {
              updateMetrics.cls = Math.round(
                (updateMetrics.cls || 0) + layoutEntry.value
              );
            }
          }
          setMetrics({ ...updateMetrics });
          if (logMetrics) {
            console.log("CLS:", updateMetrics.cls);
          }
        });

        clsObserver.observe({ type: "layout-shift" as any, buffered: true });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const lastEntry = list.getEntries().pop() as FirstInputEntry;
          if (lastEntry && lastEntry.processingDuration) {
            updateMetrics.fid = Math.round(lastEntry.processingDuration);
            setMetrics({ ...updateMetrics });
            if (logMetrics) {
              console.log("FID:", updateMetrics.fid, "ms");
            }
          }
        });

        fidObserver.observe({ type: "first-input" as any, buffered: true });

        return () => {
          lcpObserver.disconnect();
          clsObserver.disconnect();
          fidObserver.disconnect();
        };
      } catch (e) {
        console.warn("Performance monitoring not fully supported", e);
      }
    }

    // Track image and video load times
    const originalImageSrc = Object.getOwnPropertyDescriptor(
      HTMLImageElement.prototype,
      "src"
    );
    const originalVideoSrc = Object.getOwnPropertyDescriptor(
      HTMLVideoElement.prototype,
      "src"
    );

    const imageStartTimes = new Map<HTMLImageElement, number>();
    const videoStartTimes = new Map<HTMLVideoElement, number>();

    const imageLoadHandler = (e: Event) => {
      const img = e.target as HTMLImageElement;
      const startTime = imageStartTimes.get(img);
      if (startTime) {
        const loadTime = performance.now() - startTime;
        updateMetrics.imageLoadTime = Math.round(loadTime);
        if (logMetrics) {
          console.log("Image load time:", updateMetrics.imageLoadTime, "ms");
        }
      }
    };

    const videoLoadHandler = (e: Event) => {
      const video = e.target as HTMLVideoElement;
      const startTime = videoStartTimes.get(video);
      if (startTime) {
        const loadTime = performance.now() - startTime;
        updateMetrics.videoLoadTime = Math.round(loadTime);
        if (logMetrics) {
          console.log("Video load time:", updateMetrics.videoLoadTime, "ms");
        }
      }
    };

    // Patch image and video setters
    if (originalImageSrc && originalImageSrc.set) {
      Object.defineProperty(HTMLImageElement.prototype, "src", {
        ...originalImageSrc,
        set(value: string) {
          imageStartTimes.set(this, performance.now());
          this.addEventListener("load", imageLoadHandler);
          originalImageSrc.set?.call(this, value);
        },
      });
    }

    if (originalVideoSrc && originalVideoSrc.set) {
      Object.defineProperty(HTMLVideoElement.prototype, "src", {
        ...originalVideoSrc,
        set(value: string) {
          videoStartTimes.set(this, performance.now());
          this.addEventListener("loadeddata", videoLoadHandler);
          originalVideoSrc.set?.call(this, value);
        },
      });
    }

    if (logMetrics) {
      console.log("📊 Performance Monitoring Started");
    }

    return () => {
      // Restore original property descriptors
      if (originalImageSrc) {
        Object.defineProperty(HTMLImageElement.prototype, "src", originalImageSrc);
      }
      if (originalVideoSrc) {
        Object.defineProperty(HTMLVideoElement.prototype, "src", originalVideoSrc);
      }
    };
  }, [logMetrics]);

  return metrics;
};

export const logWebVitals = (metrics: PerformanceMetrics) => {
  console.group("🎯 Web Vitals");
  console.log("FCP (First Contentful Paint):", metrics.fcp, "ms");
  console.log("LCP (Largest Contentful Paint):", metrics.lcp, "ms");
  console.log("CLS (Cumulative Layout Shift):", metrics.cls);
  console.log("FID (First Input Delay):", metrics.fid, "ms");
  console.log("Image Load Time:", metrics.imageLoadTime, "ms");
  console.log("Video Load Time:", metrics.videoLoadTime, "ms");
  console.groupEnd();
};

export default usePerformanceMonitor;

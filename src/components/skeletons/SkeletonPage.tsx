import { cn } from "@/lib/utils";
import SkeletonText from "./SkeletonText";

interface SkeletonPageProps {
  variant?: "default" | "hero" | "grid";
  className?: string;
}

const SkeletonPage = ({ variant = "default", className }: SkeletonPageProps) => {
  if (variant === "hero") {
    return (
      <div className={cn("min-h-screen", className)}>
        {/* Hero skeleton */}
        <div className="relative h-[85vh] skeleton-shimmer" />
        
        {/* Content section */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="h-12 w-1/2 mx-auto rounded-md skeleton-shimmer" />
            <SkeletonText lines={4} className="max-w-2xl mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className={cn("container mx-auto px-4 py-20", className)}>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Title */}
          <div className="text-center space-y-4">
            <div className="h-12 w-64 mx-auto rounded-md skeleton-shimmer" />
            <div className="h-6 w-96 mx-auto rounded-md skeleton-shimmer" />
          </div>
          
          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-border/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square skeleton-shimmer" />
                <div className="p-4">
                  <div className="h-5 w-3/4 rounded-md skeleton-shimmer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("container mx-auto px-4 py-20", className)}>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="h-12 w-1/3 rounded-md skeleton-shimmer" />
        <SkeletonText lines={6} />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-64 rounded-xl skeleton-shimmer" />
          <div className="h-64 rounded-xl skeleton-shimmer" />
        </div>
        <SkeletonText lines={4} />
      </div>
    </div>
  );
};

export default SkeletonPage;

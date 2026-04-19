import { cn } from "@/lib/utils";
import SkeletonCard from "./SkeletonCard";

interface SkeletonGridProps {
  count?: number;
  columns?: 1 | 2 | 3 | 4;
  hasImage?: boolean;
  imageAspect?: "square" | "video" | "portrait";
  className?: string;
}

const SkeletonGrid = ({
  count = 6,
  columns = 3,
  hasImage = true,
  imageAspect = "video",
  className,
}: SkeletonGridProps) => {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-6", columnClasses[columns], className)}>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard
          key={index}
          hasImage={hasImage}
          imageAspect={imageAspect}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default SkeletonGrid;

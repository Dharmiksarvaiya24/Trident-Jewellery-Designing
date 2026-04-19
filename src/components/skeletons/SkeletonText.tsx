import { cn } from "@/lib/utils";

interface SkeletonTextProps {
  lines?: number;
  className?: string;
  lineClassName?: string;
  lastLineWidth?: "full" | "3/4" | "1/2" | "1/4";
}

const SkeletonText = ({
  lines = 3,
  className,
  lineClassName,
  lastLineWidth = "3/4",
}: SkeletonTextProps) => {
  const widthClasses = {
    full: "w-full",
    "3/4": "w-3/4",
    "1/2": "w-1/2",
    "1/4": "w-1/4",
  };

  return (
    <div className={cn("space-y-3", className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "h-4 rounded-md skeleton-shimmer",
            index === lines - 1 ? widthClasses[lastLineWidth] : "w-full",
            lineClassName
          )}
        />
      ))}
    </div>
  );
};

export default SkeletonText;

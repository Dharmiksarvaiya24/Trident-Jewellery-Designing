import { cn } from "@/lib/utils";
import SkeletonText from "./SkeletonText";

interface SkeletonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hasImage?: boolean;
  imageAspect?: "square" | "video" | "portrait";
  textLines?: number;
}

const SkeletonCard = ({
  hasImage = true,
  imageAspect = "video",
  textLines = 3,
  className,
  ...props
}: SkeletonCardProps) => {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  };

  return (
    <div
      className={cn(
        "bg-background/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-luxury border border-border/20",
        className
      )}
      {...props}
    >
      {hasImage && (
        <div className={cn("skeleton-shimmer", aspectClasses[imageAspect])} />
      )}
      <div className="p-6 space-y-4">
        <div className="h-6 w-2/3 rounded-md skeleton-shimmer" />
        <SkeletonText lines={textLines} />
      </div>
    </div>
  );
};

export default SkeletonCard;

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";

const mediaModules = import.meta.glob("@/assets/imgs/Our creation/*.{png,jpg,jpeg,mp4,webp}", { eager: true }) as Record<string, { default: string }>;
const mediaPaths = Object.values(mediaModules).map(m => m.default);

const categories = ["All", "Rings", "Necklaces", "Bracelets", "Earrings", "Tiaras", "Collections"];
const imageAspectRatios = ["1/1", "3/4", "4/3", "4/5", "5/4", "3/4", "4/5"];
const videoAspectRatios = ["9/16", "2/3", "3/5", "9/16"];

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Fisher-Yates shuffle with a seed for deterministic but random-looking order
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const shuffled = [...arr];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const allItems = seededShuffle(
  mediaPaths.map((path, i) => {
    const hash = path.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) + i;
    const isVideo = path.endsWith(".mp4");
    const aspectRatio = isVideo
      ? videoAspectRatios[hash % videoAspectRatios.length]
      : imageAspectRatios[hash % imageAspectRatios.length];

    return {
      id: i,
      src: path,
      alt: `Creation Design ${i + 1}`,
      category: categories[hash % (categories.length - 1) + 1],
      isVideo,
      aspectRatio,
    };
  }),
  42
);

const OurCreations = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? allItems : allItems.filter(item => item.category === activeCategory);

  // Distribute into 4 columns for masonry, balancing the total heights
  const columns: typeof allItems[] = [[], [], [], []];
  const colHeights = [0, 0, 0, 0];

  const getAspectRatioValue = (ratio: string) => {
    const [w, h] = ratio.split("/").map(Number);
    return h / w; // Inverse of width/height gives relative height in a fixed-width column
  };

  filtered.forEach((item) => {
    let minHeight = colHeights[0];
    let shortestColIndex = 0;
    for (let i = 1; i < 4; i++) {
      if (colHeights[i] < minHeight) {
        minHeight = colHeights[i];
        shortestColIndex = i;
      }
    }
    columns[shortestColIndex].push(item);
    colHeights[shortestColIndex] += getAspectRatioValue(item.aspectRatio);
  });

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 relative">
          <section className="relative overflow-hidden min-h-screen">
            <div className="relative z-10 container mx-auto px-4 py-16">
              <div className="text-center mb-8">
                <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Craftsmanship</p>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-wider mb-6">
                  Our Creations
                </h1>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
                </div>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-lg">
                  Explore our exquisite collection of handcrafted jewelry designs.
                </p>
              </div>



              {/* Pinterest Masonry Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 items-start">
                {columns.map((column, colIndex) => (
                  <div key={colIndex} className="flex flex-col gap-3 md:gap-4">
                    {column.map((item) => (
                      <CreationCard key={item.id} item={item} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

interface CreationItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  isVideo: boolean;
  aspectRatio: string;
}

const CreationCard = ({ item }: { item: CreationItem }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="relative group overflow-hidden rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 cursor-pointer w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        boxShadow: hovered ? '0 0 30px hsl(11 88% 67% / 0.15)' : 'none',
        aspectRatio: item.aspectRatio
      }}
    >
      {item.isVideo ? (
        <video
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 scale-100 ${hovered ? "!scale-110 !brightness-110" : ""
            }`}
        />
      ) : (
        <OptimizedImage
          src={item.src}
          alt={item.alt}
          containerClassName="absolute inset-0 w-full h-full"
          className={`w-full h-full object-cover transition-all duration-500 scale-100 ${hovered ? "!scale-110 !brightness-110" : ""
            }`}
        />
      )}

      {/* Hover overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent transition-opacity duration-300 pointer-events-none ${hovered ? "opacity-100" : "opacity-0"
        }`}>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-foreground font-medium text-xs tracking-wide"></p>
        </div>
      </div>
    </div>
  );
};

export default OurCreations;

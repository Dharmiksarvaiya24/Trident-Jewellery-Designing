import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

import logo1 from "@/assets/imgs/Logo/0 (1).png";
import logo2 from "@/assets/imgs/Logo/0 (2).png";
import logo3 from "@/assets/imgs/Logo/0 (3).png";
import logo4 from "@/assets/imgs/Logo/0 (4).png";
import logo5 from "@/assets/imgs/Logo/0 (5).png";
import logo6 from "@/assets/imgs/Logo/0 (6).png";
import logo7 from "@/assets/imgs/Logo/0 (7).png";
import logo8 from "@/assets/imgs/Logo/0 (8).png";
import logo9 from "@/assets/imgs/Logo/0 (9).png";
import logo10 from "@/assets/imgs/Logo/0 (10).png";
import logo11 from "@/assets/imgs/Logo/0 (11).png";
import logo12 from "@/assets/imgs/Logo/0 (12).png";
import logo13 from "@/assets/imgs/Logo/0 (13).png";
import logo14 from "@/assets/imgs/Logo/0 (14).png";
import logo15 from "@/assets/imgs/Logo/0 (15).png";
import logo16 from "@/assets/imgs/Logo/0 (16).png";
import logo17 from "@/assets/imgs/Logo/0 (17).png";
import logo18 from "@/assets/imgs/Logo/0 (18).png";
import logo19 from "@/assets/imgs/Logo/0 (19).png";
import logo20 from "@/assets/imgs/Logo/0 (20).png";

const Clients = () => {
  const clients = [
    { name: "Tanishq", logo: logo1 },
    { name: "Drashti Jewellers", logo: logo2 },
    { name: "Malabar Gold", logo: logo3 },
    { name: "VKAS Jewels", logo: logo4 },
    { name: "PC Jeweller", logo: logo5 },
    { name: "Senco Gold", logo: logo6 },
    { name: "Titan", logo: logo7 },
    { name: "CaratLane", logo: logo8 },
    { name: "Tribhovandas Bhimji", logo: logo9 },
    { name: "GRT Jewellers", logo: logo10 },
    { name: "Bhima Jewellers", logo: logo11 },
    { name: "PNG Jewellers", logo: logo12 },
    { name: "Amrapali", logo: logo13 },
    { name: "Swarovski", logo: logo14 },
    { name: "De Beers", logo: logo15 },
    { name: "Cartier", logo: logo16 },
    { name: "NTR & Co", logo: logo17 },
    { name: "Zendro Jewels", logo: logo18 },
    { name: "Star Jewels", logo: logo19 },
    { name: "Rovelle", logo: logo20 },
  ];

  const testimonials = [
    { name: "Rajesh Mehta", role: "Jewelry Store Owner", review: "The CAD designs were extremely precise and manufacturing-ready. Stone setting accuracy and weight balance were perfect. Delivered on time..", rating: 5 },
    { name: "Amit Jain", role: "Independent Designer", review: "Every revision was smooth with clear communication. No issues during casting. A reliable CAD design partner.", rating: 5 },
    { name: "Daniel Brooks", role: "Jewelry Manufacturer", review: "Very professional approach with fast turnaround time. CAD files were fully best for manufacturing.", rating: 5 },
    { name: "Mohammad Ali", role: "Boutique Owner, USA", review: "Export-level CAD quality. Files were ready for direct 3D printing and casting. International standards were followed.", rating: 5 },
    { name: "Sanjay Kothari", role: "Wholesale Distributor", review: "Accuracy was perfect in both traditional and modern designs. Ideal CAD Team for long-term work.", rating: 5 },
    { name: "Laura Mitchell", role: "Custom Jewelry Designer", review: "Very clear communication and technically strong CAD models. Ideal for production-focused projects.", rating: 5 },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 relative overflow-hidden">
          {/* Ambient background glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl animate-[float1_8s_ease-in-out_infinite]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/4 blur-3xl animate-[float2_10s_ease-in-out_infinite]" />
          </div>

          <div className="relative z-10 py-20">
            {/* Page header */}
            <div className="text-center mb-16 px-4">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Trusted Worldwide</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
                Our Clients
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
              </div>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Trusted by leading jewelry brands worldwide
              </p>
            </div>

            {/* Logo Grid */}
            <div className="container mx-auto px-4 mb-20">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-4 md:p-6 flex flex-col items-center justify-center transition-all duration-300 hover:border-primary/40 hover:scale-105"
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 30px hsl(11 88% 67% / 0.12)')}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                  >
                    <img
                      src={client.logo}
                      alt={client.name || `Client Logo ${index + 1}`}
                      className="h-20 md:h-28 w-auto max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials Section - 6 in horizontal row */}
            <div className="container mx-auto px-4 py-20">
              <div className="text-center mb-16">
                <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Testimonials</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-wider mb-4">
                  What Our Clients Say
                </h2>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
                </div>
              </div>

              {/* Horizontal scrolling row on mobile, grid on desktop */}
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-x-visible md:pb-0">
                {testimonials.map((review, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 border border-border transition-all duration-300 hover:border-primary/40 hover:scale-[1.02] relative overflow-hidden group flex-shrink-0 w-72 md:w-auto"
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-primary" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-xs mb-4 italic line-clamp-4">
                      "{review.review}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <h4 className="font-bold text-foreground text-base md:text-lg tracking-wide">{review.name}</h4>
                      <p className="text-primary text-xs md:text-sm mt-1 tracking-wide">{review.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Clients;

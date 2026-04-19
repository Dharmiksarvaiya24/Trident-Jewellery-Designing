import tridentLogo from "@/assets/imgs/trident-logo.png";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import OptimizedImage from "@/components/OptimizedImage";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "SERVICES", path: "/services" },
    { label: "OUR CREATIONS", path: "/our-creations" },
    { label: "OUR CLIENT", path: "/clients" },
    { label: "PRICING", path: "/pricing" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="py-4 px-6 flex justify-between items-center bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm" style={{ boxShadow: '0 1px 30px hsl(11 88% 67% / 0.08)' }}>

      <div className="flex items-center animate-fade-in">
        <Link to="/" className="relative group cursor-pointer">
          <OptimizedImage
            src={tridentLogo}
            alt="TRIDENT Jewellery Designer Logo"
            className="h-24 md:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            containerClassName="w-auto h-24"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block animate-fade-in">
        <ul className="flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="relative transition-all duration-300 group py-2 block"
              >
                <span className={`relative text-sm font-medium tracking-widest transition-all duration-300 ${isActive(item.path)
                  ? "text-primary"
                  : "text-muted-foreground group-hover:text-primary"
                  }`}>
                  {item.label}
                </span>

                <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-primary to-rose-gold transition-all duration-300 ease-out ${isActive(item.path)
                  ? "w-full opacity-100"
                  : "w-0 group-hover:w-full opacity-0 group-hover:opacity-100"
                  }`}></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <button className="text-muted-foreground p-2 hover:text-primary transition-colors">
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-background border-l border-border">
          {/* Subtle glow top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
          <nav className="flex flex-col gap-2 mt-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`transition-all duration-300 px-4 py-3 block rounded-lg border ${isActive(item.path)
                  ? "bg-primary/10 text-primary border-primary/30"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-primary border-transparent"
                  }`}
              >
                <span className="text-sm font-medium tracking-widest">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
export default Header;

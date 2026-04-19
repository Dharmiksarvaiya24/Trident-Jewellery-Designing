import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Phone, MapPin, Mail } from "lucide-react";
import tridentLogo from "@/assets/imgs/trident-logo.png";

const Footer = () => {
  const services = [
    { label: "CAD Designing", path: "/services/cad-designing" },
    { label: "Rendering", path: "/services/rendering" },
    { label: "Hip Hop Work", path: "/services/hiphop-work" },
    { label: "Face Work", path: "/services/face-work" },
    { label: "Manual Designing", path: "/services/manual-designing" },
    { label: "Manufacturing", path: "/services/manufacturing" },
    { label: "File Selling", path: "/services/file-selling" },
    { label: "Custom Jewelry", path: "/services/custom-jewelry" },
  ];
  const usefulLinks = [
    { label: "Terms and Conditions", path: "/terms" },
    { label: "FAQs", path: "/faqs" },
  ];
  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/trident_jewelles?igsh=MTQ5ZG81MmV1aWtoMg==", label: "Instagram", image: null },
    { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61583075837962", label: "Facebook", image: null },
    { icon: Linkedin, url: "https://www.linkedin.com/company/110205384/admin/inbox/", label: "LinkedIn", image: null },
    { icon: Mail, url: "mailto:contact@tridentjewellery.com", label: "Email", image: null },
    { icon: null, url: "https://www.fiverr.com/s/1qBBaZ9", label: "Fiverr", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fiverr.svg" },
    { icon: null, url: "https://www.upwork.com/freelancers/~017f09d8153144d145?mp_source=share", label: "Upwork", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/upwork.svg" },
    { icon: null, url: "https://x.com/tridentjewel25", label: "X", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" },
    { icon: null, url: "https://in.pinterest.com/Trident_jewellers/", label: "Pinterest", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pinterest.svg" },
  ];

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-6 text-center sm:text-left">
            <img
              src={tridentLogo}
              alt="Trident Logo"
              className="h-24 w-auto mx-auto sm:mx-0 hover:scale-105 transition-transform duration-300"
            />

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center transition-all duration-300 hover:bg-primary/15 hover:border-primary/60 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon
                    ? <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                    : <img src={social.image!} alt={social.label} className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain opacity-50 invert" />
                  }
                </a>
              ))}
            </div>

            <div className="space-y-4 text-muted-foreground w-fit mx-auto sm:mx-0">
              <div className="flex items-start gap-3 justify-start">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <div className="text-left">
                  <p className="font-medium text-foreground text-sm">Mobile</p>
                  <p className="text-sm">+91 878-0532068</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-start">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <div className="text-left">
                  <p className="font-medium text-foreground text-sm">Address</p>
                  <p className="text-sm leading-relaxed">F118, ABC apartment, ABC Circle,<br />Sudama chowk, Surat, Gujarat, 394101</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Services */}
          <div className="text-center sm:text-left lg:pl-8">
            <h3 className="text-sm font-semibold text-primary tracking-widest mb-6 uppercase">
              Services
            </h3>
            <div className="w-8 h-px bg-primary/60 mb-5 mx-auto sm:mx-0" />
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.label}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm tracking-wide relative group inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300 ease-out" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Useful Links */}
          <div className="text-center sm:text-left lg:pl-8">
            <h3 className="text-sm font-semibold text-primary tracking-widest mb-6 uppercase">
              Useful Links
            </h3>
            <div className="w-8 h-px bg-primary/60 mb-5 mx-auto sm:mx-0" />
            <ul className="space-y-3">
              {usefulLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm tracking-wide relative group inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300 ease-out" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <p className="text-muted-foreground text-xs tracking-widest uppercase">
            © 2025 Trident Jewellery Design and Rendering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

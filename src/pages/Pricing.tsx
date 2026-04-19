import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Pricing = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim() || !email.trim()) {
      toast({ title: "Error", description: "Please fill in all fields", variant: "destructive" });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({ title: "Error", description: "Please enter a valid email address", variant: "destructive" });
      return;
    }
    if (mobile.length < 10) {
      toast({ title: "Error", description: "Please enter a valid mobile number", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    const message = `Hello! I'm interested in your jewelry CAD design services.%0A%0A*Name:* ${encodeURIComponent(name.trim())}%0A*Mobile:* ${encodeURIComponent(mobile.trim())}%0A*Email:* ${encodeURIComponent(email.trim())}%0A%0APlease share the pricing details.`;
    const whatsappUrl = `https://wa.me/918780532068?text=${message}`;
    window.open(whatsappUrl, "_blank");
    toast({ title: "Success!", description: "Redirecting to WhatsApp..." });
    setName("");
    setMobile("");
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-20 px-4">
            <div className="text-center mb-12">
              <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Get a Quote</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
                Pricing
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
              </div>
              <p className="text-muted-foreground max-w-2xl">
                For pricing details, drop your information below and we will connect with you soon!
              </p>
            </div>

            <div className="w-full max-w-md bg-card rounded-2xl p-8 border border-border relative overflow-hidden"
              style={{ boxShadow: '0 0 60px hsl(11 88% 67% / 0.08)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium tracking-wide text-sm">Name</Label>
                  <Input id="name" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} className="bg-muted border-border focus:border-primary focus:ring-1 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground" maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-foreground font-medium tracking-wide text-sm">Mobile No</Label>
                  <Input id="mobile" type="tel" placeholder="Enter your mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} className="bg-muted border-border focus:border-primary focus:ring-1 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground" maxLength={15} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium tracking-wide text-sm">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-muted border-border focus:border-primary focus:ring-1 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground" maxLength={255} />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-secondary text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] tracking-wide">
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Details"}
                </Button>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Pricing;

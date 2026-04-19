import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "Types of Jewellery Designs We Provide",
      answer: "We offer a wide range of jewellery designs including rings, earrings, pendants, bracelets, bangles, necklaces, HipHop designs, facework pieces, lightweight jewellery, and fully custom concepts."
    },
    {
      question: "Custom Design Process Explained",
      answer: (
        <div className="space-y-1">
          You send us a reference image or sketch &rarr;<br />
          we create the CAD design &rarr;<br />
          you approve the preview &rarr;<br />
          final STL/3DM files are delivered.
        </div>
      )
    },
    {
      question: "Delivery Time for Designs",
      answer: "Most designs are delivered within 24 hours. Complex or heavy designs may take a little additional time."
    },
    {
      question: "What You Get in Ready Files Package",
      answer: (
        <div className="space-y-2 mt-1">
          <p>Our ready file bundle includes:</p>
          <ul className="list-disc list-inside ml-2">
            <li>3DM file</li>
            <li>STL file</li>
            <li>Render images</li>
            <li>Videos</li>
            <li>Multiple angle views</li>
          </ul>
        </div>
      )
    },
    {
      question: "Payment Method Accepted",
      answer: "Advance payment is required for both custom designs and ready files. We accept UPI, bank transfers, and other digital payment modes."
    },
    {
      question: "Confidentiality of Your Designs",
      answer: "Your references and designs remain 100% safe and private with us. We never share your concepts with anyone."
    },
    {
      question: "Availability of Exclusive Designs",
      answer: "Yes, we provide exclusive jewellery designs upon request. These designs are created only for you and will never be sold to anyone else."
    },
    {
      question: "Our Biggest Specialty Compared to Others",
      answer: "Fast delivery (most designs within 24 hours), clean flow designs, manufacturing-friendly output, precision detailing, and 24/7 support — these qualities make Trident truly unique."
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 relative">
          <section className="relative overflow-hidden min-h-screen">
            {/* Ambient glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/4 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 py-16">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Help Center</p>
                  <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-wider mb-6">
                    Frequently Asked Questions
                  </h1>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
                  </div>
                  <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Find answers to common questions about our jewelry design services.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 md:p-8 border border-border relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border border-border rounded-lg px-4 data-[state=open]:bg-primary/5 data-[state=open]:border-primary/30 transition-colors"
                      >
                        <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                          <span className="font-semibold tracking-wide">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div className="mt-12 text-center">
                  <div className="bg-card rounded-xl p-8 border border-border relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    <h2 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h2>
                    <p className="text-muted-foreground mb-6">
                      Can't find the answer you're looking for? Feel free to reach out to us directly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="mailto:contact@tridentjewellery.com" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-secondary transition-all duration-300 hover:scale-[1.02] tracking-wide">
                        Email Us
                      </a>
                      <a href="tel:+918780532068" className="inline-flex items-center justify-center px-6 py-3 border border-primary/50 text-foreground rounded-lg font-medium hover:bg-primary/10 hover:border-primary transition-all duration-300 tracking-wide">
                        Call Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default FAQs;

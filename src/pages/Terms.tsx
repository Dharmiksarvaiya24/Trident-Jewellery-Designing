import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Terms = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 relative">
          <section className="relative overflow-hidden min-h-screen">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/4 blur-3xl rounded-full pointer-events-none" />
            <div className="relative z-10 container mx-auto px-4 py-16">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Legal</p>
                  <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-wider mb-6">
                    Terms and Conditions
                  </h1>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
                  </div>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border space-y-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      Welcome to Trident.<br />
                      By using our website, designs, services, CAD files, STL files, renders, or ready files, you agree to these Terms & Conditions.<br />
                      Our goal is to keep every project clear, smooth, and transparent for all clients. ✨
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl flex items-center gap-2 font-bold text-primary mb-3">✔ Communication & Response Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Trident maintains clear communication with every client.<br />
                      All updates, approvals, and changes will be shared through direct message or email.<br />
                      Any delay caused due to late client response will not be considered our responsibility.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl flex items-center gap-2 font-bold text-primary mb-3">✔ Payments & Orders</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All projects begin only after advance payment is received.<br />
                      Custom design pricing depends on the design complexity.<br />
                      Ready files are digital items, therefore non-refundable.<br />
                      Urgent work or special requests may include additional charges.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl flex items-center gap-2 font-bold text-primary mb-3">✔ Delivery & Timelines</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We maintain a fast workflow and deliver designs as early as possible.<br />
                      However, timelines may vary depending on project size, client feedback, or technical issues.<br />
                      If delays occur due to incomplete information or pending approval from the client, Trident will not be held responsible.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl flex items-center gap-2 font-bold text-primary mb-3">✔ Revisions & Modifications</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Limited free revisions are provided for minor adjustments.<br />
                      Major changes, redesigns, or style modifications will be treated as new tasks and will be chargeable.<br />
                      Revision timelines depend on the type of project.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl flex items-center gap-2 font-bold text-primary mb-3">✔ Ready File Purchases</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All ready files are properly checked before delivery —<br />
                      3DM files, STL files, renders, and videos are provided in correct formats.<br />
                      Since these are digital files, refunds are not applicable.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl flex items-center gap-2 font-bold text-primary mb-3">✔ No Third-Party Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If any third-party vendor (caster, printer, stone setter) makes an error during production,<br />
                      Trident will not be responsible.<br />
                      We guarantee design accuracy, but manufacturing output depends on the vendor's process.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl flex items-center gap-2 font-bold text-primary mb-3">✔ Offers & Discounts Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Any discounts or offers provided by Trident are limited-time and may be changed, updated, or cancelled at any time without prior notice.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground text-sm">Last updated: February 2026</p>
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

export default Terms;

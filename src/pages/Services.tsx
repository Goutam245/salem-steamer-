import { Link } from "react-router-dom";
import { Droplets, Layers, Sofa, Wind, Sparkles, Package, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import GoogleReviews from "@/components/GoogleReviews";
// TODO: Replace with real client photos when provided
import heroImage from "@/assets/hero-services.jpg";

const categories = [
  {
    icon: Droplets,
    title: "Restoration & Environmental Services",
    services: [
      { name: "Water Damage Restoration & Structural Drying", desc: "Complete water extraction, structural drying, and moisture verification.", duration: "24–72 Hours" },
      { name: "Mold Remediation & Removal", desc: "Safe containment and removal of mold contamination with HEPA filtration.", duration: "2–5 Days" },
      { name: "Mold Inspection & Testing", desc: "Air and surface sampling with third-party lab certification.", duration: "2–4 Hours" },
      { name: "Indoor Air Quality Assessment", desc: "Comprehensive testing to ensure healthy indoor environments.", duration: "2–3 Hours" },
    ],
  },
  {
    icon: Layers,
    title: "Flooring & Surface Preservation",
    services: [
      { name: "Carpet Restoration (Wall-to-Wall)", desc: "Deep restorative care using temperature-controlled extraction.", duration: "2–4 Hours" },
      { name: "Area Rug Care & Restoration", desc: "Specialized treatment for Oriental, wool, and specialty rugs.", duration: "3–5 Days" },
      { name: "Tile & Grout Restoration", desc: "Professional restoration returning surfaces to original condition.", duration: "3–6 Hours" },
      { name: "Natural Stone Care (Marble, Travertine, etc.)", desc: "Gentle, pH-balanced care for delicate stone surfaces.", duration: "3–6 Hours" },
      { name: "Hardwood Floor Surface Care", desc: "Surface restoration and protection for hardwood flooring.", duration: "2–4 Hours" },
    ],
  },
  {
    icon: Sofa,
    title: "Furniture & Interior Asset Care",
    services: [
      { name: "Upholstery & Fabric Restoration", desc: "Fiber-specific treatment for sofas, chairs, and fine fabrics.", duration: "2–4 Hours" },
      { name: "Mattress Sanitization & Allergen Reduction", desc: "Deep sanitization to remove allergens and contaminants.", duration: "1–2 Hours" },
      { name: "Leather Care & Conditioning", desc: "Professional conditioning and restoration for leather surfaces.", duration: "1–3 Hours" },
    ],
  },
  {
    icon: Wind,
    title: "Air System & Environmental Hygiene",
    services: [
      { name: "Air Duct & Vent System Restoration", desc: "Thorough duct remediation to improve indoor air quality.", duration: "3–5 Hours" },
      { name: "Dryer Vent Restoration (Fire Prevention)", desc: "Lint removal and fire prevention maintenance.", duration: "1–2 Hours" },
    ],
  },
  {
    icon: Sparkles,
    title: "Specialty & Protective Services",
    services: [
      { name: "Odor Removal & Neutralization", desc: "Permanent removal of smoke, pet, and microbial odors.", duration: "2–6 Hours" },
      { name: "Stain Treatment & Fiber Protection", desc: "Targeted stain removal and preventive fiber protection.", duration: "1–3 Hours" },
      { name: "Fabric & Surface Protection", desc: "Protective coating application for long-term preservation.", duration: "1–2 Hours" },
      { name: "Post-Construction Restoration & Fine Detail Reset", desc: "Complete restoration after construction or renovation.", duration: "4–8 Hours" },
    ],
  },
  {
    icon: Package,
    title: "Move-In / Move-Out Property Reset",
    services: [
      { name: "Move-In / Move-Out Property Reset Services", desc: "Complete property restoration for transitions and turnovers.", duration: "4–8 Hours" },
    ],
  },
];

const Services = () => (
  <main>
    <PageHero
      image={heroImage}
      label="Our Services"
      title="Our Services"
      subtitle="Every service is governed by The Salem Standard — outcome-verified, behavior-disciplined, and reputation-protected. We serve all property types and all budgets across the Washington DC Metro Area."
    />

    {/* Service Categories */}
    {categories.map((cat, catIdx) => (
      <section
        key={cat.title}
        className={`section-padding ${catIdx % 2 === 0 ? "bg-background" : "bg-secondary"}`}
      >
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <cat.icon size={32} className="text-primary" strokeWidth={1.5} />
              <h2 className="font-display text-3xl md:text-4xl text-foreground">{cat.title}</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cat.services.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.05}>
                <div className="card-surface p-6 h-full card-hover group border border-transparent hover:border-primary transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-lg text-foreground">{s.name}</h3>
                    <span className="label-text text-primary/70 text-[10px] shrink-0 ml-3 mt-1 border border-primary/20 px-2 py-0.5 rounded">{s.duration}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <Link to="/contact" className="text-primary label-text hover:underline inline-flex items-center gap-1">
                    Book Now <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    ))}

    {/* Google Reviews */}
    <GoogleReviews />

    {/* CTA */}
    <section className="bg-primary py-16 px-6 text-center">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Ready to Restore Your Property?</h2>
        <p className="text-white/80 mb-10 max-w-xl mx-auto">Book your service today. Emergency response available 24/7.</p>
        <Link to="/contact" className="bg-white text-primary px-8 py-3.5 label-text inline-block rounded-lg hover:bg-white/90 transition-colors">
          Book Now
        </Link>
      </ScrollReveal>
    </section>
  </main>
);

export default Services;

import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const cities = [
  "Washington DC", "McLean", "Great Falls", "Potomac",
  "Arlington", "Bethesda", "Tysons", "Vienna",
  "Falls Church", "Reston", "Herndon", "Alexandria",
  "Fairfax", "Rockville", "Chevy Chase",
];

const ServiceAreas = () => (
  <section className="py-20 px-6 md:px-12" style={{ backgroundColor: "#1C1C1C" }}>
    <div className="max-w-5xl mx-auto text-center">
      <ScrollReveal>
        <p className="label-text text-primary mb-4">Coverage</p>
        <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Areas We Serve</h2>
        <p className="text-white/50 mb-12 max-w-xl mx-auto">
          Serving Washington DC and surrounding areas
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {cities.map((city) => (
            <Link
              key={city}
              to="/contact"
              className="border border-primary/40 text-primary px-4 py-3 label-text text-xs rounded hover:bg-primary hover:text-white transition-colors"
            >
              {city}
            </Link>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <p className="text-white/40 text-sm mt-8">
          Washington DC · McLean · Great Falls · Potomac · Arlington · Bethesda and more
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default ServiceAreas;

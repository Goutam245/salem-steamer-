import { Link } from "react-router-dom";
import { ClipboardCheck, Cog, BarChart3, UserCheck, ShieldCheck, Camera, FileText, Award, Leaf, PawPrint } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
// TODO: Replace with real client photos when provided
import heroImage from "@/assets/hero-services.jpg";

const steps = [
  {
    num: "01",
    icon: ClipboardCheck,
    title: "Assessment & Documentation",
    desc: "Every job begins with a thorough inspection. We measure, document, and record all affected areas before any work begins.",
  },
  {
    num: "02",
    icon: Cog,
    title: "Controlled Execution",
    desc: "Our technicians follow strict, service-specific protocols aligned with IICRC standards on every job — no shortcuts, no improvisation.",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Outcome Verification",
    desc: "Every job is measured against defined quality benchmarks. Work is not considered complete until outcomes are verified.",
  },
  {
    num: "04",
    icon: UserCheck,
    title: "Client Confirmation",
    desc: "The final step belongs to you. We do not close a job until you confirm the outcome meets The Salem Standard.",
  },
];

const techStandards = [
  { icon: Award, text: "Uniformed and background-checked technicians" },
  { icon: Camera, text: "Prohibited from taking photos without client permission" },
  { icon: FileText, text: "Required to document all service steps" },
  { icon: ShieldCheck, text: "Held to The Salem Standard on every visit" },
  { icon: Leaf, text: "Biodegradable materials used on every job" },
  { icon: PawPrint, text: "Safe for residents, pets, and indoor environments" },
];

const envItems = [
  { emoji: "🌿", title: "All materials are biodegradable" },
  { emoji: "👶", title: "Safe for children, pets, and sensitive indoor environments" },
  { emoji: "🏠", title: "Health-conscious and property-protective approach" },
];

const Method = () => (
  <main>
    <PageHero
      image={heroImage}
      label="Our Method"
      title="The Salem Standard"
      subtitle="Outcome-verified. Behavior-disciplined. Reputation-protected."
    />

    {/* 4-Step Methodology */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="label-text text-primary mb-4 text-center">Our Process</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">Four Steps. One Standard.</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 0.1}>
              <div className="card-surface gold-border-top p-8 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-display text-5xl text-primary/30 font-light">{s.num}</span>
                  <s.icon size={28} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Behavior Standards */}
    <section className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="label-text text-primary mb-4">Our Technicians</p>
          <h2 className="font-display text-4xl text-foreground mb-12">Behavior Standards</h2>
        </ScrollReveal>
        <div className="space-y-6">
          {techStandards.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex items-center gap-5 p-6 bg-background rounded-lg border border-border">
                <item.icon size={24} className="text-primary shrink-0" strokeWidth={1.5} />
                <p className="text-foreground text-lg">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Environmental Commitment */}
    <section className="section-padding bg-accent">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="label-text text-primary mb-4">Environmental Commitment</p>
          <h2 className="font-display text-4xl text-foreground mb-12">Responsible by Standard</h2>
        </ScrollReveal>
        <div className="space-y-6">
          {envItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex items-center gap-5 p-6 bg-background rounded-lg border border-border">
                <span className="text-2xl shrink-0">{item.emoji}</span>
                <p className="text-foreground text-lg">{item.title}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Full Width Quote */}
    <section className="bg-primary py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-display text-3xl md:text-5xl text-white italic leading-relaxed">
            "A Salem Steamer job is not complete until the measurable outcome is verified."
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-background text-center">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">Experience The Salem Standard</h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">See the difference that verified outcomes and disciplined execution make.</p>
        <Link to="/contact" className="btn-primary">
          Book Now
        </Link>
      </ScrollReveal>
    </section>
  </main>
);

export default Method;

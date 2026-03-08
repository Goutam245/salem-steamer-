import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
// TODO: Replace with real client photos when provided
import heroImage from "@/assets/hero-about.jpg";

const timeline = [
  { year: "2003", text: "Salem Steamer founded in the Washington, DC metropolitan area" },
  { year: "2008", text: "IICRC certification achieved, formalizing standards-based operations" },
  { year: "2013", text: "100+ verified five-star reviews milestone" },
  { year: "2018", text: "Expansion of restoration services to include mold remediation and air quality testing" },
  { year: "2023", text: "20-year anniversary — 300+ verified reviews" },
];

const definesUs = [
  "Systemized operational procedures",
  "Precision-driven restorative methods",
  "Client communication rooted in transparency",
  "Performance measured, not assumed",
  "Long-term surface and material preservation",
];

const About = () => (
  <main>
    <PageHero
      image={heroImage}
      label="About Us"
      title="Built on Standards. Strengthened by Time."
    />

    {/* Opening Statement */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="label-text text-primary mb-6">Our Story</p>
          <p className="text-foreground text-lg leading-[1.8] mb-6">
            Founded in 2003, Salem Steamer was established with a singular objective: to deliver restorative and environmental services governed by discipline, measurable standards, and long-term performance. We serve all property types and all budgets across the Washington DC Metro Area.
          </p>
          <p className="text-muted-foreground leading-[1.8]">
            Over two decades later, that commitment remains unchanged. With more than 300 verified five-star reviews and a consistent record of client satisfaction, our reputation has been earned through execution — not advertising.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Philosophy Quotes */}
    <section className="bg-primary py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-display text-2xl md:text-3xl text-white italic leading-relaxed">
          "A Salem Steamer job is not complete until the measurable outcome is verified."
        </p>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="label-text text-primary mb-4 text-center">Milestones</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">Two Decades of Proven Performance</h2>
        </ScrollReveal>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {timeline.map((item, i) => (
            <ScrollReveal key={item.year} delay={i * 0.1}>
              <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2" />
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <span className="font-display text-3xl text-primary">{item.year}</span>
                  <p className="text-muted-foreground mt-2">{item.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Our Foundation */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="label-text text-primary mb-4">Our Foundation</p>
          <h2 className="font-display text-4xl text-foreground mb-8">Protocol, Not Improvisation</h2>
          <p className="text-muted-foreground leading-[1.8]">
            Salem Steamer operates under certified IICRC standards and maintains full licensing and insurance compliance. Every service is performed using structured procedures refined over years of field application, ensuring consistency, material safety, and documented outcomes. We do not approach projects casually. We approach them methodically.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* What Defines Us */}
    <section className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="label-text text-primary mb-4">Our Principles</p>
          <h2 className="font-display text-4xl text-foreground mb-12">What Defines Us</h2>
        </ScrollReveal>
        <div className="space-y-8">
          {definesUs.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex items-start gap-6">
                <span className="font-display text-4xl text-primary/50 font-light leading-none">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-foreground text-lg pt-1">{item}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.4}>
          <p className="text-muted-foreground italic mt-10">Our work is guided by protocol — not improvisation.</p>
        </ScrollReveal>
      </div>
    </section>

    {/* The Salem Standard */}
    <section className="bg-primary py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-display text-2xl md:text-4xl text-white italic leading-relaxed">
            "The Salem Standard is outcome-verified, behavior-disciplined, and reputation-protected."
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Partner in Resolution */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="label-text text-primary mb-4">Your Advocate</p>
          <h2 className="font-display text-4xl text-foreground mb-8">Your Partner in Resolution</h2>
          <p className="text-muted-foreground leading-[1.8] mb-6">
            We believe in advocating for our clients. To ensure a stress-free experience, we provide a public adjuster at our cost to handle insurance negotiations for you. Furthermore, for your health and safety, we hire an independent industrial hygienist to test your air quality and provide a certified report that your space is safe for occupancy.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Vision */}
    <section className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="label-text text-primary mb-8">The Vision</p>
          <p className="text-muted-foreground leading-[1.8] mb-12 max-w-2xl mx-auto">
            Salem Steamer was built as a system — not a single-location business. Our operational architecture is designed to scale across new cities, states, and eventually international markets, while maintaining The Salem Standard without dilution.
          </p>
          <div className="gold-divider mx-auto mb-10" />
          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground italic leading-tight">
            "Restoration is not a task. It is a standard."
          </blockquote>
        </ScrollReveal>
      </div>
    </section>

    {/* Closing */}
    <section className="section-padding bg-accent">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-foreground text-lg leading-[1.8] italic">
            "We understand circumstances vary, and when needed, we offer accommodations with respect and discretion — without compromising the standard."
          </p>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default About;

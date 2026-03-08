import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star, Shield, Leaf, CheckCircle, Droplets, Layers, Sofa, Wind, Sparkles, ArrowRight, Package } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import GoogleReviews from "@/components/GoogleReviews";
import ServiceAreas from "@/components/ServiceAreas";
// TODO: Replace with real client photos when provided
import heroImage from "@/assets/hero-home.jpg";
import { useRef } from "react";

const stats = [
  { value: 300, suffix: "+", label: "Verified Five-Star Reviews" },
  { value: 20, suffix: "+", label: "Years of Proven Performance" },
  { value: 60, suffix: "–90", label: "Minute Emergency Response" },
  { value: 100, suffix: "%", label: "Outcome Verified on Every Job" },
];

const promiseItems = [
  { icon: CheckCircle, title: "Outcome Verified", desc: "Every job confirmed with measurable results" },
  { icon: Leaf, title: "Biodegradable Materials", desc: "Safe for residents, pets & indoor environments" },
  { icon: Shield, title: "Standards-Driven", desc: "Every technician follows The Salem Standard" },
];

const credentials = [
  "IICRC Certified Firm",
  "Fully Licensed & Insured",
  "300+ Reviews — Google · Yelp · Angie's List",
  "Est. 2003",
  "Biodegradable & Pet Safe",
];

const serviceCategories = [
  { icon: Droplets, title: "Restoration & Environmental Services", desc: "Water damage restoration, mold remediation, indoor air quality assessment.", link: "/services" },
  { icon: Layers, title: "Flooring & Surface Preservation", desc: "Carpet, tile, grout, natural stone, and hardwood surface care.", link: "/services" },
  { icon: Sofa, title: "Furniture & Interior Asset Care", desc: "Upholstery, mattress sanitization, and leather conditioning.", link: "/services" },
  { icon: Wind, title: "Air System & Environmental Hygiene", desc: "Air duct, vent system, and dryer vent maintenance.", link: "/services" },
  { icon: Sparkles, title: "Specialty & Protective Services", desc: "Odor removal, stain treatment, fabric protection, post-construction reset.", link: "/services" },
  { icon: Package, title: "Move-In / Move-Out Property Reset", desc: "Complete property restoration for transitions and turnovers.", link: "/services" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})`, y: heroY }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(28,28,28,0.80) 0%, rgba(28,28,28,0.60) 50%, rgba(28,28,28,0.75) 100%)" }} />
        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-10 h-px" style={{ backgroundColor: "#E8611A" }} />
            <span className="font-body font-medium uppercase text-white/80" style={{ fontSize: "13px", letterSpacing: "0.25em" }}>
              Serving Washington DC and Surrounding Areas
            </span>
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-white leading-[1.1] text-balance"
            style={{ fontSize: "clamp(42px, 6vw, 76px)", textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}
          >
            Restoration. Preservation. Protection.{" "}
            <span className="italic font-light">Done Right.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 font-body max-w-[640px] mx-auto text-white/70"
            style={{ fontSize: "17px", lineHeight: 1.8, textShadow: "0 1px 20px rgba(0,0,0,0.6)" }}
          >
            We serve all property types and all budgets across the Washington DC Metro Area. Whether you own a single-family residence, condominium, or commercial property, we treat your space with the utmost regard.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn-primary">Book Now</Link>
            <Link to="/method" className="btn-outline !text-white !border-white/50 hover:!bg-white hover:!text-foreground">Our Method</Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={24} className="text-white/50 animate-bounce" />
        </motion.div>
      </section>

      {/* Credentials Badges */}
      <section className="bg-accent border-y border-border py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {credentials.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 text-foreground font-body text-sm">
              <span className="text-primary">✦</span> {c}
            </span>
          ))}
        </div>
      </section>

      {/* Our Promise Strip */}
      <section className="bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {promiseItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="text-center">
                <item.icon size={28} className="text-primary mx-auto mb-3" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Trusted by Homeowners */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="label-text text-primary mb-4">Our Promise</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Professional. Reliable. Verified.</h2>
            <p className="text-muted-foreground text-lg mb-8">We serve all property types and all budgets across the Washington DC Metro Area.</p>
            <div className="gold-divider mx-auto mb-10" />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-[1.8] text-base md:text-lg mb-6">
              Salem Steamer serves the Washington DC metropolitan area — built on one principle: every property and every client deserves the highest standard of care. Using the latest restoration technology, we restore 100% of your environment, leaving zero visible traces we were ever there.
            </p>
            <p className="text-muted-foreground leading-[1.8] text-base md:text-lg mb-6">
              We understand the trauma you are going through and will treat you and your family with the respect and concern you deserve. To make this difficult time easier, we provide two key advocates at no cost to you: a Public Adjuster to handle your insurance claim and a Third-Party Certified Lab to certify your environment is truly safe.
            </p>
            <p className="text-muted-foreground leading-[1.8] text-base md:text-lg">
              When you choose Salem Steamer, our results are so seamless and complete that the only thing we leave behind is your peace of mind.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-primary font-display text-xl mt-8 italic">
              "A Salem Steamer job is not complete until the measurable outcome is verified."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="label-text text-primary mb-4 text-center">By The Numbers</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">Performance, Not Promises.</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <span className="font-display text-5xl md:text-7xl text-primary font-light block mb-3">
                    <CountUp target={s.value} suffix={s.suffix} />
                  </span>
                  <p className="text-muted-foreground text-sm font-body leading-snug">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="label-text text-primary mb-4 text-center">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">Our Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08}>
                <div className="card-surface gold-border-top p-8 h-full card-hover group">
                  <s.icon size={32} className="text-primary mb-5" strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                  <Link to={s.link} className="text-primary label-text hover:underline inline-flex items-center gap-1">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental & Safety */}
      <section className="section-padding bg-accent">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="label-text text-primary mb-4">Environmental Commitment</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">Safe for Your Family. Safe for the Planet.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
              All materials used are biodegradable and safe for residents, pets, and indoor environments. We are committed to responsible, health-conscious property care.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { emoji: "🌿", label: "Biodegradable" },
              { emoji: "🐾", label: "Pet Safe" },
              { emoji: "🏠", label: "Indoor Safe" },
              { emoji: "✅", label: "Outcome Verified" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="text-center">
                  <span className="text-4xl block mb-3">{item.emoji}</span>
                  <p className="text-foreground font-body font-medium text-sm">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Service Areas */}
      <ServiceAreas />

      {/* Salem Standard Quote */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-display text-2xl md:text-4xl text-white italic leading-relaxed">
              "The Salem Standard is outcome-verified, behavior-disciplined, and reputation-protected."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center bg-secondary">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Ready to Restore Your Property?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">Book your service today. Emergency response available 24/7.</p>
          <Link to="/contact" className="btn-primary">
            Book Now
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Index;

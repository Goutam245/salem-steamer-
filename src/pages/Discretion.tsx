import { Link } from "react-router-dom";
import { Lock, EyeOff, FileKey, Shield, Vault, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
// TODO: Replace with real client photos when provided
import heroImage from "@/assets/hero-discretion.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: FileKey,
    title: "No Paper Trail, No Gossip",
    desc: "No online or paper receipts left where others might see them. All documentation delivered under the same privacy protocols as attorney-client privilege.",
  },
  {
    icon: EyeOff,
    title: 'No "Neighborhood Watch"',
    desc: "Phantom Fleet® — magnetic logos removed before arrival, replaced after departure. Stealth Uniforms® with 5mm logos. Teams prohibited from taking photos on job site.",
  },
  {
    icon: Lock,
    title: "For Your Eyes Only",
    desc: "Third-party reports sealed in tamper-proof cases. Encrypted, password-protected reports with self-destructing links.",
  },
  {
    icon: Shield,
    title: "Your Home's History Remains Yours Alone",
    desc: "Our discretion premium secures your legacy for future generations.",
  },
  {
    icon: Vault,
    title: "What Happens in Your Home Stays in Our Vault",
    desc: "NDAs for specialist third-party teams. Code names for high-profile clients.",
  },
  {
    icon: Heart,
    title: "Restore Your Inner Peace",
    desc: "We restore 100% of your environment, leaving zero visible traces we were there. The only thing we leave behind is your peace of mind.",
  },
];

const Discretion = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})`, y: heroY }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(28,28,28,0.85) 0%, rgba(28,28,28,0.70) 100%)" }} />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="label-text text-primary mb-6"
          >
            Discretion Premium
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1]"
          >
            Remediation & Restoration So Discreet, It's Like We're Invisible.
          </motion.h1>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed mb-8">
              "Salem Steamer can operate with the discretion of a private trust. No branded vehicles, no intrusive signage. Our teams wear neutral attire, and our certified results are delivered so seamlessly, even your household staff won't detect we intervened."
            </blockquote>
            <p className="label-text text-primary">— Ahmed Salem, Founder and President</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Callout */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="border-2 border-primary p-10 text-center rounded-lg">
              <p className="label-text text-primary text-base tracking-[0.3em] mb-4">Ask About Our Discretion Premium</p>
              <p className="text-muted-foreground">We value your privacy as much as we value your property.</p>
              <Link to="/contact" className="mt-8 btn-primary inline-block">
                Request Service
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <div className={`flex flex-col md:flex-row gap-8 items-start py-12 ${i < features.length - 1 ? "border-b border-border" : ""}`}>
                <div className={`md:w-1/2 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <f.icon size={32} className="text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl text-foreground mb-4">{f.title}</h3>
                </div>
                <div className={`md:w-1/2 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <p className="text-muted-foreground leading-[1.8]">{f.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="bg-primary py-16 px-6 text-center">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <p className="font-body font-medium uppercase text-white tracking-[0.3em] text-base md:text-lg leading-relaxed">
              At Salem Steamer, We Do More Than Protect Your Property.
            </p>
            <p className="font-body font-medium uppercase text-white tracking-[0.3em] text-lg md:text-xl mt-4">
              We Protect Your Legacy.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Discretion;

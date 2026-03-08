import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ServiceAreas from "@/components/ServiceAreas";
import heroImage from "@/assets/hero-contact.jpg";
import { motion, AnimatePresence } from "framer-motion";

const allServices = [
  "Water Damage Restoration & Structural Drying",
  "Mold Remediation & Removal",
  "Mold Inspection & Testing",
  "Indoor Air Quality Assessment",
  "Carpet Restoration (Wall-to-Wall)",
  "Area Rug Care & Restoration",
  "Tile & Grout Restoration",
  "Natural Stone Care",
  "Hardwood Floor Surface Care",
  "Upholstery & Fabric Restoration",
  "Mattress Sanitization & Allergen Reduction",
  "Leather Care & Conditioning",
  "Air Duct & Vent System Cleaning",
  "Dryer Vent Cleaning",
  "Odor Removal & Neutralization",
  "Stain Treatment & Fiber Protection",
  "Fabric & Surface Protection",
  "Post-Construction Cleanup",
  "Move-In / Move-Out Property Reset",
  "Other / Not Sure",
];

const hearAboutOptions = [
  "Google Search",
  "Referral / Word of Mouth",
  "Yelp / Review Site",
  "Social Media",
  "Previous Client",
  "Other",
];

const faqs = [
  { q: "How fast can you get to my property?", a: "For water emergencies, we aim to be on-site within 60–90 minutes of your call." },
  { q: "Do you serve condos and townhomes, or only single-family homes?", a: "We serve all property types — from single-family homes to condos and commercial buildings." },
  { q: "Do you handle insurance claims directly?", a: "Yes. We provide a public adjuster — at our cost — who will negotiate with your insurance company on your behalf." },
  { q: "What is a Third-Party Certified Lab Report?", a: "An independent, certified laboratory analyzes post-remediation samples and provides a scientific report validating that your indoor air quality meets health standards." },
  { q: "Are your materials safe for pets and children?", a: "Yes. All materials we use are biodegradable and safe for residents, pets, and indoor environments." },
];

const inputClass = "w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors rounded-lg";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <main>
      <PageHero
        image={heroImage}
        label="Book a Service"
        title="Book Your Service"
        subtitle="Professional. Reliable. Verified. We serve all property types and all budgets across the Washington DC Metro Area."
      />

      {/* Contact Info */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: MapPin, label: "Service Area", text: "Washington DC · McLean · Great Falls · Potomac · Arlington · Bethesda and more" },
            { icon: Phone, label: "Emergency Line", text: "(571) 344-3837 — Available 24/7" },
            { icon: Mail, label: "Email", text: "hello@salemsteamer.com" },
            { icon: Clock, label: "Office Hours", text: "Mon–Fri 8:00 AM–6:00 PM\nEmergency: 24/7/365" },
          ].map((item) => (
            <ScrollReveal key={item.label}>
              <div className="text-center">
                <item.icon size={24} className="text-primary mx-auto mb-4" strokeWidth={1.5} />
                <p className="label-text text-primary mb-2">{item.label}</p>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="label-text text-primary mb-4">Book a Service</p>
            <h2 className="font-display text-4xl text-foreground mb-4">Schedule Your Appointment</h2>
            <p className="text-muted-foreground mb-10">
              Fill out the form below and a member of our team will confirm your booking within one business hour.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input placeholder="First Name" className={inputClass} />
                <input placeholder="Last Name" className={inputClass} />
              </div>
              <input placeholder="Phone Number" type="tel" className={inputClass} />
              <input placeholder="Property Address" className={inputClass} />

              <select className={`${inputClass} appearance-none`}>
                <option value="">Select Service</option>
                {allServices.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>

              <textarea placeholder="Job Description / Details" rows={5} className={`${inputClass} resize-none min-h-[120px]`} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label-text text-foreground mb-2 block">Preferred Date</label>
                  <input type="date" className={inputClass} />
                </div>
                <div>
                  <label className="label-text text-foreground mb-3 block">Preferred Time</label>
                  <div className="flex gap-3">
                    {["8:00 AM", "12:00 PM", "4:00 PM"].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`flex-1 py-3 rounded-lg border text-sm font-body font-medium transition-colors ${
                          selectedTime === time
                            ? "bg-primary text-white border-primary"
                            : "bg-background border-border text-foreground hover:border-primary"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <select className={`${inputClass} appearance-none`}>
                <option value="">How Did You Hear About Us?</option>
                {hearAboutOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>

              <button
                type="submit"
                className="w-full text-white font-body font-medium uppercase py-4 text-center rounded-lg transition-colors"
                style={{ backgroundColor: "#E8611A", letterSpacing: "0.08em", fontSize: "14px" }}
              >
                Book Now
              </button>
            </form>
            <p className="text-muted-foreground text-sm mt-6 text-center">
              A member of our team will respond within one business hour. For emergencies, call{" "}
              <a href="tel:5713443837" className="text-primary font-medium">(571) 344-3837</a> — available 24/7.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="label-text text-primary mb-4 text-center">FAQ</p>
            <h2 className="font-display text-4xl text-foreground text-center mb-12">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="border border-border bg-secondary rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors rounded-lg"
                  >
                    <span className="text-foreground font-display text-lg pr-4">{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-primary shrink-0 transition-transform duration-500 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreas />

      {/* Service Area Map */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="label-text text-primary mb-4 text-center">Map</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-10">Serving Washington DC and Surrounding Areas</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="w-full h-[450px] border border-border overflow-hidden rounded-lg">
              <iframe
                title="Salem Steamer Service Area — Washington DC Metro"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.22891414482!2d-77.23746813!3d38.9338676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64ab55cbe37c5%3A0xf7e1e30daff6ee64!2sMcLean%2C%20VA%2022102!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;

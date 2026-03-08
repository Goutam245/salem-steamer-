import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

// TODO: Replace with real client photos when provided
const reviews = [
  {
    text: "Salem Steamer handled our water damage restoration with absolute professionalism. The results were flawless — you'd never know anything happened.",
    name: "Jennifer M.",
    location: "McLean, VA",
  },
  {
    text: "Their process is transparent and the results are measurable. From assessment to final report, every step was communicated clearly.",
    name: "David R.",
    location: "Great Falls, VA",
  },
  {
    text: "The public adjuster they provided saved us thousands on our insurance claim. Truly a professional experience from start to finish.",
    name: "Sarah K.",
    location: "Potomac, MD",
  },
  {
    text: "Outstanding mold remediation work. The third-party lab report gave us complete peace of mind that our home was safe.",
    name: "Michael T.",
    location: "Arlington, VA",
  },
  {
    text: "From the first phone call to final walkthrough, the professionalism was extraordinary. Our carpets look brand new.",
    name: "Lisa W.",
    location: "Bethesda, MD",
  },
];

const GoogleReviews = () => (
  <section className="section-padding bg-secondary">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="label-text text-primary mb-4 text-center">Testimonials</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">What Our Clients Say</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="card-surface p-8 h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed italic mb-6">"{r.text}"</p>
              <div>
                <p className="text-foreground font-body font-medium text-sm">{r.name}</p>
                <p className="text-primary text-xs label-text">Verified Google Review · {r.location}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={0.4}>
        <p className="text-muted-foreground text-sm text-center mt-8">
          300+ verified reviews on Google · Yelp · Angie's List
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default GoogleReviews;

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-about.jpg";

const tags = ["All", "Water Damage", "Mold", "Carpet", "Air Duct", "Case Study", "Field Report", "Educational"];

const posts = [
  {
    title: "Water Damage Restoration in Arlington — Case Study",
    excerpt: "A burst pipe caused significant structural moisture damage. Here's how our team restored the property to Salem Standard in 72 hours.",
    date: "February 15, 2026",
    tag: "Water Damage",
    location: "Arlington, VA",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80",
    featured: true,
  },
  {
    title: "Before & After: Carpet Restoration in McLean, VA",
    excerpt: "Fine Oriental rugs treated with temperature-controlled extraction and pH-balanced solutions — documented outcomes included.",
    date: "January 28, 2026",
    tag: "Carpet",
    location: "McLean, VA",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
  },
  {
    title: "How We Verify Indoor Air Quality After Mold Removal",
    excerpt: "Third-party lab certification is not optional at Salem Steamer. Here's exactly what we test and why.",
    date: "February 8, 2026",
    tag: "Mold",
    location: "Educational",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
  },
  {
    title: "Dryer Vent Cleaning — Fire Prevention Field Report",
    excerpt: "A routine dryer vent inspection revealed critical blockage. This report documents the process and verified outcome.",
    date: "January 15, 2026",
    tag: "Air Duct",
    location: "Great Falls, VA",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
  },
  {
    title: "Field Report: Emergency Water Extraction in Potomac",
    excerpt: "Our team responded within 60 minutes to a burst pipe emergency, preventing extensive structural damage.",
    date: "January 5, 2026",
    tag: "Field Report",
    location: "Potomac, MD",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  },
  {
    title: "The Science Behind Odor Neutralization",
    excerpt: "How ozone and hydroxyl treatments permanently eliminate smoke, pet, and microbial odors at the molecular level.",
    date: "December 20, 2025",
    tag: "Case Study",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
];

const Blog = () => {
  const [activeTag, setActiveTag] = useState("All");
  const filtered = activeTag === "All" ? posts : posts.filter(p => p.tag === activeTag);
  const featured = filtered.find(p => p.featured) || filtered[0];
  const grid = filtered.filter(p => p !== featured);

  return (
    <main>
      <PageHero
        image={heroImage}
        label="Field Reports & Case Studies"
        title="Field Reports & Case Studies"
        subtitle="Real jobs. Documented outcomes. Verified results."
      />

      {/* Filter Tags */}
      <section className="bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full label-text transition-colors ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 card-surface overflow-hidden">
                <div className="card-image-wrapper h-64 md:h-auto">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary text-primary-foreground text-[10px] label-text px-3 py-1 rounded-full">{featured.tag}</span>
                    {featured.location && <span className="label-text text-muted-foreground text-[10px]">{featured.location}</span>}
                  </div>
                  <h2 className="font-display text-3xl text-foreground mb-4">{featured.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{featured.excerpt}</p>
                  <p className="text-muted-foreground text-sm mb-6">{featured.date}</p>
                  <span className="text-primary label-text cursor-pointer hover:underline">Read More →</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grid.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 0.08}>
                <div className="card-surface overflow-hidden h-full card-hover">
                  <div className="card-image-wrapper" style={{ height: 200 }}>
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-primary text-primary-foreground text-[10px] label-text px-3 py-1 rounded-full">{post.tag}</span>
                      {post.location && <span className="label-text text-muted-foreground text-[10px]">{post.location}</span>}
                    </div>
                    <h3 className="font-display text-lg text-foreground mb-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                    <p className="text-muted-foreground text-xs mb-4">{post.date}</p>
                    <span className="text-primary label-text cursor-pointer hover:underline">Read More →</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;

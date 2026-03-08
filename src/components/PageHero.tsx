import { motion } from "framer-motion";

interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
  label?: string;
}

const PageHero = ({ image, title, subtitle, label }: PageHeroProps) => (
  <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(28,28,28,0.80) 0%, rgba(28,28,28,0.60) 50%, rgba(28,28,28,0.75) 100%)" }} />
    <div className="relative z-10 text-center px-6 max-w-4xl">
      {label && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="label-text mb-4"
          style={{ color: "#E8611A" }}
        >
          {label}
        </motion.p>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-white/70 text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;

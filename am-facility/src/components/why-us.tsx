import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function WhyUs() {
  const { T } = useLanguage();
  const w = T.whyUs;

  return (
    <section className="relative py-24 lg:py-32 bg-background border-t border-border overflow-hidden">
      <div className="absolute inset-0 glow-top pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-foreground mb-20 tracking-[-0.03em]"
        >
          {w.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {w.pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.4 }}
              className="border-t border-border pt-8 pr-8 pb-10 group hover:border-white/20 transition-colors duration-300"
            >
              <p className="text-6xl font-extrabold text-foreground/[0.06] mb-6 tracking-[-0.04em] group-hover:text-foreground/[0.1] transition-colors duration-300">{p.num}</p>
              <h3 className="text-lg font-bold text-foreground mb-3 tracking-[-0.02em]">{p.title}</h3>
              <p className="text-sm font-medium text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

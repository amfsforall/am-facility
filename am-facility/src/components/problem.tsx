import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Problem() {
  const { T } = useLanguage();
  const p = T.problem;

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background border-y border-border overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-20 text-foreground tracking-[-0.03em]"
        >
          {p.title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
          {p.facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group"
            >
              <div className="h-px w-full bg-border mb-6 group-hover:bg-white/20 transition-colors duration-300" />
              <span className="block text-[10px] font-bold tracking-[0.28em] uppercase text-muted-foreground mb-4 font-mono">
                {fact.n}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-3 leading-snug tracking-[-0.02em] group-hover:text-white transition-colors duration-200">
                {fact.title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                {fact.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

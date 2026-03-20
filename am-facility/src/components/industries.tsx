import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Industries() {
  const { T } = useLanguage();
  const ind = T.industries;

  return (
    <section id="industries" className="py-24 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <p className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-5 font-bold">{ind.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-[-0.03em]">
              {ind.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2"
          >
            {ind.list.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 py-4 border-b border-border group cursor-default"
              >
                <span className="text-[10px] font-bold text-muted-foreground/50 font-mono w-5 tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
                <span className="text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-150">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

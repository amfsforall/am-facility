import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || isNaN(numericValue)) return;
    const duration = 1200;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * numericValue));
      if (step >= steps) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, numericValue]);

  if (isNaN(numericValue)) return <span>{value}</span>;
  return <span>{display}{suffix}</span>;
}

export function Impact() {
  const { T } = useLanguage();
  const imp = T.impact;
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 bg-background border-t border-border overflow-hidden">
      <div className="absolute inset-0 glow-top pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-14 tracking-[-0.03em]">
              {imp.title}
            </h2>

            <div ref={statsRef} className="grid grid-cols-3 gap-6">
              {imp.stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="h-px w-full bg-border mb-5" />
                  <p className="text-5xl md:text-6xl font-extrabold text-foreground mb-2.5 tracking-[-0.04em] tabular-nums">
                    <AnimatedNumber value={s.value} inView={inView} />
                  </p>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.18em] leading-relaxed">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-8 font-bold">{imp.eyebrow}</p>
            <ul className="space-y-0">
              {imp.outcomes.map((text, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + idx * 0.08, duration: 0.35 }}
                  className="flex items-center gap-4 py-4 border-b border-border group cursor-default"
                >
                  <motion.span
                    initial={{ width: 12 }}
                    whileHover={{ width: 20 }}
                    className="flex-shrink-0 h-px bg-foreground/25 group-hover:bg-foreground transition-colors duration-200"
                    style={{ width: 12 }}
                  />
                  <span className="text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

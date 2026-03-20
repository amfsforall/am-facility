import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Monitor, BarChart3, Users, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const icons = [Building2, Monitor, BarChart3, Users, Zap];

const descriptions = {
  es: [
    "Coordinamos todos los recursos físicos de tu empresa para que operes sin interrupciones ni desgaste interno.",
    "Infraestructura tecnológica que funciona — sin depender de ti para que así sea.",
    "Convertimos datos operativos en decisiones claras. Reportes, dashboards y KPIs diseñados a la medida.",
    "Encontramos, filtramos y entregamos el talento que tu operación necesita. Rápido y sin fricción.",
    "Para las situaciones que no pueden esperar. Respuesta inmediata, ejecución impecable.",
  ],
  en: [
    "We coordinate all your company's physical resources so you operate without disruptions or internal burnout.",
    "Technology infrastructure that just works — without depending on you to make it happen.",
    "We turn operational data into clear decisions. Reports, dashboards, and KPIs designed for your business.",
    "We find, screen, and deliver the talent your operation needs. Fast and frictionless.",
    "For situations that can't wait. Immediate response, flawless execution.",
  ],
};

export function Services() {
  const { T, lang } = useLanguage();
  const s = T.services;
  const [current, setCurrent] = useState(0);
  const item = s.items[current];
  const Icon = icons[current];
  const desc = descriptions[lang][current];

  return (
    <section id="solutions" className="relative py-24 lg:py-36 border-t border-border overflow-hidden">
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="absolute inset-0 glow-top pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.32em] uppercase text-muted-foreground mb-4 font-bold"
          >
            {s.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="text-4xl md:text-5xl font-extrabold text-foreground tracking-[-0.03em] max-w-xl"
          >
            {s.title}
          </motion.h2>
        </div>

        {/* Tab navigation */}
        <div className="flex items-center gap-1 mb-14 border-b border-border overflow-x-auto">
          {s.items.map((tab, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "relative flex-shrink-0 px-5 py-3.5 text-xs font-bold tracking-[0.12em] uppercase transition-all duration-200 pb-4 whitespace-nowrap",
                current === i ? "text-foreground" : "text-muted-foreground hover:text-foreground/60"
              )}
            >
              <span className="flex items-center gap-2.5">
                <span className="opacity-40 font-mono text-[10px]">{tab.category}</span>
                <span className="hidden sm:inline">{tab.title}</span>
              </span>
              {current === i && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-foreground"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.26, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0"
          >
            {/* Left: Identity */}
            <div className="relative pr-0 lg:pr-20 pb-16 lg:pb-0">
              <p
                className="absolute -top-4 -left-3 text-[9rem] lg:text-[13rem] font-extrabold text-foreground/[0.035] leading-none select-none pointer-events-none"
                aria-hidden
              >
                {item.category}
              </p>

              <div className="relative z-10 pt-2">
                <div className="inline-flex items-center gap-2.5 mb-8 px-3 py-1.5 rounded-full border border-border bg-secondary/50">
                  <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                    {item.category} — {item.title}
                  </span>
                </div>

                <h3 className="text-[2rem] sm:text-[2.6rem] font-extrabold text-foreground leading-[1.08] tracking-[-0.035em] mb-5">
                  {item.headline}
                </h3>

                <p className="text-sm font-medium text-muted-foreground leading-relaxed max-w-sm">
                  {desc}
                </p>
              </div>
            </div>

            {/* Right: List */}
            <div className="border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-2 lg:pl-16">
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6 font-bold">{s.includes}</p>
              <ul className="space-y-0">
                {item.items.map((line, j) => (
                  <motion.li
                    key={`${current}-${j}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * 0.045, duration: 0.22 }}
                    className="flex items-center gap-4 py-4 border-b border-border group"
                  >
                    <span className="text-[9px] font-bold tabular-nums text-muted-foreground/35 w-4 shrink-0 font-mono">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-150 leading-snug">
                      {line}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Service icon grid */}
        <div className="mt-16 grid grid-cols-5 gap-2">
          {s.items.map((tab, i) => {
            const TabIcon = icons[i];
            return (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "p-4 rounded-xl border transition-all duration-200 text-left group",
                  current === i
                    ? "border-white/15 bg-secondary/70"
                    : "border-border bg-transparent hover:border-border/80 hover:bg-secondary/25"
                )}
              >
                <TabIcon className={cn("w-4 h-4 mb-3 transition-colors", current === i ? "text-foreground/60" : "text-muted-foreground/35 group-hover:text-muted-foreground/55")} />
                <p className={cn("text-[9px] font-bold tracking-[0.08em] uppercase leading-snug transition-colors line-clamp-2", current === i ? "text-foreground/60" : "text-muted-foreground/35 group-hover:text-muted-foreground/55")}>
                  {tab.title.split(" ").slice(0, 2).join(" ")}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

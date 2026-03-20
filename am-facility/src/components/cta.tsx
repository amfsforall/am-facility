import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function CTA() {
  const { T } = useLanguage();
  const c = T.cta;

  return (
    <section className="relative py-32 lg:py-44 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/monterrey-night.png`}
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-7 font-bold">{c.eyebrow}</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-5 leading-[1.06] tracking-[-0.03em]">
            {c.title}
          </h2>
          <p className="text-lg font-medium text-muted-foreground mb-10 max-w-lg leading-relaxed">
            {c.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:8111535106"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-black hover:bg-white/90 transition-all duration-200 hover:-translate-y-px text-sm"
            >
              {c.btn1}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:info@amfacilityservices.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold border border-white/20 text-white/70 hover:bg-white/5 hover:text-white transition-all duration-200 text-sm"
            >
              {c.btn2}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

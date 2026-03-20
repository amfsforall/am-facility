import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { T } = useLanguage();
  const h = T.hero;

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/monterrey-night.png`}
          alt="Monterrey, Mexico at night"
          className="w-full h-full object-cover object-center scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28 pt-40">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[10px] tracking-[0.35em] uppercase text-white/35 mb-10 font-bold"
        >
          {h.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06 }}
          className="text-[3rem] sm:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem] font-extrabold leading-[1.04] tracking-[-0.04em] text-white mb-8 max-w-4xl"
        >
          {h.line1}
          <br />
          <span className="text-white/40">{h.line2}</span>
        </motion.h1>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-base sm:text-lg text-white/45 max-w-md leading-relaxed font-medium"
          >
            {h.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold bg-white text-black hover:bg-white/90 transition-all duration-200 hover:-translate-y-px text-sm"
            >
              {h.btn1}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold bg-transparent border border-white/18 text-white/70 hover:bg-white/5 hover:border-white/28 transition-all duration-200 text-sm"
            >
              {h.btn2}
              <MoveRight className="w-4 h-4 opacity-60" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

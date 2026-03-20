import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/lib/translations";

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="11" height="27" rx="2" fill="white" />
      <rect x="16.5" y="8.5" width="11" height="19" rx="2" fill="white" opacity="0.55" />
    </svg>
  );
}

function LangToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-0 rounded-md border border-white/15 overflow-hidden text-xs font-semibold">
      {(["es", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={cn(
            "px-3 py-1.5 transition-all duration-200 uppercase tracking-widest",
            lang === l
              ? "bg-white text-black"
              : "text-white/40 hover:text-white/70"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const { T } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: T.nav.services, href: "#solutions" },
    { name: T.nav.industries, href: "#industries" },
    { name: T.nav.about, href: "#about" },
    { name: T.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <LogoMark />
            <span className="font-bold text-white text-sm tracking-tight hidden sm:block">
              AM Facility Services
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <LangToggle />
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg text-xs font-bold bg-white text-black hover:bg-white/90 transition-all duration-200 tracking-tight"
              >
                {T.nav.cta}
              </a>
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <LangToggle />
            <button
              className="p-1.5 text-white/60 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-white/60 hover:text-white transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center px-5 py-3 rounded-lg font-bold text-sm bg-white text-black hover:bg-white/90 transition-colors"
              >
                {T.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

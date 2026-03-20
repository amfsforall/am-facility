import { useLanguage } from "@/context/LanguageContext";

function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="11" height="27" rx="2" fill="white" />
      <rect x="16.5" y="8.5" width="11" height="19" rx="2" fill="white" opacity="0.45" />
    </svg>
  );
}

export function Footer() {
  const { T } = useLanguage();
  const f = T.footer;
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          <div className="md:col-span-1">
            <a href="#" className="inline-flex items-center gap-2.5 mb-5">
              <LogoMark />
              <span className="font-bold text-foreground text-sm tracking-tight">AM Facility Services</span>
            </a>
            <p className="text-sm font-medium text-muted-foreground leading-relaxed max-w-xs">
              {f.tagline}<br />{f.location}
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-6 font-bold">{f.navLabel}</p>
            <ul className="space-y-3">
              {f.navLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-6 font-bold">{f.contactLabel}</p>
            <ul className="space-y-4">
              <li>
                <a href="tel:8111535106" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <span className="text-foreground/30 text-[9px] font-bold tracking-wider">TEL</span>
                  81 1153 5106
                </a>
              </li>
              <li>
                <a href="mailto:info@amfacilityservices.com" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <span className="text-foreground/30 text-[9px] font-bold tracking-wider">EMAIL</span>
                  info@amfacilityservices.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-muted-foreground">{f.copyright(year)}</p>
          <p className="text-xs font-medium text-muted-foreground/40">{f.sub}</p>
        </div>
      </div>
    </footer>
  );
}

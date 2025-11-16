import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="url(#gFooter)"/>
              <path d="M60 120 L100 40 L140 120" stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M75 120 L125 120" stroke="white" strokeWidth="14" strokeLinecap="round"/>
              <defs>
                <linearGradient id="gFooter" x1="0" y1="0" x2="200" y2="200">
                  <stop offset="0%" stopColor="#FF7A00"/>
                  <stop offset="100%" stopColor="#FF4B00"/>
                </linearGradient>
              </defs>
            </svg>
            <div>
              <div className="text-xl font-bold gradient-text">PeopleX</div>
              <div className="text-sm text-muted-foreground">{t('footer.tagline')}</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
              {t('nav.home')}
            </a>
            <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">
              {t('nav.solutions')}
            </a>
            <a href="#technology" className="text-muted-foreground hover:text-primary transition-colors">
              {t('nav.technology')}
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Globe } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="url(#g)"/>
            <path d="M60 120 L100 40 L140 120" stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M75 120 L125 120" stroke="white" strokeWidth="14" strokeLinecap="round"/>
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="200" y2="200">
                <stop offset="0%" stopColor="#FF7A00"/>
                <stop offset="100%" stopColor="#FF4B00"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-2xl font-bold gradient-text">PeopleX</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">
            {t('nav.home')}
          </a>
          <a href="#solutions" className="text-foreground/80 hover:text-primary transition-colors">
            {t('nav.solutions')}
          </a>
          <a href="#technology" className="text-foreground/80 hover:text-primary transition-colors">
            {t('nav.technology')}
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
            {t('nav.contact')}
          </a>
        </div>

        {/* Theme & Language Toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2 glass-card border-border/50 hover:border-primary transition-all"
          >
            <Globe className="h-4 w-4" />
            <span>{language === 'en' ? 'TH' : 'EN'}</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[200px] animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 md:p-16 rounded-3xl border-2 border-primary/30 glow-orange animate-fade-in-up text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text text-glow">{t('contact.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              {t('contact.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <div className="flex items-center gap-3 glass-card px-6 py-4 rounded-2xl">
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">{t('contact.phone')}</div>
                  <div className="font-semibold">+66 2 123 4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 glass-card px-6 py-4 rounded-2xl">
                <Mail className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">{t('contact.email')}</div>
                  <div className="font-semibold">hello@peoplex.tech</div>
                </div>
              </div>
            </div>

            <Button size="lg" className="gradient-orange glow-orange-sm group text-lg px-12 py-6">
              {t('contact.cta')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

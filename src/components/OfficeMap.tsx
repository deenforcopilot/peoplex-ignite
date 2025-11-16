import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin } from 'lucide-react';

export const OfficeMap = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('office.title')}</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-2 rounded-3xl border-2 border-primary/30 glow-orange-sm animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9886156876787!2d100.53274931483048!3d13.723528290355736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f0e8e72b709%3A0x2e0c6e0b0e0c6e0b!2sEmpire%20Tower!5e0!3m2!1sen!2sth!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="mt-8 text-center glass-card p-8 rounded-3xl animate-fade-in-up animation-delay-200">
            <div className="inline-flex items-center gap-3 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold gradient-text">{t('office.address')}</h3>
            </div>
            <p className="text-lg text-muted-foreground">{t('office.location')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

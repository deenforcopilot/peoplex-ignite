import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { DollarSign, Eye, Target, Clock, PhoneOff, Briefcase, Users } from 'lucide-react';

const painPoints = [
  { key: 'expensive', icon: DollarSign },
  { key: 'transparency', icon: Eye },
  { key: 'accuracy', icon: Target },
  { key: 'slow', icon: Clock },
  { key: 'followup', icon: PhoneOff },
  { key: 'industry', icon: Briefcase },
  { key: 'pool', icon: Users },
];

export const PainPoints = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('pain.title')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {painPoints.map((pain, index) => {
            const Icon = pain.icon;
            return (
              <div
                key={pain.key}
                className={`glass-card p-6 rounded-3xl hover:scale-105 transition-all duration-500 group hover:glow-orange-sm ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">{t(`pain.${pain.key}`)}</h3>
                <p className="text-muted-foreground text-sm">{t(`pain.${pain.key}.desc`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

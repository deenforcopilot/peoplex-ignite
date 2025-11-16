import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, DollarSign, Target, Eye, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const values = [
  { key: 'faster', icon: Zap, metric: '5', suffix: 'x' },
  { key: 'cost', icon: DollarSign, metric: '40', suffix: '%' },
  { key: 'accuracy', icon: Target, metric: '50', suffix: '%' },
  { key: 'transparency', icon: Eye, metric: '100', suffix: '%' },
  { key: 'scalable', icon: Globe, metric: '∞', suffix: '' },
];

export const ValueProposition = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('value.title')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.key}
                className="glass-card p-8 rounded-3xl text-center hover:scale-105 transition-all duration-500 animate-scale-in border-2 border-border/50 hover:border-primary/50 hover:glow-orange-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl gradient-orange glow-orange-sm">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="mb-4">
                  {isVisible && (
                    <div className="text-5xl font-bold gradient-text text-glow">
                      {value.metric}{value.suffix}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2 gradient-text">
                  {t(`value.${value.key}`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`value.${value.key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

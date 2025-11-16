import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Brain, Workflow, Store, BarChart3 } from 'lucide-react';

const solutions = [
  { key: 'ai', icon: Brain },
  { key: 'workflow', icon: Workflow },
  { key: 'marketplace', icon: Store },
  { key: 'dashboard', icon: BarChart3 },
];

export const Solutions = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="solutions" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('solutions.title')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.key}
                className={`glass-card p-8 rounded-3xl hover:scale-[1.02] transition-all duration-700 group border-2 border-border/50 hover:border-primary/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl gradient-orange glow-orange-sm">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">{t(`solutions.${solution.key}.title`)}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t(`solutions.${solution.key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

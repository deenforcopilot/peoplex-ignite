import { useLanguage } from '@/contexts/LanguageContext';
import { Brain, Workflow, Store, BarChart3 } from 'lucide-react';

const solutions = [
  { key: 'ai', icon: Brain },
  { key: 'workflow', icon: Workflow },
  { key: 'marketplace', icon: Store },
  { key: 'dashboard', icon: BarChart3 },
];

export const Solutions = () => {
  const { t } = useLanguage();

  return (
    <section id="solutions" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
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
                className="glass-card p-8 rounded-3xl hover:scale-[1.02] transition-all duration-500 animate-fade-in-up group border-2 border-border/50 hover:border-primary/50"
                style={{ animationDelay: `${index * 150}ms` }}
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

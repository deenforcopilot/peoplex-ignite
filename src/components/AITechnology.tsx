import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Cpu, Database, Users, MessageSquare, TrendingUp } from 'lucide-react';

const technologies = [
  { key: 'matching', icon: Cpu },
  { key: 'ats', icon: Database },
  { key: 'marketplace', icon: Users },
  { key: 'screening', icon: MessageSquare },
  { key: 'analytics', icon: TrendingUp },
];

export const AITechnology = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="technology" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-deep rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('tech.title')}</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={tech.key}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="flex-1 glass-card p-8 rounded-3xl border-2 border-border/50 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl gradient-orange glow-orange-sm shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 gradient-text">
                        {t(`tech.${tech.key}.title`)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`tech.${tech.key}.desc`)}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-primary to-primary-deep animate-pulse" />
              </div>
            );
          })}
        </div>

        {/* Animated Circuit Pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="150" stroke="url(#techGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
            <circle cx="200" cy="200" r="100" stroke="url(#techGradient)" strokeWidth="2" fill="none" className="animate-pulse animation-delay-500" />
            <circle cx="200" cy="200" r="50" stroke="url(#techGradient)" strokeWidth="2" fill="none" className="animate-pulse animation-delay-1000" />
            <defs>
              <linearGradient id="techGradient">
                <stop offset="0%" stopColor="#FF7A00" />
                <stop offset="100%" stopColor="#FF4B00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

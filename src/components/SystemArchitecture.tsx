import { useLanguage } from '@/contexts/LanguageContext';
import { Smartphone, Monitor, Cpu } from 'lucide-react';

const systems = [
  { key: 'recruiter', icon: Smartphone },
  { key: 'client', icon: Monitor },
  { key: 'ai', icon: Cpu },
];

export const SystemArchitecture = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('system.title')}</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full gradient-orange glow-orange blur-md animate-pulse-glow" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systems.map((system, index) => {
              const Icon = system.icon;
              return (
                <div
                  key={system.key}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Connecting Line */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-transparent -z-10" />
                  
                  <div className="glass-card p-8 rounded-3xl text-center hover:scale-105 transition-all duration-500 border-2 border-border/50 hover:border-primary/50 hover:glow-orange-sm">
                    <div className="mb-6 inline-flex p-6 rounded-2xl gradient-orange glow-orange-sm">
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 gradient-text">
                      {t(`system.${system.key}`)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(`system.${system.key}.desc`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Animated Circuit Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: -1 }}>
            <line x1="50%" y1="50%" x2="16%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
            <line x1="50%" y1="50%" x2="84%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse animation-delay-500" />
            <defs>
              <linearGradient id="lineGradient">
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

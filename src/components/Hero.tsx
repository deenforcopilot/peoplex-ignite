import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-deep rounded-full blur-[120px] animate-pulse-glow animation-delay-1000" />
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,122,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,122,0,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium gradient-text">AI-Powered Recruitment</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-fade-in-up animation-delay-200">
            <span className="gradient-text text-glow">{t('hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Button size="lg" className="gradient-orange glow-orange-sm group text-lg px-8 py-6">
              {t('hero.cta.contact')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="glass-card border-primary/50 hover:border-primary text-lg px-8 py-6">
              {t('hero.cta.explore')}
            </Button>
          </div>

          {/* Tech Indicators */}
          <div className="flex justify-center gap-12 pt-12 animate-fade-in animation-delay-800">
            {['AI', 'Cloud', 'Analytics', 'Real-time'].map((tech, i) => (
              <div key={tech} className="flex flex-col items-center gap-2 animate-float" style={{ animationDelay: `${i * 200}ms` }}>
                <div className="w-2 h-2 rounded-full bg-primary glow-orange-sm" />
                <span className="text-sm text-muted-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

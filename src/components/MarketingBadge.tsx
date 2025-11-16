import { Sparkles } from 'lucide-react';

interface MarketingBadgeProps {
  text: string;
}

export const MarketingBadge = ({ text }: MarketingBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-primary/30 animate-pulse-glow">
      <Sparkles className="h-4 w-4 text-primary" />
      <span className="text-sm font-bold gradient-text uppercase tracking-wide">{text}</span>
    </div>
  );
};

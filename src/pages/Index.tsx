import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PainPoints } from '@/components/PainPoints';
import { Solutions } from '@/components/Solutions';
import { AITechnology } from '@/components/AITechnology';
import { ValueProposition } from '@/components/ValueProposition';
import { SystemArchitecture } from '@/components/SystemArchitecture';
import { OfficeMap } from '@/components/OfficeMap';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <Hero />
        <PainPoints />
        <Solutions />
        <AITechnology />
        <ValueProposition />
        <SystemArchitecture />
        <OfficeMap />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;

import HeroSection from '@/components/HeroSection';
import HistorySection from '@/components/HistorySection';
import ModelsSection from '@/components/ModelsSection';
import EvolutionSection from '@/components/EvolutionSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HistorySection />
      <ModelsSection />
      <EvolutionSection />
    </div>
  );
};

export default Index;

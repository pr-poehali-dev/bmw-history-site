import { useState } from 'react';
import HeroSection from '@/components/bmw/HeroSection';
import HistorySection from '@/components/bmw/HistorySection';
import ModelsSection from '@/components/bmw/ModelsSection';
import EvolutionTechSection from '@/components/bmw/EvolutionTechSection';

const Index = () => {
  const [selectedClass, setSelectedClass] = useState('all');
  const [compareMode, setCompareMode] = useState(false);
  const [selectedCars, setSelectedCars] = useState<number[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HistorySection />
      <ModelsSection 
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
        compareMode={compareMode}
        setCompareMode={setCompareMode}
        selectedCars={selectedCars}
        setSelectedCars={setSelectedCars}
      />
      <EvolutionTechSection />
    </div>
  );
};

export default Index;

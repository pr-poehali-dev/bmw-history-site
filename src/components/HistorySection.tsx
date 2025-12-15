import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Timeline = [
  { year: '1916', event: 'Основание BMW', description: 'Bayerische Motoren Werke начинает производство авиационных двигателей' },
  { year: '1928', event: 'Первый автомобиль', description: 'BMW 3/15 - первый серийный автомобиль компании' },
  { year: '1972', event: 'Серия 5', description: 'Запуск легендарной BMW 5 Series' },
  { year: '1985', event: 'M Power', description: 'Создание подразделения BMW M' },
  { year: '2013', event: 'i Series', description: 'Революция электромобилей с BMW i3 и i8' },
  { year: '2024', event: 'Будущее', description: 'Новая эра электрификации и автономного вождения' }
];

const HistorySection = () => {
  return (
    <section id="history" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-glow">История BMW</h2>
          <p className="text-xl text-bmw-silver">100+ лет инноваций и страсти к совершенству</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2"></div>
          
          {Timeline.map((item, index) => (
            <div 
              key={item.year}
              className={`relative mb-12 animate-slide-${index % 2 === 0 ? 'right' : 'left'}`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover-scale">
                    <h3 className="text-3xl font-bold text-primary mb-2">{item.year}</h3>
                    <h4 className="text-xl font-semibold mb-2">{item.event}</h4>
                    <p className="text-bmw-silver">{item.description}</p>
                  </Card>
                </div>
                
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center border-4 border-background z-10 box-glow">
                  <Icon name="Zap" size={24} />
                </div>
                
                <div className="flex-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;

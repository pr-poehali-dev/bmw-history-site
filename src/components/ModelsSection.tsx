import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const BMWModels = [
  {
    id: 1,
    name: 'BMW 3 Series',
    class: 'sedan',
    year: 2024,
    power: '255 HP',
    acceleration: '5.6s',
    price: '$42,300',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    description: 'Легендарный спортивный седан с идеальным балансом мощности и комфорта'
  },
  {
    id: 2,
    name: 'BMW 5 Series',
    class: 'sedan',
    year: 2024,
    power: '335 HP',
    acceleration: '4.9s',
    price: '$56,200',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80',
    description: 'Премиальный бизнес-седан с передовыми технологиями'
  },
  {
    id: 3,
    name: 'BMW X5',
    class: 'suv',
    year: 2024,
    power: '335 HP',
    acceleration: '5.5s',
    price: '$62,700',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
    description: 'Роскошный SAV с непревзойденной универсальностью'
  },
  {
    id: 4,
    name: 'BMW X7',
    class: 'suv',
    year: 2024,
    power: '523 HP',
    acceleration: '4.5s',
    price: '$77,850',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    description: 'Флагманский SAV с максимальным пространством и роскошью'
  },
  {
    id: 5,
    name: 'BMW M3',
    class: 'm-series',
    year: 2024,
    power: '503 HP',
    acceleration: '3.4s',
    price: '$74,700',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80',
    description: 'Высокопроизводительный седан M с гоночными характеристиками'
  },
  {
    id: 6,
    name: 'BMW M5',
    class: 'm-series',
    year: 2024,
    power: '617 HP',
    acceleration: '3.1s',
    price: '$108,900',
    image: 'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?w=800&q=80',
    description: 'Суперседан с невероятной мощностью и динамикой'
  },
  {
    id: 7,
    name: 'BMW i4',
    class: 'electric',
    year: 2024,
    power: '536 HP',
    acceleration: '3.9s',
    price: '$67,300',
    image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=800&q=80',
    description: 'Электрический Gran Coupe с захватывающей динамикой'
  },
  {
    id: 8,
    name: 'BMW iX',
    class: 'electric',
    year: 2024,
    power: '516 HP',
    acceleration: '4.6s',
    price: '$87,250',
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80',
    description: 'Инновационный электрический SAV с футуристичным дизайном'
  },
  {
    id: 9,
    name: 'BMW 7 Series',
    class: 'sedan',
    year: 2024,
    power: '536 HP',
    acceleration: '4.4s',
    price: '$95,800',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80',
    description: 'Флагманский седан с максимальной роскошью и технологиями'
  },
  {
    id: 10,
    name: 'BMW X3',
    class: 'suv',
    year: 2024,
    power: '248 HP',
    acceleration: '6.0s',
    price: '$47,200',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    description: 'Компактный SAV с идеальным балансом размера и производительности'
  }
];

const ModelsSection = () => {
  const [selectedClass, setSelectedClass] = useState('all');
  const [compareMode, setCompareMode] = useState(false);
  const [selectedCars, setSelectedCars] = useState<number[]>([]);

  const filteredModels = selectedClass === 'all' 
    ? BMWModels 
    : BMWModels.filter(car => car.class === selectedClass);

  const toggleCarSelection = (id: number) => {
    if (selectedCars.includes(id)) {
      setSelectedCars(selectedCars.filter(carId => carId !== id));
    } else if (selectedCars.length < 3) {
      setSelectedCars([...selectedCars, id]);
    }
  };

  return (
    <section id="models" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-glow">Каталог моделей</h2>
          <p className="text-xl text-bmw-silver mb-8">Выберите свой идеальный BMW</p>
        </div>

        <div className="flex justify-center mb-8 gap-4 flex-wrap">
          <Button 
            variant={selectedClass === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedClass('all')}
            className={selectedClass === 'all' ? 'bg-primary' : 'border-primary hover:bg-primary/10'}
          >
            Все модели
          </Button>
          <Button 
            variant={selectedClass === 'sedan' ? 'default' : 'outline'}
            onClick={() => setSelectedClass('sedan')}
            className={selectedClass === 'sedan' ? 'bg-primary' : 'border-primary hover:bg-primary/10'}
          >
            <Icon name="Car" className="mr-2" size={18} />
            Седаны
          </Button>
          <Button 
            variant={selectedClass === 'suv' ? 'default' : 'outline'}
            onClick={() => setSelectedClass('suv')}
            className={selectedClass === 'suv' ? 'bg-primary' : 'border-primary hover:bg-primary/10'}
          >
            <Icon name="Truck" className="mr-2" size={18} />
            SAV
          </Button>
          <Button 
            variant={selectedClass === 'm-series' ? 'default' : 'outline'}
            onClick={() => setSelectedClass('m-series')}
            className={selectedClass === 'm-series' ? 'bg-accent' : 'border-accent hover:bg-accent/10'}
          >
            <Icon name="Flame" className="mr-2" size={18} />
            M Series
          </Button>
          <Button 
            variant={selectedClass === 'electric' ? 'default' : 'outline'}
            onClick={() => setSelectedClass('electric')}
            className={selectedClass === 'electric' ? 'bg-secondary' : 'border-secondary hover:bg-secondary/10'}
          >
            <Icon name="Zap" className="mr-2" size={18} />
            Electric
          </Button>
        </div>

        <div className="flex justify-center mb-8">
          <Button
            variant={compareMode ? 'default' : 'outline'}
            onClick={() => {
              setCompareMode(!compareMode);
              setSelectedCars([]);
            }}
            className={compareMode ? 'bg-accent' : 'border-accent hover:bg-accent/10'}
          >
            <Icon name="GitCompare" className="mr-2" size={18} />
            {compareMode ? 'Отменить сравнение' : 'Сравнить модели'}
          </Button>
        </div>

        {compareMode && selectedCars.length > 0 && (
          <div className="mb-8 p-4 bg-card/50 rounded-lg border border-accent/30 animate-scale-in">
            <div className="flex items-center justify-between">
              <p className="text-lg">
                Выбрано моделей: {selectedCars.length}/3
              </p>
              {selectedCars.length >= 2 && (
                <Button size="sm" className="bg-accent hover:bg-accent/90">
                  <Icon name="BarChart3" className="mr-2" size={18} />
                  Показать сравнение
                </Button>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModels.map((car, index) => (
            <Card 
              key={car.id}
              className={`group bg-card/30 backdrop-blur border-primary/20 overflow-hidden hover-scale cursor-pointer animate-scale-in ${
                selectedCars.includes(car.id) ? 'ring-2 ring-accent' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => compareMode && toggleCarSelection(car.id)}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  {car.class === 'm-series' && (
                    <Badge className="bg-accent text-white">M Power</Badge>
                  )}
                  {car.class === 'electric' && (
                    <Badge className="bg-secondary text-background">Electric</Badge>
                  )}
                </div>
                {compareMode && (
                  <div className="absolute top-4 left-4">
                    {selectedCars.includes(car.id) ? (
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <Icon name="Check" size={20} />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-background/50 backdrop-blur rounded-full border-2 border-white"></div>
                    )}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                <p className="text-bmw-silver mb-4 text-sm">{car.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Gauge" size={16} className="text-primary" />
                    <span className="text-sm">{car.power}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Timer" size={16} className="text-primary" />
                    <span className="text-sm">0-100: {car.acceleration}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{car.price}</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;

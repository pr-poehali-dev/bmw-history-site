import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

const Timeline = [
  { year: '1916', event: 'Основание BMW', description: 'Bayerische Motoren Werke начинает производство авиационных двигателей' },
  { year: '1928', event: 'Первый автомобиль', description: 'BMW 3/15 - первый серийный автомобиль компании' },
  { year: '1972', event: 'Серия 5', description: 'Запуск легендарной BMW 5 Series' },
  { year: '1985', event: 'M Power', description: 'Создание подразделения BMW M' },
  { year: '2013', event: 'i Series', description: 'Революция электромобилей с BMW i3 и i8' },
  { year: '2024', event: 'Будущее', description: 'Новая эра электрификации и автономного вождения' }
];

const Index = () => {
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
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">BMW</span>
            </div>
            <span className="text-xl font-bold">BMW Heritage</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#history" className="hover:text-primary transition-colors">История</a>
            <a href="#models" className="hover:text-primary transition-colors">Модели</a>
            <a href="#evolution" className="hover:text-primary transition-colors">Эволюция</a>
            <a href="#tech" className="hover:text-primary transition-colors">Технологии</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            Тест-драйв
          </Button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-bmw-dark to-background"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px] animate-glow-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[120px] animate-glow-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-black mb-6 text-glow">
              THE ULTIMATE
              <br />
              <span className="text-primary">DRIVING MACHINE</span>
            </h1>
            <p className="text-xl md:text-2xl text-bmw-silver mb-12 max-w-3xl mx-auto">
              Погрузитесь в историю легендарного бренда BMW - от авиационных двигателей 1916 года до революционных электромобилей сегодня
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 box-glow">
                <Icon name="Play" className="mr-2" />
                Смотреть историю
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary hover:bg-primary/10">
                Каталог моделей
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-primary" />
        </div>
      </section>

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

      <section id="evolution" className="py-24 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-glow">Эволюция дизайна</h2>
            <p className="text-xl text-bmw-silver">От классики до современности</p>
          </div>

          <Tabs defaultValue="1970s" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8 bg-card/50">
              <TabsTrigger value="1970s">1970s</TabsTrigger>
              <TabsTrigger value="1980s">1980s</TabsTrigger>
              <TabsTrigger value="1990s">1990s</TabsTrigger>
              <TabsTrigger value="2000s">2000s</TabsTrigger>
              <TabsTrigger value="2010s">2010s</TabsTrigger>
              <TabsTrigger value="2020s">2020s</TabsTrigger>
            </TabsList>

            <TabsContent value="1970s" className="animate-fade-in">
              <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Эра классики</h3>
                    <p className="text-bmw-silver mb-4">
                      1970-е годы ознаменовались появлением легендарных моделей, таких как BMW 3 Series (E21) и BMW 5 Series (E12). 
                      Угловатые линии, характерные двойные фары и знаменитая решетка радиатора становятся визитной карточкой бренда.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle" className="text-primary" size={20} />
                        <span>Угловатый дизайн кузова</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle" className="text-primary" size={20} />
                        <span>Культовые круглые фары</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle" className="text-primary" size={20} />
                        <span>Минималистичный интерьер</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80" 
                      alt="BMW 1970s"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="2020s" className="animate-fade-in">
              <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Электрическое будущее</h3>
                    <p className="text-bmw-silver mb-4">
                      2020-е годы - эра электрификации. BMW i4, iX и новая 7 Series демонстрируют смелый футуристичный дизайн 
                      с увеличенной решеткой радиатора, острыми LED-фарами и аэродинамичными формами.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon name="Zap" className="text-secondary" size={20} />
                        <span>Электрические силовые установки</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Cpu" className="text-secondary" size={20} />
                        <span>Автономное вождение</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Smartphone" className="text-secondary" size={20} />
                        <span>Цифровые интерьеры</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=800&q=80" 
                      alt="BMW 2020s"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="tech" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-glow">Инновационные технологии</h2>
            <p className="text-xl text-bmw-silver">Передовые разработки BMW</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Zap', title: 'Electric Drive', desc: 'Мощные электрические силовые установки', color: 'text-secondary' },
              { icon: 'Cpu', title: 'iDrive 9', desc: 'Интеллектуальная система управления', color: 'text-primary' },
              { icon: 'Shield', title: 'Active Safety', desc: 'Активные системы безопасности', color: 'text-accent' },
              { icon: 'Gauge', title: 'M TwinPower', desc: 'Легендарные турбированные двигатели', color: 'text-primary' }
            ].map((tech, index) => (
              <Card 
                key={tech.title}
                className="p-6 bg-card/30 backdrop-blur border-primary/20 hover-scale group animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors`}>
                  <Icon name={tech.icon as any} size={32} className={tech.color} />
                </div>
                <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                <p className="text-bmw-silver text-sm">{tech.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-card border-t border-primary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">BMW</span>
                </div>
                <span className="text-lg font-bold">BMW Heritage</span>
              </div>
              <p className="text-bmw-silver text-sm">
                История легендарного бренда BMW от 1916 года до наших дней
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-bmw-silver">
                <li><a href="#history" className="hover:text-primary transition-colors">История</a></li>
                <li><a href="#models" className="hover:text-primary transition-colors">Модели</a></li>
                <li><a href="#evolution" className="hover:text-primary transition-colors">Эволюция</a></li>
                <li><a href="#tech" className="hover:text-primary transition-colors">Технологии</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-bmw-silver">
                <li><a href="#" className="hover:text-primary transition-colors">Каталог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тест-драйв</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дилеры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Следите за нами</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary/20 pt-8 text-center text-sm text-bmw-silver">
            <p>© 2024 BMW Heritage. Все права защищены. Создано с ❤️ для поклонников BMW.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const EvolutionSection = () => {
  return (
    <>
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
    </>
  );
};

export default EvolutionSection;

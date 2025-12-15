import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <>
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
    </>
  );
};

export default HeroSection;

import { ChevronDown } from "lucide-react";
import ContactPopup from "./ContactPopup";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useConfig } from "@/contexts/ConfigContext";

const Hero = () => {
  const config = useConfig();

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full h-screen"
      >
        <CarouselContent className="h-screen">
          {config.hero.slides.map((slide, index) => (
            <CarouselItem key={index} className="relative min-h-screen flex items-center justify-center">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt="Sacred Kaaba in Mecca"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-dark/70 via-emerald-dark/50 to-emerald-dark/80" />
              </div>

              <div className="absolute inset-0 pattern-overlay opacity-30" />

              <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pb-32 md:pb-24">
                <div className="max-w-4xl mx-auto">
                  <p className="text-gold-light text-base md:text-lg lg:text-xl font-serif italic mb-4 md:mb-6 opacity-0 animate-fade-in">
                    {slide.bismillah}
                  </p>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-serif font-semibold text-primary-foreground mb-4 md:mb-6 leading-tight opacity-0 animate-fade-in-up animation-delay-200">
                    {slide.headingPre}{" "}
                    <span className="text-gradient-gold">{slide.headingSpan}</span>
                  </h1>

                  <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-primary-foreground/90 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animation-delay-400">
                    {slide.subheading}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center opacity-0 animate-fade-in-up animation-delay-600">
                    <button
                      onClick={() => handleScroll("#packages")}
                      className="px-6 md:px-8 py-3 md:py-4 bg-accent text-accent-foreground rounded-full text-base md:text-lg font-medium hover:bg-accent/90 transition-all shadow-gold hover:shadow-lg hover:scale-105"
                    >
                      {config.hero.buttons.explore}
                    </button>
                    <ContactPopup>
                      <button className="px-6 md:px-8 py-3 md:py-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 rounded-full text-base md:text-lg font-medium hover:bg-primary-foreground/20 transition-all backdrop-blur-sm">
                        {config.hero.buttons.contact}
                      </button>
                    </ContactPopup>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 z-30" />
        <CarouselNext className="right-4 z-30" />
      </Carousel>

      <div className="absolute bottom-24 md:bottom-20 left-1/2 -translate-x-1/2 text-center z-20">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 opacity-0 animate-fade-in animation-delay-800">
          {config.hero.trustBadges.map((badge, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gold">{badge.value}</p>
              <p className="text-primary-foreground/70 text-xs md:text-sm">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => handleScroll("#about")}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-float z-30"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </section>
  );
};

export default Hero;


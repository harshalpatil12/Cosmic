import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-lighting.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const slides = [
    {
      id: 1,
      title: "THE SIGMA RANGE",
      subtitle: "Controlled optics. Configurable Design.",
      buttonText: "Explore Range",
      image: heroImage,
      gradient: "from-primary/80 via-primary/40 to-transparent"
    },
    {
      id: 2,
      title: "SMART LIGHTING",
      subtitle: "Intelligent control. Seamless integration.",
      buttonText: "Discover Smart",
      image: heroImage,
      gradient: "from-accent/80 via-accent/40 to-transparent"
    },
    {
      id: 3,
      title: "OUTDOOR SOLUTIONS",
      subtitle: "Durable design. Weather resistant.",
      buttonText: "View Outdoor",
      image: heroImage,
      gradient: "from-secondary/80 via-secondary/40 to-transparent"
    },
    {
      id: 4,
      title: "CUSTOM PROJECTS",
      subtitle: "Bespoke lighting. Tailored solutions.",
      buttonText: "Start Project",
      image: heroImage,
      gradient: "from-primary/80 via-primary/40 to-transparent"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Navigation functions
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const goToPreviousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPreviousSlide();
      } else if (event.key === 'ArrowRight') {
        goToNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [goToPreviousSlide, goToNextSlide]);

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
              <div className={`max-w-2xl text-white transition-all duration-1000 delay-300 ${
                index === currentSlide ? 'animate-fade-in' : 'opacity-0'
              }`}>
                <h1 className="text-5xl lg:text-7xl font-light mb-6 tracking-wide">
                  {slide.title}
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-white/90 font-light">
                  {slide.subtitle}
                </p>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-light text-accent-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 h-12 w-12 transition-all duration-300 hover:scale-110"
        onClick={goToPreviousSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 h-12 w-12 transition-all duration-300 hover:scale-110"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:bg-white/80 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-white transition-all duration-1000 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import biogas from '../assets/biogas.webp';
import carboncredit from '../assets/carboncredit.webp';
import circulareconomy from '../assets/circulareconomy.webp';
import wasterecylce from '../assets/wasterecycling.webp';
import ewasterecycle from '../assets/E-wasterecycling.webp'
import training  from '../assets/training.webp';
import solidwastetreatment from '../assets/solidwastetreatment.webp';
import tyrerecycling from '../assets/tyrerecycling.webp'

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0); // State to track progress
  const slides = [
    {
      imageUrl:biogas ,
      title: 'Biogas Technology',
      subtitle: 'Turning Waste Into Clean Energy.',
      buttonText: 'Get Started',
    },
    {
      imageUrl: carboncredit,
      title: 'Carbon Credit',
      subtitle: 'Empowering a Greener Future with Carbon Offsets.',
      buttonText: 'Get Started',
    },
    {
      imageUrl: circulareconomy,
      title: 'Circular Economy',
      subtitle: 'Reimagining Resources, Redefining Sustainability.',
      buttonText: 'Get Started',
    },
    {
      imageUrl: wasterecylce,
      title: 'Construction and Demolition Waste Recycling',
      subtitle: 'Building a Greener Tomorrow from Today’s Waste.',
      buttonText: 'Get Started',
    },
    {
      imageUrl: ewasterecycle,
      title: 'E-Waste Recycling',
      subtitle: 'Recycling Technology for a Sustainable Future.',
      buttonText: 'Get Started',
    },
    {
      imageUrl:training,
      title: 'Environmental & Sustainability Training',
      subtitle: 'Empowering Minds for a Sustainable Planet.',
      buttonText: 'Get Started',
    },
    {
      imageUrl: solidwastetreatment,
      title: 'Municipal Solid Waste Treatment',
      subtitle: 'Transforming Waste into Resources for a Cleaner World.',
      buttonText: 'Get Started',
    },
    {
      imageUrl: tyrerecycling,
      title: 'Tyre Recycling',
      subtitle: 'Reviving Old Tyres for a Greener Future.',
      buttonText: 'Get Started',
    },
   
  ];

  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1; // Increment progress by 1
        } else {
          return 100; // When progress reaches 100, stop incrementing
        }
      });
    }, 50); // Increment progress every 50ms

    return () => clearInterval(progressInterval); // Clean up interval when component unmounts
  }, [currentSlide]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Move to next slide every 5 seconds
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Clean up slide interval when component unmounts
  }, [slides.length,currentSlide]);

  const handlePrevSlide = () => {
    setProgress(0);
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setProgress(0);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <section className="relative h-[100vh] md:h-[100vh] lg:h-[100vh] w-full overflow-hidden bg-black">
      <div className="absolute top-0 left-0 right-0 z-50 h-1 bg-black/20">
        {/* Progress Bar */}
        <div
          className="h-full bg-primary"
          style={{ width: `${progress}%`, transition: 'width 100ms ease' }}
        ></div>
      </div>
      <div className="relative h-full">
        <div
          className="absolute inset-0 w-full h-full transition-all duration-700"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            display: 'flex',
            transition: 'transform 0.7s ease',
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10"></div>
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
        <div className="relative z-20 flex flex-col justify-center h-full container mx-auto px-6 lg:px-10 items-center text-center">
          <div className="max-w-xl text-center">
            {/* <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-light text-sm font-medium mb-4">
              Slide {currentSlide + 1} of {slides.length}
            </span> */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <a
                href="#about"
                className="btn-animated inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all duration-300 group hover:bg-primary-dark"
              >
                <span className="relative z-10">{slides[currentSlide].buttonText}</span>
                <span
                  className="ml-2 relative z-10"
                  style={{ transform: 'translateX(1.98152px)' }}
                >
                  <i className="fas fa-arrow-right text-sm"></i>
                </span>
              </a>
              {/* <a
                href="#waitlist"
                className="btn-animated inline-flex items-center px-6 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white border border-white/30 font-medium transition-all duration-300 hover:bg-white/30"
              >
                <i className="fas fa-play text-xs mr-2"></i>
                <span className="relative z-10">Watch Demo</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Previous slide"
        onClick={handlePrevSlide}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Next slide"
        onClick={handleNextSlide}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-primary scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Banner;

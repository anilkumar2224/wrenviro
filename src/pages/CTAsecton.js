import React from 'react';
import ctaImg from '../assets/cta.webp';
const CTASection = () => {
  return (
    <section className="py-20 relative "style={{height:'70vh'}}>
 <div
  className="absolute inset-0 bg-primary bg-opacity-90 z-0"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),  url(${ctaImg})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}
></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex items-center h-full">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
          Let’s Build a Greener Future Together
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10">
          At 7WR Enviro, we are dedicated to creating a cleaner, more sustainable world. Whether you are looking for expert guidance in waste management, renewable energy, or environmental education, we are here to support your vision.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 bg-white text-primary hover:bg-neutral-lightest font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
          Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

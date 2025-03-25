import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 relative "style={{height:'100vh'}}>
      <div
        className="absolute inset-0 bg-primary bg-opacity-90 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1508726096737-5ac7ca26345f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex items-center h-full">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Ready to Transform Your Sustainability Approach?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            Join our exclusive waitlist to be among the first to access our platform and receive special early adopter benefits.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 bg-white text-primary hover:bg-neutral-lightest font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Join the Waitlist Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import React from 'react';

function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mt-20 -mr-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -mb-32 -ml-32"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
            Stay Connected
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Be the first to know about new sustainability initiatives, industry trends, best practices, and exclusive resources.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl max-w-2xl mx-auto shadow-lg">
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="space-y-2 flex-grow">
                <input
                  type="email"
                  className="flex h-10 border bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow px-5 py-4 rounded-lg outline-none text-neutral-800 w-full text-lg shadow-sm border-white/20"
                  name="email"
                  placeholder="Enter your email address"
                  aria-describedby="email-description"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-white text-primary hover:bg-neutral-100 active:bg-neutral-200 font-bold py-4 px-8 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary shadow-lg text-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Subscribe
                <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
            <p className="text-white/60 text-sm mt-4">
              We respect your privacy. Your email will never be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;

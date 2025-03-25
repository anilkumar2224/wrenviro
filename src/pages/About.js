import React from 'react';
import { useInView } from "react-intersection-observer";
import about from '../assets/about.jpg'
function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section id="about" className="py-20 bg-neutral-lightest" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className=" transform-none">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-6">
            Welcome to 7WR Enviro – Your Partner in Sustainability
            </h2>
            <p className="text-lg text-neutral-medium mb-6">
            7WR Enviro is a leading European multidisciplinary environmental consultancy committed to delivering innovative, sustainable, and practical solutions in waste management, recycling, and renewable energy.
           
            </p>
            <p className="text-lg text-neutral-medium mb-8">
            With decades of expertise, we specialize in providing customized services that drive environmental stewardship, sustainability, and circular economy initiatives across industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="mr-2 text-2xl text-primary">
                  <i className="fas fa-leaf"></i>
                </div>
                <span className="font-medium">Eco-Friendly</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 text-2xl text-primary">
                  <i className="fas fa-bolt"></i>
                </div>
                <span className="font-medium">Energy Efficient</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 text-2xl text-primary">
                  <i className="fas fa-recycle"></i>
                </div>
                <span className="font-medium">Circular Economy</span>
              </div>
            </div>
          </div>
          <div className="transform-none">
            <div className="relative">
              <img
                src={about}
                alt="Sustainable consultants examining solar panels"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-success/20 p-3 rounded-full mr-4">
                    <i className="fas fa-check text-success text-xl"></i>
                  </div>
                  <div>
                    <p className="font-medium">Trusted by</p>
                    <p className="text-2xl font-bold text-primary">200+ Companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

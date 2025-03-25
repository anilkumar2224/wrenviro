import React,{useRef,useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Services() {

  const containerRef = useRef(null);
  const scrollDivRef=useRef(null);
  const cardData = [
    {
      id: 1,
      title: "Renewable Energy Solutions",
      description: "Expert consulting on solar, wind, and hydroelectric implementation to reduce carbon footprint and energy costs.",
      icon: "fas fa-solar-panel",
      gradient: "from-green-50 to-green-100",
    },
    {
      id: 2,
      title: "Waste Management Systems",
      description: "Comprehensive waste reduction strategies and recycling programs customized for your organization.",
      icon: "fas fa-recycle",
      gradient: "from-blue-50 to-blue-100",
    },
    {
      id: 3,
      title: "Sustainability Reporting",
      description: "ESG reporting and analytics to track, measure, and communicate your environmental impact and progress.",
      icon: "fas fa-chart-line",
      gradient: "from-amber-50 to-amber-100",
    },

    {
      id: 4,
      title: "Renewable Energy Solutions",
      description: "Expert consulting on solar, wind, and hydroelectric implementation to reduce carbon footprint and energy costs.",
      icon: "fas fa-solar-panel",
      gradient: "from-green-50 to-green-100",
    },
    {
      id: 5,
      title: "Waste Management Systems",
      description: "Comprehensive waste reduction strategies and recycling programs customized for your organization.",
      icon: "fas fa-recycle",
      gradient: "from-blue-50 to-blue-100",
    },
    {
      id: 6,
      title: "Sustainability Reporting",
      description: "ESG reporting and analytics to track, measure, and communicate your environmental impact and progress.",
      icon: "fas fa-chart-line",
      gradient: "from-amber-50 to-amber-100",
    },
    {
      id: 7,
      title: "Renewable Energy Solutions",
      description: "Expert consulting on solar, wind, and hydroelectric implementation to reduce carbon footprint and energy costs.",
      icon: "fas fa-solar-panel",
      gradient: "from-green-50 to-green-100",
    },
    {
      id: 8,
      title: "Waste Management Systems",
      description: "Comprehensive waste reduction strategies and recycling programs customized for your organization.",
      icon: "fas fa-recycle",
      gradient: "from-blue-50 to-blue-100",
    },
    {
      id: 9,
      title: "Sustainability Reporting",
      description: "ESG reporting and analytics to track, measure, and communicate your environmental impact and progress.",
      icon: "fas fa-chart-line",
      gradient: "from-amber-50 to-amber-100",
    },
    {
      id: 10,
      title: "Renewable Energy Solutions",
      description: "Expert consulting on solar, wind, and hydroelectric implementation to reduce carbon footprint and energy costs.",
      icon: "fas fa-solar-panel",
      gradient: "from-green-50 to-green-100",
    },
    {
      id: 11,
      title: "Waste Management Systems",
      description: "Comprehensive waste reduction strategies and recycling programs customized for your organization.",
      icon: "fas fa-recycle",
      gradient: "from-blue-50 to-blue-100",
    },
    {
      id: 12,
      title: "Sustainability Reporting",
      description: "ESG reporting and analytics to track, measure, and communicate your environmental impact and progress.",
      icon: "fas fa-chart-line",
      gradient: "from-amber-50 to-amber-100",
    },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const updateScroll = () => {
      if(!scrollDivRef.current) return 
    // Step 1: Shift the container to the right initially
 
    gsap.set(scrollDivRef.current, { xPercent:60/cardData?.length });
   
  
    // Step 2: Scroll animation from right to left
    gsap.to(scrollDivRef.current, {
      x: -(cardData?.length*scrollDivRef.current.scrollWidth+300),
      // xPercent:-80,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: `top ${window.innerHeight>=650?90:30} `,
        end: () => `${scrollDivRef.current.scrollWidth} `,
        scrub: true,
        pin: containerRef.current,
        markers: false,
      },
    });
  }
    updateScroll();

    // Add resize event listener
    window.addEventListener('resize', updateScroll);
  
    // Cleanup
    return () =>{
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener('resize', updateScroll);
    } 

 
  }, []);

  return (
    <section id="services" className="py-20 bg-pattern bg-white relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10"  ref={containerRef}>
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <div className="px-4 py-2 rounded-full border-2 border-primary/20 bg-primary/5 text-primary-light font-medium text-sm">
              Sustainable Excellence
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-neutral-medium max-w-3xl mx-auto">
            EcoVenture provides end-to-end sustainability solutions tailored to your specific industry needs.
          </p>
        </div>

        <div className="absolute left-0 top-20 w-24 h-24 rounded-full bg-primary/5 -z-10"></div>
        <div className="absolute right-10 bottom-20 w-32 h-32 rounded-full bg-primary/5 -z-10"></div>
        {/* grid grid-cols-1 md:grid-cols-3 */}
        {window.innerWidth<600 || window.innerHeight<600?
 <div className="gap-8 grid grid-cols-1 md:grid-cols-2" >
 {/* Renewable Energy Solutions Card */}
 {cardData.map((card) => (
<div
 key={card.id}
 className={`bg-gradient-to-br ${card.gradient} rounded-xl p-8 shadow-md transition-all duration-300 relative overflow-hidden card-hover panel `}
 style={{maxWidth:window.innerWidth}}
>
 <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-full -mt-12 -mr-12 z-0"></div>
 <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/30 rounded-full -mb-8 -ml-8 z-0"></div>
 <div className="relative z-10">
   <div className="bg-white/80 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
     <i className={`${card.icon} text-2xl text-primary icon-hover`}></i>
   </div>
   <h3 className="text-xl font-bold font-heading mb-4 text-neutral-dark">{card.title}</h3>
   <p className="text-neutral-medium mb-6">{card.description}</p>
   <a
     href="#waitlist"
     className="btn-animated inline-flex items-center px-4 py-2 rounded-lg bg-white/60 hover:bg-white text-primary font-medium transition-all duration-300 group"
   >
     <span className="relative z-10">Learn more</span>
     <span className="ml-2 relative z-10">
       <i className="fas fa-arrow-right text-sm"></i>
     </span>
   </a>
 </div>
</div>
))}
</div>
        :
        <div className=" relative flex gap-8 scroll-cards  w-full" ref={scrollDivRef} style={{width:'max-content'}}>
          {/* Renewable Energy Solutions Card */}
          {cardData.map((card) => (
        <div
          key={card.id}
          className={`bg-gradient-to-br ${card.gradient} rounded-xl p-8 shadow-md transition-all duration-300 relative overflow-hidden card-hover panel `}
          style={{maxWidth:window.innerWidth}}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-full -mt-12 -mr-12 z-0"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/30 rounded-full -mb-8 -ml-8 z-0"></div>
          <div className="relative z-10">
            <div className="bg-white/80 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <i className={`${card.icon} text-2xl text-primary icon-hover`}></i>
            </div>
            <h3 className="text-xl font-bold font-heading mb-4 text-neutral-dark">{card.title}</h3>
            <p className="text-neutral-medium mb-6">{card.description}</p>
            <a
              href="#waitlist"
              className="btn-animated inline-flex items-center px-4 py-2 rounded-lg bg-white/60 hover:bg-white text-primary font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Learn more</span>
              <span className="ml-2 relative z-10">
                <i className="fas fa-arrow-right text-sm"></i>
              </span>
            </a>
          </div>
        </div>
      ))}
        </div>
}
      </div>
    </section>
  );
}

export default Services;

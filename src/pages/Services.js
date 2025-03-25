import React,{useRef,useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import service1 from '../assets/service-1.png'
import service2 from '../assets/service-2.png'
import service3 from '../assets/service-3.png'
import service4 from '../assets/service-4.png'
import service5 from '../assets/service-5.png'
import service6 from '../assets/service-6.png'
import service7 from '../assets/service-7.png'
import service8 from '../assets/service-8.png'
import service9 from '../assets/service-9.png'
import service10 from '../assets/service-10.png'
import service11 from '../assets/service-11.png'
import service12 from '../assets/service-12.png'


function Services() {

  const containerRef = useRef(null);
  const scrollDivRef=useRef(null);
  const cardData = [
    {
      id: 1,
      title: "Municipal Solid Waste (MSW)",
      description: "Efficient management of urban waste to maximize recycling and minimize landfill use.",
      icon: service1,
      gradient: "from-green-50 to-green-100",
      list:["Waste Collection, Sorting & Segregation",
        "Recycling & Resource Recovery",
        "Composting & Biogas Production",
        "Waste-to-Energy (WTE) Technologies"]
    },
    {
      id: 2,
      title: "Construction & Demolition (C&D) Waste Recycling",
      description: "Transforming construction waste into reusable materials and sustainable solutions.",
      icon: service2,
      gradient: "from-blue-50 to-blue-100",
      list:["Concrete & Brick Crushing for Reuse",
        "Metal, Wood & Plasterboard Recycling",
        "Recycled Aggregates & Sustainable Construction Materials"]
    },
    {
      id: 3,
      title: "PV ( Solar Panel ) Recycling, E-Waste & Cable Scrap Recycling",
      description: "Recovering valuable metals and reducing electronic waste pollution.",
      icon: service3,
      gradient: "from-amber-50 to-amber-100",
      list:["Safe Dismantling & Component Recovery",
        "Cable & Wire Processing",
        "Secure Data Destruction & Compliance"]
    },

    {
      id: 4,
      title: "Tyre Recycling",
      description: "Innovative solutions for converting waste tyres into valuable products.",
      icon: service4,
      gradient: "from-indigo-50 to-indigo-100",
      list:[
        "Crumb Rubber & Recycled Tyre Products",
"Pyrolysis for Fuel & Carbon Black Recovery",
"Retreading & Extended Use Strategies"
      ]
    },
    {
      id: 5,
      title: "End-of-Life Vehicle (ELV) Recycling",
      description: "Ensuring responsible vehicle dismantling & material recovery.",
      icon: service5,
      gradient: "from-red-50 to-red-100",
      list:[
       "Depollution & Safe Disposal of Hazardous Materials",
"Recycling of Ferrous & Non-Ferrous Metals",
"Reuse of Auto Parts & Components"
      ]
    },
    {
      id: 6,
      title: "Medical Waste Recycling",
      description: "Safe & compliant disposal of hazardous medical waste.",
      icon: service6,
      gradient: "from-lime-50 to-lime-100",
      list:[
        "Sterilization & Incineration Solutions",
"Recycling of Medical Plastics & Sharps",
"Hospital Waste Management & Compliance"
      ]
    },
    {
      id: 7,
      title: "Industrial Wastewater Recycling",
      description: "Advanced water treatment solutions for industries.",
      icon: service7,
      gradient: "from-sky-50 to-sky-100",
      list:[
        "Zero Liquid Discharge (ZLD) Technologies",
"Chemical & Biological Treatment of Effluents",
"Water Reuse & Recycling Strategies"
      ]
    },
    {
      id: 8,
      title: "Circular Economy Initiatives",
      description: "Helping industries minimize waste & maximize resource efficiency.",
      icon: service8,
      gradient: "from-emerald-50 to-emerald-100",
      list:[
        "Eco-Design & Sustainable Production",
"Closed-Loop Recycling Solutions",
"Corporate Circular Economy Consultancy"
      ]
    },

    {
      id: 9,
      title: "Reusable Building Materials Production",
      description: "Developing sustainable construction materials from waste.",
      icon: service9,
      gradient: "from-orange-50 to-orange-100",
      list:[
       "Recycled Concrete Aggregates (RCA)",
"Eco-Friendly Bricks & Pavers",
"Glass & Wood Recovery for Reuse"
      ]
    },
    {
      id: 10,
      title: "Organic Fertilizer Production & Sales",
      description: "Transforming organic waste into high-quality fertilizers.",
      icon: service10,
      gradient: "from-cyan-50 to-cyan-100",
      list:[
        "Composting & Bio-Fertilizer Production",
"Organic Soil Enhancers for Sustainable Agriculture",
"Market & Distribution Support"
      ]
    },
    {
      id: 11,
      title: "Renewable Energy Solutions",
      description: "Harnessing biogas, bioelectricity, and solar power from waste.",
      icon: service11,
      gradient: "from-purple-50 to-purple-100",
      list:[
        "Biogas from Organic Waste & Manure",
        "Bioelectricity Generation & Grid Integration",
        "Waste-to-Energy (WTE) & Solar Energy Solutions"
      ]
    },
  
    {
      id: 12,
      title: "Organic Farm Management",
      description: "Supporting eco-friendly and sustainable agriculture.",
      icon: service12,
      gradient: "from-yellow-50 to-yellow-100",
      list:[
        "Soil Health & Organic Farming Solutions",
"Water Conservation & Irrigation Strategies",
"Training for Organic Farmers"
      ]
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
      x: -((cardData?.length+3)*scrollDivRef.current.scrollWidth+300),
      // xPercent:-80,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: `top ${window.innerHeight>=650?90:30} `,
        end: () => `+=${scrollDivRef.current.scrollWidth} `,
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
            Sectors We Serve
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-neutral-medium max-w-3xl mx-auto">
          Turning Challenges into Opportunities.
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
              {/* <i className={`${card.icon} text-2xl text-primary icon-hover`}></i> */}
              <img src={card.icon} className='text-2xl text-primary icon-hover' style={{objectFit:'contain',width:'60%',height:'60%'}}/>
            </div>
            <h3 className="text-xl font-bold font-heading mb-4 text-neutral-dark">{card.title}</h3>
            <p className="text-neutral-medium mb-6">{card.description}</p>
            <div className="grid grid-cols-1 gap-4 mb-4">
                  {card?.list?.map((stat, i) => (
                    <div key={i} className="flex items-baseline gap-4 mb-2">
                  
                  <i className=
                  "fas fa-shield" ></i>
                
                      <p className="font-medium">{stat}</p>
                      {/* <p className="text-xs">{stat.label}</p> */}
                    </div>
                  ))}
                </div>

       
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
              {/* <i className={`${card.icon} text-2xl text-primary icon-hover`}></i> */}
              <img src={card.icon} className='text-2xl text-primary icon-hover' style={{objectFit:'contain',width:'60%',height:'60%'}}/>
            </div>
            <h3 className="text-xl font-bold font-heading mb-4 text-neutral-dark">{card.title}</h3>
            <p className="text-neutral-medium mb-6">{card.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
                  {card?.list?.map((stat, i) => (
                    <div key={i} className="flex items-baseline gap-4 mb-2">
                  
                  <i className=
                  "fas fa-shield" ></i>
                
                      <p className="font-medium">{stat}</p>
                      {/* <p className="text-xs">{stat.label}</p> */}
                    </div>
                  ))}
                </div>

            {/* <a
              href="#waitlist"
              className="btn-animated inline-flex items-center px-4 py-2 rounded-lg bg-white/60 hover:bg-white text-primary font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Learn more</span>
              <span className="ml-2 relative z-10">
                <i className="fas fa-arrow-right text-sm"></i>
              </span>
            </a> */}
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

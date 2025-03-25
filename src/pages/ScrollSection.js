

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import expertise1 from '../assets/expertise-1.jpg'
import expertise2 from '../assets/expertise-2.jpg'
import expertise3 from '../assets/expertise-3.jpg'
import expertise4 from '../assets/expertise-4.jpg'
import expertise5 from '../assets/expertise-5.jpg'
const StickySection = () => {
  const galleryRef = useRef(null);
  const rightRef = useRef(null);
  const images = [
    {
      imgUrl: expertise1,
      icon:"fas fa-recycle",
      title: "Waste Management & Recycling",
      description:"We offer comprehensive waste management and recycling solutions designed to reduce landfill waste, enhance resource recovery, and promote a circular economy.",
      list:["Integrated Waste Management Solutions for Municipal Solid Waste, Industrial Waste, and Hazardous Waste",
        "Recycling of E-Waste, Construction & Demolition Waste, Metals, and Plastics",
        "Advanced processing technologies for waste segregation, treatment, and conversion into useful resources",
        "Feasibility studies to assess recycling and waste processing project viability"],
      bgColor: "rgb(250, 225, 238)",
      bgColorClass: "red",
        textColor:"#E67FB4"
    },
    {
      imgUrl:expertise2,
      icon:"fas fa-project-diagram",
      title: "Feasibility Studies & Project Management",
      description:"Our in-depth feasibility studies assess the technical, commercial, and financial viability of waste management and renewable energy projects.",
      list:["Market analysis and risk assessment for recycling and energy projects",
       " Planning, design, and implementation support for waste and energy projects",
        "Regulatory compliance and environmental impact assessment"],
      bgColor: "rgb(224, 240, 255)",
      bgColorClass: "green",
      textColor:"#78A9D9"
    },
    {
      imgUrl:expertise3,
      icon:"fa-solid fa-user-graduate",
      title: "Environmental & Sustainability Education for School Children.",
      description:"We believe that education is the key to driving long-term environmental change. Our specialized training programs for schools, universities, and corporate institutions include",
      list:["Comprehensive courses in sustainability, waste management, and circular economy",
       "Hands-on learning experiences through study tours and practical workshops",
        "Curriculum design and teaching materials for environmental education",
        "Awareness programs on climate change, carbon footprint reduction, and green technologies"],
      bgColor: "rgb(255, 237, 224)",
      bgColorClass: "blue",
       textColor:"#F2AB79"
    },
    {
      imgUrl: expertise4,
     icon: "fas fa-atom",
      title: "Renewable Energy Solutions",
      description:"Our renewable energy services focus on transforming waste into valuable energy resources through",
      list:["Bio-Electricity & Biogas Generation from organic waste",
        "Waste-to-Energy (WTE) & Waste-to-Heat Solutions",
        "Solar Energy Integration in waste management projects",
        "Feasibility Studies for renewable energy project implementation"],
      bgColor: "rgb(211, 214, 240)",
      bgColorClass: "orange",
       textColor:"#7781D9"
    },
    {
      imgUrl:expertise5,
      icon: "fas fa-ticket",
      title: "Technical, Commercial & Business Support",
      description:"We provide end-to-end consultancy and strategic support for businesses and government bodies involved in recycling and renewable energy projects. Our services include",
      list:["Procurement and selection of cutting-edge recycling and waste processing technologies",
        "Business development strategies for waste and renewable energy sectors",
        "Investment planning, funding assistance, and carbon credit revenue generation"],
      bgColor: "rgb(240, 238, 211)",
      bgColorClass: "orange",
       textColor:"#bbb555"
    },
  ];

  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, delay) {
  let timeout;
  return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
          func.apply(this, args);
      }, delay);
  };
}

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial setup for photo elements (opacity, scale, position)
    gsap.set('.photo:not(:first-child)', { opacity: 1, scale: 1, y: '100%' });

   
    // Animation for photo elements
    const photoAnimation = gsap.to('.photo:not(:first-child)', {
      opacity: 1,
      scale: 2,
      duration: 0.5,
      stagger: 1,
      y: '0%',
    });
    const header=document.getElementById("header");
    // ScrollTrigger to pin the right section and animate the photos
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: galleryRef.current,
      start: 'top top',
      end: `+=${galleryRef.current.scrollHeight} bottom`,
      pin: rightRef.current,
      animation: photoAnimation,
      scrub: true,
      // markers:true,
      onUpdate:()=>{
        galleryRef.current.style.transition="background 1s ease-out"
      
        header.classList.remove('bg-white')
        header.classList.remove('shadow-md')
        const scrollValue = window.scrollY; // You can also use document.
      //  rightRef.current.style.transition = 'transform 600ms ease-out';
      // rightRef.current.style.transform = `translate(0px,${scrollValue}px)`
      
      },
      onLeave: () => {
        // Add classes when leaving the trigger area (scrolling past the element)
        const scrollValue = window.scrollY;
        header.classList.add('bg-white');
        header.classList.add('shadow-md');
        // rightRef.current.style.transform = `translate(0px,${scrollValue}px)`
        // rightRef.current.style.position='fixed'
        // rightRef.current.style.left='50%'
      
      },
      onLeaveBack: () => {
        // Optional: Add classes when re-entering the scroll area (scrolling back up)
        const scrollValue = window.scrollY;
        header.classList.add('bg-white');
        header.classList.add('shadow-md');
  //  rightRef.current.style.transform = `translate(0px,${scrollValue}px)`
  //         rightRef.current.style.position='fixed'
  //       rightRef.current.style.left='50%'
      
      },

  
    });

    // Dynamically set background color changes when scrolling through each section
    images.forEach((image, index) => {
      gsap.to('.gallery', {
        duration: 1,
        backgroundColor: image.bgColor || '#ffffff',
        scrollTrigger: {
          trigger: `.d${index + 1}`,
          scrub: true,
        },
      });
    });

    // Cleanup function to remove ScrollTrigger instances when the component unmounts
    return () => {
      // This will kill the ScrollTrigger instance to prevent memory leaks
      scrollTriggerInstance.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Make sure to clean up all instances
    };
  }, [images]); // Add `images` to the dependency array so it reruns when `images` changes


  return (
    <section id="expertise" className="pt-24 relative overflow-hidden bg-white">
     {/* Section intro - visible only at the start */}
      <div className="container mx-auto px-4 md:px-8 py-16  top-0 z-10 pointer-events-none" >
        <div className="max-w-3xl mx-auto text-center">
          {/* <motion.div
            style={{ opacity: useTransform(smoothScrollYProgress, [0, 0.05], [1, 0]) }}
          > */}
            <span className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium text-sm inline-block mb-4">
            Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
            Innovative Solutions for a Sustainable Future
            </h2>
            {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scroll down to explore our comprehensive sustainability services that drive measurable environmental impact while improving business performance
            </p> */}
          {/* </motion.div> */}
        </div>
      </div>

      <div className="gallery" ref={galleryRef}>
        <div className="left mt-10">
          <div className="detailsWrapper">
            {images.map((image, index) => (
              <div className={`details d${index + 1}`} key={index}>
                 <div className="bg-white/40 backdrop-blur-sm w-20 h-20 rounded-br-3xl flex items-center justify-center mb-6 shadow-sm shrink-0">
                <i className={`${image.icon} text-2xl text-[${image.textColor}] icon-hover`}></i>
              </div>
                <div className={` text-3xl md:text-4xl font-bold  font-heading mb-6`}>
                  <span>{image.title }</span>
                </div>
                <p className="text-lg text-neutral-medium mb-8 ">{image?.description}</p>
                <div className="grid grid-cols-1 gap-4 mb-6">
                  {image?.list?.map((stat, i) => (
                    <div key={i} className="flex items-baseline gap-5 mb-2">
                  
                  <i className={`fas fa-bolt text-[${image?.textColor}] font-bold`}></i>
                
                      <p className="font-medium">{stat}</p>
                      {/* <p className="text-xs">{stat.label}</p> */}
                    </div>
                  ))}
                </div>
               
              </div>
            ))}
          </div>
        </div>

        <div className="right" ref={rightRef}>
          <div className="photos">
            <div className="photos-box">
              {images.map((image, index) => (
                <div className={`photo ${image.bgColorClass}`} key={index}>
                  <img src={image.imgUrl} alt={image.altText || `Image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default StickySection;
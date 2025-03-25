// import { useRef, useState, useEffect } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// export default function ScrollySection() {
//   const containerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Even smoother spring physics for most fluid motion
//   const smoothScrollYProgress = useSpring(scrollYProgress, {
//     stiffness: 5,
//     damping: 5,
//     restDelta: 0.1,
//     mass: 1
//   });

//   // Text movement based on scroll
//   const textX1 = useTransform(smoothScrollYProgress, [0, 0.25], [0, -10]);
//   const textX2 = useTransform(smoothScrollYProgress, [0.25, 0.5], [0, -10]);
//   const textX3 = useTransform(smoothScrollYProgress, [0.5, 0.75], [0, -10]);
//   const textX4 = useTransform(smoothScrollYProgress, [0.75, 1], [0, -10]);

//   // Image movement based on scroll
//   const imageX1 = useTransform(smoothScrollYProgress, [0, 0.25], [0, 80]);
//   const imageX2 = useTransform(smoothScrollYProgress, [0.25, 0.5], [0, 80]);
//   const imageX3 = useTransform(smoothScrollYProgress, [0.5, 0.75], [0, 80]);
//   const imageX4 = useTransform(smoothScrollYProgress, [0.75, 1], [0, 80]);

//   // Update current index based on scroll position
// //   useEffect(() => {
// //     return scrollYProgress.on("change", (latest) => {
// //         if (latest <= 0) setCurrentIndex(0);
// //       else if (latest < 0.25) setCurrentIndex(0);
// //       else if (latest < 0.45) setCurrentIndex(1);
// //       else if (latest < 0.65) setCurrentIndex(2);
// //       else  setCurrentIndex(3);
    
     
   
// //     });
// //   }, [scrollYProgress]);
// useEffect(() => {
//   const handleScroll = () => {
//     if (!containerRef.current) return;

//     const containerTop = containerRef.current.offsetTop;
//     const containerBottom = containerTop + containerRef.current.offsetHeight;
//     const scrollY = window.scrollY;

   

//     // Check if scrollY is within container boundaries
//     if (scrollY >= containerTop && scrollY <= containerBottom) {
//       const scrollTop = scrollY - containerTop;
//       const scrollHeight = containerRef.current.scrollHeight 
//       const progress = scrollHeight === 0 ? 0 : scrollTop / scrollHeight;
//       console.log("Hii",containerTop,containerBottom,scrollY,scrollY >= containerTop && scrollY <= containerBottom, scrollTop,scrollHeight,progress)

//       if (progress <= 0) setCurrentIndex(0);
//       else if (progress < 0.15) setCurrentIndex(0);
//       else if (progress < 0.45) setCurrentIndex(1);
//       else if (progress < 0.65) setCurrentIndex(2);
//       else if (progress < 0.9) setCurrentIndex(3);
//       else setCurrentIndex(-1);
//     }
//   };

//   window.addEventListener('scroll', handleScroll);
//   handleScroll(); // Initialize on mount

//   return () => window.removeEventListener('scroll', handleScroll);
// }, [containerRef, setCurrentIndex]);



//   const items = [
//     {
//       id: 1,
//       title: "Sustainable Resource Management",
//       description: "Our approach integrates cutting-edge technology with environmental best practices to optimize resource usage while minimizing waste generation.",
//       imagePath: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
//       align: "right",
//       backgroundColor: "bg-gradient-to-br from-green-50 to-green-100/80",
//       iconClass: "fa-recycle",
//       stats: [
//         { label: "Waste Reduction", value: "Up to 80%" },
//         { label: "Resource Efficiency", value: "35-50%" },
//         { label: "Cost Savings", value: "$2.4M avg." }
//       ]
//     },
//     {
//       id: 2,
//       title: "Carbon Footprint Reduction",
//       description: "We develop comprehensive strategies to measure, manage and reduce carbon emissions across your operations.",
//       imagePath: "https://images.unsplash.com/photo-1473170611423-22489201d919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
//       align: "left",
//       backgroundColor: "bg-gradient-to-br from-blue-50 to-blue-100/80",
//       iconClass: "fa-leaf",
//       stats: [
//         { label: "CO₂ Reduction", value: "25-40%" },
//         { label: "Energy Savings", value: "1.7M kWh" },
//         { label: "Carbon Credits", value: "15K tons" }
//       ]
//     },
//     {
//       id: 3,
//       title: "Renewable Energy Transition",
//       description: "Our team of experts guides organizations through the complex process of transitioning to renewable energy sources.",
//       imagePath: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
//       align: "right",
//       backgroundColor: "bg-gradient-to-br from-amber-50 to-amber-100/80",
//       iconClass: "fa-solar-panel",
//       stats: [
//         { label: "Clean Energy", value: "70MW+" },
//         { label: "ROI", value: "3-5 years" },
//         { label: "Cost Reduction", value: "30-45%" }
//       ]
//     },
//     {
//       id: 4,
//       title: "Environmental Compliance & Reporting",
//       description: "Stay ahead of evolving regulations with our comprehensive environmental compliance services.",
//       imagePath: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
//       align: "left",
//       backgroundColor: "bg-gradient-to-br from-purple-50 to-purple-100/80",
//       iconClass: "fa-clipboard-check",
//       stats: [
//         { label: "Compliance Rate", value: "99.8%" },
//         { label: "Risk Reduction", value: "85%" },
//         { label: "Reporting Time", value: "-60%" }
//       ]
//     }
//   ];

//   return (
//     <section
//       className="relative overflow-hidden bg-white"
//       style={{  }} // Updated height for the full scrollable section
//       ref={containerRef}
//     >
//       {/* Section intro - visible only at the start */}
//       <div className="container mx-auto px-4 md:px-8 py-16 sticky top-0 z-10 pointer-events-none">
//         <div className="max-w-3xl mx-auto text-center">
//           {/* <motion.div
//             style={{ opacity: useTransform(smoothScrollYProgress, [0, 0.05], [1, 0]) }}
//           > */}
//             <span className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium text-sm inline-block mb-4">
//               Our Approach
//             </span>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
//               Sustainable Solutions Across Industries
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Scroll down to explore our comprehensive sustainability services that drive measurable environmental impact while improving business performance
//             </p>
//           {/* </motion.div> */}
//         </div>
//       </div>

//       {/* Sticky scroll content */}
//       <div className=" flex items-center relative " >
//       <div className=" top-0 h-screen flex items-center overflow-hidden"  >
//         {/* Colored backgrounds that fade in/out with gradient */}
//         {items.map((item, index) => {
        
      
//           return index==currentIndex ? <motion.div
//             key={`bg-${item.id}`}
//             className={`absolute inset-0 ${item.backgroundColor} transition-all duration-700`}
//             style={{
//               zIndex: 0,
          
//             }}
//           />
//         :null
// })}
// </div>


//         {/* Main content container */}
//         <div className="sticky_section container mx-auto px-4 md:px-8 py-16 space-y-10"
//         >
//           {items.map((item, index) => {
         
  
//     return  <div
//               key={item.id}
//               className={`flex flex-col md:flex-row items-center space-y-8 md:space-y-0 sticky_section_card-${index}`} // Ensure it takes full screen height
              
        
//             >
//               {/* Text Content */}
//               <motion.div
//                 className="text-center md:text-left md:w-1/2"
//                 style={{
//                   x: index === 0 ? textX1 : index === 1 ? textX2 : index === 2 ? textX3 : textX4,  // Use the correct scroll transform for each section
//                 }}
//               >
//                 <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
//                   <i className={`fas ${item.iconClass} text-xl text-primary`} />
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
//                 <p className="text-lg text-gray-600 mb-6">{item.description}</p>
//                 <div className="grid grid-cols-3 gap-4 mb-6">
//                   {item.stats.map((stat, i) => (
//                     <div key={i} className="text-center">
//                       <p className="text-lg font-bold">{stat.value}</p>
//                       <p className="text-xs">{stat.label}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <motion.a
//                   href="#"
//                   className="inline-flex items-center text-white bg-primary hover:bg-primary-dark px-5 py-2.5 rounded-lg"
//                 >
//                   Learn more
//                   <i className="fas fa-arrow-right ml-2 text-sm"></i>
//                 </motion.a>
//               </motion.div>

//               {/* Image Content */}
//               <motion.div
//                 className="w-full md:w-1/2"
//                 style={{
//                   x: index === 0 ? imageX1 : index === 1 ? imageX2 : index === 2 ? imageX3 : imageX4,  // Use the correct scroll transform for each section
//                 }}
//               >
//                 <img src={item.imagePath} alt={item.title} className="w-full h-full object-cover rounded-2xl" />
//               </motion.div>
//             </div>
//             // :null
// })}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const StickySection = () => {
  const galleryRef = useRef(null);
  const rightRef = useRef(null);
  const images = [
    {
      imgUrl: "https://picsum.photos/1920/1080?id=1",
      altText: "Red",
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
      imgUrl: "https://picsum.photos/1920/1080?id=2",
      altText: "Green",
      title: "Green Image",
      bgColor: "rgb(224, 240, 255)",
      bgColorClass: "green",
      textColor:"#78A9D9"
    },
    {
      imgUrl: "https://picsum.photos/1920/1080?id=3",
      altText: "Blue",
      title: "Blue Image",
      bgColor: "rgb(255, 237, 224)",
      bgColorClass: "blue",
       textColor:"#F2AB79"
    },
    {
      imgUrl: "https://picsum.photos/1920/1080?id=4",
      altText: "Orange",
      title: "Orange Image",
      bgColor: "rgb(211, 214, 240)",
      bgColorClass: "orange",
       textColor:"#7781D9"
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
      end: 'bottom bottom',
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
    <div>
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
                <i className={`fas fa-chart-line text-2xl text-[${image.textColor}] icon-hover`}></i>
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

    
    </div>
  );
};

export default StickySection;
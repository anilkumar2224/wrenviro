
import { useEffect, useRef } from 'react';
import './App.css';
import About from './pages/About';
import Banner from './pages/Banner';
import LocationMapSection from './pages/Contact';
import CTASection from './pages/CTAsecton';
import Footer from './pages/Footer';
import Header from './pages/Header';
import ImpactSection from './pages/Impact';
import NewsletterSection from './pages/Newsletter';
import ScrollySection from './pages/ScrollSection';
import Services from './pages/Services';
import { AnimatePresence, motion } from "framer-motion";
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <AnimatePresence>
 
    <div className="App" >
         <CustomCursor/>
           <Header/>
           {/* <SmoothScroll> */}
          <Banner/>
    
          <About/>
          <ScrollySection/>
          <CTASection/>
          <Services/>
         
          <ImpactSection/>
          <LocationMapSection/>
          <NewsletterSection/>
          <Footer/>
         {/* </SmoothScroll> */}
    </div>
   
    </AnimatePresence>
  );
}

export default App;

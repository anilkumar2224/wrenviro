import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo.png'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };




  const navItems = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Services", href: "#services" },
    { name: "Impact", href: "#impact" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className={
      `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white bg-opacity-95 shadow-md
      ${scrolled ? "py-2" : "py-4"}`
   
    }    id="header">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary text-2xl font-bold font-heading"
            >
              {/* <span className="text-primary">Eco</span>
              <span className="text-secondary">Venture</span> */}
              <a href='/'>
              <img src={logo} className="text-primary" style={{width:'80px',objectFit:'contain'}}/>
              </a>
            </motion.div>
          </div>
          
         
          
          <div className="flex items-center">
            {/* <motion.a
              href="#waitlist"
              className="hidden md:inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-full transition-all transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              Join Waitlist
            </motion.a> */}
      <nav className="hidden md:flex space-x-8">
  {navItems.map((item, index) => (
    <motion.a
      key={item.name}
      href={item.href}
      className="relative text-neutral-medium hover:text-primary font-medium transition-colors"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {item.name}
 
     
    </motion.a>
  ))}
</nav>

            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-neutral-medium hover:text-primary"
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-6 overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pt-4" id="mobile-nav" >
                {navItems.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    className="text-neutral-medium hover:text-primary font-medium transition-colors"
           
                  >
                    {item.name}
                  </a>
                ))}
                {/* <a 
                  href="#waitlist" 
                  className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-full text-center transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Waitlist
                </a> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}



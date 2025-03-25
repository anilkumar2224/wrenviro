import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/30 blur-3xl transform translate-x-[13.4096px] translate-y-[8.93976px]"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/20 blur-3xl transform translate-x-[-14.6249px] translate-y-[-9.14055px]"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 ">
          <div className=" transform translate-y-[20px]">
            {/* <div className="mb-6  transform scale-[0.8]">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 animate-pulse-slow rounded-full bg-primary-light opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className="fas fa-leaf text-white text-2xl"></i>
                  </div>
                </div>
                <div className="text-2xl font-bold font-heading">
                  <span className="text-white">Eco</span>
                  <span className="text-primary-light">Venture</span>
                </div>
              </div>
            </div> */}
              <div className="mb-6">
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 animate-pulse-slow rounded-full bg-primary-light opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-leaf text-white text-2xl"></i>
          </div>
        </div>
        <div className="text-2xl font-bold font-heading">
          <span className="text-white">7WR</span>
          <span className="text-primary-light">enviro</span>
        </div>
      </div>
    </div>
            <p className="text-white/90 mb-6">
              Connecting businesses with sustainable solutions for a greener future. Join us in creating a more sustainable world.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-[#0077B5] w-10 h-10 rounded-full flex items-center justify-center text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300" aria-label="Social media link 1">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="bg-[#1DA1F2] w-10 h-10 rounded-full flex items-center justify-center text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300" aria-label="Social media link 2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="bg-[#1877F2] w-10 h-10 rounded-full flex items-center justify-center text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300" aria-label="Social media link 3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-gradient-to-br from-[#405DE6] via-[#E1306C] to-[#FFDC80] w-10 h-10 rounded-full flex items-center justify-center text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300" aria-label="Social media link 4">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className=" transform translate-y-[20px]">
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-1 left-0 h-[2px] bg-primary-light" style={{ width: "100%" }}></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-white flex items-center ">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary-light"></i>About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white flex items-center ">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary-light"></i>Expertise
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/80 hover:text-white flex items-center ">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary-light"></i>Services
                </a>
              </li>
              <li>
                <a href="#team" className="text-white/80 hover:text-white flex items-center ">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary-light"></i>Contact
                </a>
              </li>
            
            </ul>
          </div>
          <div className=" transform translate-y-[20px]">
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Resources
              <div className="absolute -bottom-1 left-0 h-[2px] bg-primary-light" style={{ width: "100%" }}></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white flex items-center ">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary-light"></i>Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white flex items-center ">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary-light"></i>Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white flex items-center ">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary-light"></i>Sustainability Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white flex items-center ">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary-light"></i>FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className=" transform translate-y-[20px]">
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Contact
              <div className="absolute -bottom-1 left-0 h-[2px] bg-primary-light" style={{ width: "100%" }}></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary-light/20 text-primary-light w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span className="text-white/80 pt-1">Spain, Dubai</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-light/20 text-primary-light w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <span className="text-white/80 pt-1">info@7WRenviro.com</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-light/20 text-primary-light w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <span className="text-white/80 pt-1">+(971) 545027127</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">© 2025 7WRenviro, Inc. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white text-sm ">Privacy Policy</a>
              <span className="text-white/40">|</span>
              <a href="#" className="text-white/70 hover:text-white text-sm ">Terms of Service</a>
              <span className="text-white/40">|</span>
              <a href="#" className="text-white/70 hover:text-white text-sm ">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

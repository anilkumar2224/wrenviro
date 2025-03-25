import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(pointer: fine)');
    if (!mql.matches) return; // Only show custom cursor on devices with fine pointer

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
      
      // Add event listeners for links and buttons
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .interactive');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', onLinkMouseEnter);
        el.addEventListener('mouseleave', onLinkMouseLeave);
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      
      // Remove event listeners for links and buttons
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .interactive');
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onLinkMouseEnter);
        el.removeEventListener('mouseleave', onLinkMouseLeave);
      });
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setVisible(true);
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };
    
    const onLinkMouseEnter = () => {
      setLinkHovered(true);
    };
    
    const onLinkMouseLeave = () => {
      setLinkHovered(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const cursorVariants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      opacity: visible ? 1 : 0,
      height: 32,
      width: 32,
      backgroundColor: "rgba(46, 125, 50, 0.5)",
      mixBlendMode: "normal" ,
    },
    clicked: {
      height: 14,
      width: 14,
      x: position.x - 7,
      y: position.y - 7,
      backgroundColor: "rgba(46, 125, 50, 0.9)",
    },
    hovered: {
      height: 48,
      width: 48,
      x: position.x - 24,
      y: position.y - 24,
      backgroundColor: "rgba(46, 125, 50, 0.3)",
      mixBlendMode: "difference" ,
    }
  };

  return (
    <motion.div
      className="cursor hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={cursorVariants}
      animate={
        clicked 
          ? "clicked" 
          : linkHovered 
            ? "hovered" 
            : "default"
      }
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
      style={{
        originX: 0.5,
        originY: 0.5,
      }}
    >
      {linkHovered && (
        <motion.div 
          className="h-full w-full flex items-center justify-center text-white"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <i className="fas fa-arrow-right text-xs"></i>
        </motion.div>
      )}
    </motion.div>
  );
}

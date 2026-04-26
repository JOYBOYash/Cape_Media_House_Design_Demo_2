import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger navbar change after scrolling past hero section slightly
      if (window.scrollY > window.innerHeight * 0.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Hide navbar near the bottom (in the footer area)
      const scrollBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      if (scrollBottom < window.innerHeight * 0.8) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 top-0 px-6 md:px-12 flex justify-between items-center text-[#0d0907] uppercase text-xs md:text-sm font-semibold tracking-wider transition-all duration-500 ease-in-out ${scrolled ? 'py-4 bg-transparent' : 'py-6 md:py-8 bg-transparent'} ${hideNav ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
        <div className="flex items-center gap-2">
          <img 
            src="https://www.dropbox.com/scl/fi/h56idf8i4byikufi7jcgs/CAPE_L.png?rlkey=ylh612ewemo0kkook9ca9f5zg&raw=1" 
            alt="Cape Media House Logo" 
            className={`w-auto object-contain transition-all duration-500 origin-left ${scrolled ? 'h-10' : 'h-14 md:h-20'}`}
          />
        </div>
        
        <div className={`hidden md:flex items-center gap-8 transition-all duration-500 absolute left-1/2 -translate-x-1/2 ${scrolled ? 'opacity-0 invisible translate-y-[-20px]' : 'opacity-100 visible translate-y-0'}`}>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#philosophy" className="hover:text-primary transition-colors">Philosophy</a>
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center gap-4 md:gap-8">
          <div className={`${(!scrolled) ? 'hidden md:block' : 'block'} transition-opacity duration-300`}>
            <a href="#contact" className="btn-shine inline-block bg-accent text-[#0d0907] px-6 py-2.5 rounded-full font-bold hover:bg-primary hover:text-white transition-colors uppercase">
              Let's Talk
            </a>
          </div>
          
          <button 
            onClick={() => setMenuOpen(true)}
            className={`${scrolled ? 'opacity-100 visible translate-x-0' : 'md:opacity-0 md:invisible md:translate-x-4'} transition-all duration-500 hover:text-primary`}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#0d0907] text-[#f8f8ff] flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setMenuOpen(false)} 
              className="absolute top-8 right-6 md:right-12 text-[#f8f8ff] hover:text-primary transition-colors"
            >
              <X size={40} strokeWidth={1.5} />
            </button>
            
            <div className="flex flex-col gap-8 text-center text-5xl md:text-7xl font-black font-heading uppercase tracking-tighter w-full max-w-2xl px-6">
              <motion.a onClick={() => setMenuOpen(false)} initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.3}} href="#services" className="hover:text-primary hover:scale-105 transition-all duration-300">Services</motion.a>
              <motion.a onClick={() => setMenuOpen(false)} initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.4}} href="#philosophy" className="hover:text-primary hover:scale-105 transition-all duration-300">Philosophy</motion.a>
              <motion.a onClick={() => setMenuOpen(false)} initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.5}} href="#work" className="hover:text-primary hover:scale-105 transition-all duration-300">Work</motion.a>
              <motion.a onClick={() => setMenuOpen(false)} initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.6}} href="#contact" className="hover:text-primary hover:scale-105 transition-all duration-300">Contact</motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

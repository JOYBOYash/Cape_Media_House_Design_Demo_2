import React, { useState, MouseEvent } from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const interactiveTextStyle = {
    backgroundImage: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(13, 9, 7, 1) 0%, rgba(13, 9, 7, 0.6) 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent'
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20 px-6 md:px-12 bg-background"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4" type="video/mp4" />
      </video>

      {/* Background radial gradient simulating subtle focus */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(139, 49, 255, 0.15) 0%, transparent 60%)' }}></div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col pt-12 md:pt-0">
        
        {/* WE DON'T DO MARKETING line */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center text-center md:text-left gap-4 md:gap-8 w-full relative">
          <motion.h1 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[12vw] sm:text-[14vw] md:text-[8vw] lg:text-[8.5vw] leading-[0.85] font-black tracking-tighter w-full"
          >
            <span style={interactiveTextStyle} className="transition-all duration-300">WE DON'T DO</span><br className="hidden md:block"/>
            <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap md:flex-nowrap">
              <span className="text-primary">MARKETING.</span>
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-[30vw] md:w-[24vw] h-[15vw] md:h-[8vw] rounded-2xl overflow-hidden shrink-0 mt-2 md:mt-0"
              >
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop" alt="Abstract bold creation" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </motion.div>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-4 mt-2 md:mt-0 flex-wrap md:flex-nowrap">
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-[30vw] md:w-[24vw] h-[15vw] md:h-[8vw] rounded-2xl overflow-hidden shrink-0 mt-2 md:mt-0 hidden sm:block"
              >
                <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop" alt="Culture creation" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </motion.div>
              <span style={interactiveTextStyle} className="transition-all duration-300">WE CREATE</span>
            </div>
            <div className="text-center md:text-right mt-2 md:mt-0 text-primary">
              CULTURE
            </div>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 border-t border-[#0d0907]/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          <p className="max-w-md text-foreground/70 font-medium text-lg leading-snug">
            Bold stories. Radical creativity. Real impact. <br/> We wear the cape so your brand can fly.
          </p>
          <div className="flex gap-6 items-center uppercase text-sm font-bold tracking-widest">
            <a href="#work" className="hover:text-primary transition-colors flex items-center gap-2 group">
              View Our Work
              <div className="w-8 h-[2px] bg-foreground group-hover:bg-primary transition-colors origin-left scale-x-100"></div>
            </a>
            <a href="#philosophy" className="hover:text-primary transition-colors flex items-center gap-2 group">
              Our Philosophy
              <div className="w-8 h-[2px] bg-foreground group-hover:bg-primary transition-colors origin-left scale-x-100"></div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

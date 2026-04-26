import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Superpowers() {
  const superpowers = [
    { 
      name: "CREATIVE", 
      desc: "Campaigns that don't just interrupt — they captivate. Visual storytelling, concept ideation, branding, and copy.", 
      img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1200&auto=format&fit=crop",
      bgColor: "bg-[#f8f8ff]", 
      textColor: "text-[#0d0907]" 
    },
    { 
      name: "MEDIA", 
      desc: "Right message, right person, right moment. Data-driven media planning, paid social, SEO/SEM, and analytics.", 
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
      bgColor: "bg-[#f8f8ff]", 
      textColor: "text-[#0d0907]" 
    },
    { 
      name: "TECHNOLOGY", 
      desc: "Immersive digital experiences, high-performance web development, UI/UX, and AI tools.", 
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
      bgColor: "bg-[#f8f8ff]", 
      textColor: "text-[#0d0907]" 
    },
    { 
      name: "PRODUCTION", 
      desc: "Cinema-quality content at brand speed. Video, photography, motion, and reels.", 
      img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
      bgColor: "bg-[#f8f8ff]", 
      textColor: "text-[#0d0907]" 
    },
  ];

  const scrollTrackerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: trackerProgress } = useScroll({
    target: scrollTrackerRef,
    offset: ["start end", "start start"]
  });

  const reimaginedColor = useTransform(trackerProgress, [0, 1], ["#f8f8ff", "#E6Fa05"]);
  const reimaginedScale = useTransform(trackerProgress, [0, 1], [1, 1.15]);
  const tipOpacity = useTransform(trackerProgress, [0, 0.5], [1, 0]);

  return (
    <section id="services" className="relative w-full z-10">
      {/* Intro Section - First Sticky Panel */}
      <div 
        className="sticky top-0 h-screen w-full bg-primary text-background flex flex-col justify-center items-center px-6 overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#0d0907 1px, transparent 1px), linear-gradient(90deg, #0d0907 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] font-black tracking-tighter text-center w-full uppercase text-background"
          >
            Digital Marketing<br/>
            <motion.span style={{ color: reimaginedColor, scale: reimaginedScale, display: 'inline-block' }}>
              Re-imagined.
            </motion.span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 text-center max-w-2xl font-semibold text-lg md:text-xl text-background opacity-90"
          >
            From initial strategy to launch and ongoing refinement, we design and develop experiences built to lead, evolve, and move with your business.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ opacity: tipOpacity }}
            className="absolute -bottom-24 md:-bottom-32 flex flex-col items-center gap-4 text-background/80"
          >
            <span className="uppercase tracking-widest text-xs font-bold font-mono">Scroll for Super Powers</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="bg-background/20 backdrop-blur-sm p-3 rounded-full border border-background/20"
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tracker Block for Scroll Effects */}
      <div ref={scrollTrackerRef} className="h-[100vh] w-full" />

      {/* Superpowers Sticky Stack */}
      {superpowers.map((power, idx) => (
        <div
          key={idx}
          className={`sticky top-0 h-[100svh] w-full flex flex-col justify-center items-center px-6 md:px-12 ${power.bgColor} ${power.textColor} shadow-2xl border-t border-black/10 overflow-hidden relative`}
          style={{ zIndex: idx + 2 }}
        >
          {power.bgColor !== 'bg-[#f8f8ff]' && (
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(#0d0907 1px, transparent 1px), linear-gradient(90deg, #0d0907 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          )}
          {/* Diagonal shade */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0" style={{ background: 'linear-gradient(135deg, transparent 50%, rgba(13, 9, 7, 0.04) 50%)' }}></div>

          {/* Accent light behind image */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 aspect-square bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-8 items-center relative z-10">
            <div className="flex flex-col items-start lg:col-span-5 xl:col-span-5 lg:pr-8 xl:pr-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="btn-shine inline-block bg-[#0d0907] text-[#f8f8ff] px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest mb-6 md:mb-8"
              >
                #SuperPower
              </motion.div>

              <motion.h4 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-[12vw] sm:text-[10vw] lg:text-[4.5vw] xl:text-[5vw] font-black uppercase leading-[0.85] mb-6 md:mb-10 flex items-center gap-3 md:gap-4 tracking-tighter w-full"
              >
                <span className="text-primary block text-[10vw] lg:text-[4vw] xl:text-[4.5vw] font-sans scale-y-[1.2] transform origin-center">/</span>
                <span className="break-words pt-1">{power.name}</span>
              </motion.h4>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-2xl lg:text-2xl xl:text-3xl font-medium leading-snug w-full opacity-90 border-l-2 border-primary/30 pl-6"
              >
                {power.desc}
              </motion.p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-[#0d0907]/5 rounded-3xl overflow-hidden relative shadow-xl"
              >
                <img src={power.img} alt={power.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

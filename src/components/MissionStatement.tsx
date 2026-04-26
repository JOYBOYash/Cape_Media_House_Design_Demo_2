import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useInView, animate } from 'motion/react';

function Counter({ from, to, duration, delay, suffix, onComplete }: any) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      let animationFrame: number;

      const animateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp + delay * 1000;
        
        if (timestamp < startTime) {
          animationFrame = requestAnimationFrame(animateCounter);
          return;
        }

        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        // easeOutQuart
        const easeOut = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.round(from + (to - from) * easeOut));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animateCounter);
        } else {
          if (onCompleteRef.current) {
            onCompleteRef.current();
          }
        }
      };

      animationFrame = requestAnimationFrame(animateCounter);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [from, to, duration, delay, inView]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export default function MissionStatement() {
  const [countersFinished, setCountersFinished] = useState([false, false, false]);

  const handleComplete = useCallback((index: number) => {
    setCountersFinished(prev => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  }, []);

  const statement = [
    { text: "IDEAS THAT", filled: true },
    { text: "MOVE PEOPLE", filled: true },
    { text: "CHANGE", filled: true },
    { text: "EVERYTHING.", filled: true },
    { text: "WE WEAR", filled: false },
    { text: "THE CAPE SO", filled: false },
    { text: "YOUR BRAND", filled: false },
    { text: "CAN FLY.", filled: false },
  ];

  const floatVars = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: [0, -15, 0],
      opacity: 1,
      transition: {
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        },
        opacity: { duration: 1 }
      }
    }
  };

  return (
    <section className="relative py-32 md:py-48 px-6 bg-background">
      {/* Abstract floating elements simulating the images in reference */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ margin: "-50px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-[5%] left-[5%] w-48 h-64 md:w-64 md:h-80 rounded-xl overflow-hidden hidden lg:block cursor-pointer z-0"
      >
        <motion.div variants={floatVars} initial="initial" animate="animate" whileHover={{ scale: 1.05 }} className="w-full h-full">
          <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop" alt="Abstract 1" className="w-full h-full object-cover transition-transform hover:scale-110 duration-700" />
        </motion.div>
      </motion.div>

      {/* New Middle Left Image */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ margin: "-50px" }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="absolute top-[35%] left-[12%] w-32 h-48 md:w-48 md:h-64 rounded-xl overflow-hidden hidden lg:block cursor-pointer z-0"
      >
        <motion.div variants={floatVars} initial="initial" animate="animate" whileHover={{ scale: 1.05 }} style={{ animationDelay: '1s' }} className="w-full h-full">
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop" alt="Abstract 1b" className="w-full h-full object-cover transition-transform hover:scale-110 duration-700" />
        </motion.div>
      </motion.div>

      {/* New Top Right Image */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ margin: "-50px" }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="absolute top-[8%] right-[5%] w-32 h-48 md:w-48 md:h-64 rounded-xl overflow-hidden hidden lg:block cursor-pointer z-0"
      >
        <motion.div variants={floatVars} initial="initial" animate="animate" whileHover={{ scale: 1.05 }} style={{ animationDelay: '1.5s' }} className="w-full h-full">
          <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop" alt="Abstract 2b" className="w-full h-full object-cover transition-transform hover:scale-110 duration-700" />
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ margin: "-50px" }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        className="absolute top-[40%] right-[12%] w-40 h-56 md:w-56 md:h-72 rounded-xl overflow-hidden hidden lg:block cursor-pointer z-0"
      >
        <motion.div variants={floatVars} initial="initial" animate="animate" whileHover={{ scale: 1.05 }} style={{ animationDelay: '2s' }} className="w-full h-full">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" alt="Abstract 2" className="w-full h-full object-cover transition-transform hover:scale-110 duration-700" />
        </motion.div>
      </motion.div>


      <motion.div 
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center text-center"
      >
        <h2 className="text-[6vw] md:text-[4.5vw] lg:text-[4vw] leading-[1.1] font-black tracking-tighter flex flex-col items-center pointer-events-none mb-32 z-10 relative">
          {statement.map((line, idx) => (
            <motion.span 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={line.filled ? "text-foreground" : "text-stroke-opacity hover:text-foreground hover:text-stroke-none pointer-events-auto transition-colors duration-500 relative z-20"}
            >
              {line.text}
            </motion.span>
          ))}
        </h2>

        {/* Emphasized Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10 w-full mt-8">
          <div className="flex flex-col items-center group">
            <span className="text-[15vw] md:text-[8vw] leading-none text-primary font-black font-heading tracking-tighter mb-4 group-hover:scale-110 transition-transform duration-500">
              <Counter from={0} to={7} duration={2} delay={0.2} suffix="+" onComplete={() => handleComplete(0)} />
            </span>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: countersFinished[0] ? 1 : 0, y: countersFinished[0] ? 0 : 10 }}
              transition={{ duration: 0.5 }}
              className="text-foreground uppercase tracking-[0.3em] text-sm font-bold opacity-70 border-b border-primary/30 pb-2 pointer-events-none"
            >
              Years Exp
            </motion.span>
          </div>
          
          <div className="flex flex-col items-center group">
            <span className="text-[15vw] md:text-[8vw] leading-none text-primary font-black font-heading tracking-tighter mb-4 group-hover:scale-110 transition-transform duration-500">
              <Counter from={0} to={150} duration={2.5} delay={0.2} suffix="+" onComplete={() => handleComplete(1)} />
            </span>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: countersFinished[1] ? 1 : 0, y: countersFinished[1] ? 0 : 10 }}
              transition={{ duration: 0.5 }}
              className="text-foreground uppercase tracking-[0.3em] text-sm font-bold opacity-70 border-b border-primary/30 pb-2 pointer-events-none"
            >
              Brands Served
            </motion.span>
          </div>
          
          <div className="flex flex-col items-center group">
            <span className="text-[15vw] md:text-[8vw] leading-none text-primary font-black font-heading tracking-tighter mb-4 group-hover:scale-110 transition-transform duration-500">
              <Counter from={0} to={98} duration={2} delay={0.2} suffix="%" onComplete={() => handleComplete(2)} />
            </span>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: countersFinished[2] ? 1 : 0, y: countersFinished[2] ? 0 : 10 }}
              transition={{ duration: 0.5 }}
              className="text-foreground uppercase tracking-[0.3em] text-sm font-bold opacity-70 border-b border-primary/30 pb-2 pointer-events-none"
            >
              Client Love
            </motion.span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

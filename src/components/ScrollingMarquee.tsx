import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

const Word = ({ word, idx, total, progress }: { word: string, idx: number, total: number, progress: MotionValue<number> }) => {
  // Stagger the start and end of each word's color transition.
  // We use a small window for each word to change from black to purple.
  const step = 1 / total;
  const start = idx * step;
  const end = start + step;

  const color = useTransform(progress, [start, end], ["#0d0907", "#8B31FF"]);

  return (
    <motion.span style={{ color }}>
      {word}
    </motion.span>
  );
};

export default function ScrollingMarquee() {
  const words = [
    "BOLD FIRST", "STRATEGY + SOUL", "CULTURE-LED", "NEW BRAND LAUNCHES",
    "SOCIAL CAMPAIGNS", "PERFORMANCE MEDIA", "INFLUENCER EXPERIENCES", "DIGITAL IMMERSION", "CREATIVE STRATEGY"
  ];

  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="philosophy" ref={containerRef} className="bg-accent relative z-20 w-full h-[300vh]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#0d0907 1px, transparent 1px), linear-gradient(90deg, #0d0907 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-[1500px] mx-auto text-center relative z-20 w-full flex items-center justify-center">
          <h2 className="font-black text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] tracking-tighter uppercase text-center flex flex-wrap justify-center content-center">
             {words.map((word, idx) => (
              <React.Fragment key={idx}>
                <Word word={word} idx={idx} total={words.length} progress={scrollYProgress} />
                {idx < words.length - 1 && <span className="text-[#0d0907] opacity-30 mx-2 md:mx-4">/</span>}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}


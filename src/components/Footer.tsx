import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Plus } from 'lucide-react';

const faqs = [
  { question: "What's the typical timeline?", answer: "Most full brand and web experiences launch in 6-8 weeks, depending on the scope and complexity." },
  { question: "Do you work with startups?", answer: "Absolutely. We partner with visionaries at every stage, from seed funding to enterprise level." },
  { question: "What is the investment?", answer: "Our projects typically start at $10k. We customize our approach based on your specific business goals." },
  { question: "Where are you located?", answer: "We operate globally but are proudly rooted in India. We collaborate with clients seamlessly across time zones." }
];

const FAQItem = ({ faq, isOpen, onClick }: { faq: typeof faqs[0], isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="flex flex-col border-b border-foreground/10 py-4 cursor-pointer relative" onClick={onClick}>
      <div className="flex justify-between items-center group">
        <h4 className="font-bold text-[15px] group-hover:text-primary transition-colors select-none pr-8 relative z-20">{faq.question}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 relative z-20 transition-colors ${isOpen ? 'text-primary' : 'text-foreground/50 group-hover:text-primary'}`}
        >
          <Plus size={20} />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-[calc(100%+2rem)] -ml-4 z-50 bg-background/95 backdrop-blur-md border border-foreground/10 shadow-2xl p-6 mt-2 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="opacity-80 text-[13px] leading-relaxed select-text">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const legendaryColor = useTransform(scrollYProgress, [0.3, 0.6], ["#0d0907", "#8B31FF"]);

  return (
    <footer id="contact" ref={containerRef} className="bg-background text-foreground relative overflow-hidden min-h-screen flex flex-col justify-between pt-32">
      
      <motion.div 
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-50px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative z-10 flex-grow"
      >
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center">
          <h2 className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.8] font-black tracking-tighter text-center uppercase mb-8 z-10">
            Ready to be <br/>
            <motion.span style={{ color: legendaryColor, display: 'inline-block' }}>
              Legendary?
            </motion.span>
          </h2>
          
          <button className="btn-shine bg-accent text-[#0d0907] px-8 py-4 rounded-full font-bold uppercase tracking-wider text-lg hover:bg-primary hover:text-white transition-colors mt-6 mb-24 hover:scale-105 active:scale-95 duration-300 z-10 shadow-xl border border-transparent">
            Let's Build Something Wild
          </button>
        </div>

        {/* Short FAQ Section */}
        <div className="w-full max-w-4xl mx-auto px-6 mb-32 z-10 text-left">
          <h3 className="text-sm font-bold uppercase tracking-widest text-center opacity-50 mb-12">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 relative w-full">
            {faqs.map((faq, idx) => (
              <FAQItem 
                key={idx} 
                faq={faq} 
                isOpen={openFaqIndex === idx} 
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)} 
              />
            ))}
          </div>
        </div>

        {/* Reach Us Out Section */}
        <div className="w-full bg-primary text-white py-24 md:py-32 mb-24 z-20 overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10 flex flex-col items-center justify-center">
            <h3 className="text-xl md:text-3xl font-black uppercase tracking-widest mb-6 opacity-90 mt-4">Reach Us Out Here</h3>
            <a href="mailto:capemediahouse@gmail.com" className="text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[4vw] font-black tracking-tighter hover:text-accent transition-colors break-words text-center">
              capemediahouse@gmail.com
            </a>
          </div>
        </div>

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(13, 9, 7, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 9, 7, 1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-foreground/10 pt-16 pb-24 mt-auto relative z-10">
          <div className="flex flex-col gap-6 md:col-span-1">
            <div className="flex items-center gap-2">
              <img 
                src="https://www.dropbox.com/scl/fi/h56idf8i4byikufi7jcgs/CAPE_L.png?rlkey=ylh612ewemo0kkook9ca9f5zg&raw=1" 
                alt="Cape Media House Logo" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sm opacity-60 mt-4 md:mt-24">
              © 2025 Cape Media House.<br/>All rights reserved.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-widest text-foreground">
            <h4 className="opacity-50 text-xs mb-2">Navigation</h4>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#philosophy" className="hover:text-primary transition-colors">Philosophy</a>
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-widest text-foreground">
            <h4 className="opacity-50 text-xs mb-2">Legal</h4>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>

          <div className="flex flex-col gap-4 text-foreground">
            <h4 className="opacity-50 text-xs font-semibold uppercase tracking-widest mb-2">Planning a Project?</h4>
            <p className="text-sm opacity-80 mb-4 leading-relaxed">
              Get instant access to our strategy planner + best practices for driving your brand forward.
            </p>
            <div className="flex relative border-b border-foreground/30 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none w-full text-foreground placeholder:text-foreground/30 text-sm focus:ring-0"
              />
              <button className="text-primary hover:text-accent transition-colors absolute right-0 bottom-2">
                <ArrowRight size={20} />
              </button>
            </div>
            <p className="text-xs opacity-40 mt-2">
              Made with 💜 in India.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

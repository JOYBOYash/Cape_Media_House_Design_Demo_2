import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsGallery() {
  const projects = [
    { title: "The Purple Revolution", category: "Brand Launch", desc: "A major brand launch reshaping the digital landscape.", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop", className: "md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-0" },
    { title: "Viral at Scale", category: "Social Campaign", desc: "A massive social campaign generating millions of impressions.", img: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=800&auto=format&fit=crop", className: "col-span-1 min-h-[300px] md:min-h-0" },
    { title: "10x ROAS Story", category: "Performance Media", desc: "Fusing data with creativity for record-breaking growth.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", className: "col-span-1 min-h-[300px] md:min-h-0" },
    { title: "Creator Economy Play", category: "Influencer Marketing", desc: "Authentic outreach strategies leveraging top-tier creators.", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop", className: "md:col-span-2 min-h-[300px] md:min-h-0" },
    { title: "Immersive Digital Launch", category: "Web Experience", desc: "A high-end web experience setting new industry standards.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop", className: "md:col-span-1 lg:col-span-2 min-h-[300px] md:min-h-0" },
    { title: "Zomato & HDFC", category: "Enterprise Scale", desc: "Strategic partnerships building long-term consumer trust.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop", className: "md:col-span-1 lg:col-span-2 min-h-[300px] md:min-h-0" }
  ];

  return (
    <section id="work" className="bg-background py-32 px-6 relative z-30">
      <motion.div 
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px] mx-auto text-center mb-24 relative"
      >
         {/* Background radial gradient */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(13, 9, 7, 0.2) 0%, transparent 70%)' }}></div>
        
        <h2 className="text-[9vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] font-black tracking-tighter uppercase relative z-10">
          Scaling The <br/>Next Wave Of <br/><span className="text-stroke-primary">Legendary Brands</span>
        </h2>
        <p className="mt-12 text-sm uppercase tracking-widest font-bold opacity-70">
          Select partners and brands we've built alongside
        </p>
      </motion.div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 md:auto-rows-[300px]">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 1.0, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-3xl bg-[#0d0907] flex flex-col justify-end shadow-lg ${project.className}`}
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] opacity-70 group-hover:opacity-60"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0907]/90 via-[#0d0907]/30 to-transparent transition-opacity duration-500"></div>
              <div className="absolute inset-0 border border-white/10 rounded-3xl z-20 pointer-events-none"></div>
              
              <div className="absolute top-6 left-6 flex justify-between w-[calc(100%-3rem)] z-20">
                <div className="bg-background/20 backdrop-blur-md border border-white/10 px-4 h-8 flex items-center justify-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-background rounded-full">
                  {project.category}
                </div>
                <div className="bg-accent text-[#0d0907] w-10 h-10 rounded-full flex items-center justify-center shadow-xl overflow-hidden relative">
                  {/* Arrow that flies out */}
                  <ArrowUpRight size={20} className="absolute inset-auto translate-x-0 translate-y-0 group-hover:translate-x-[150%] group-hover:-translate-y-[150%] transition-transform duration-500 ease-in-out" strokeWidth={2.5} />
                  {/* Arrow that flies in */}
                  <ArrowUpRight size={20} className="absolute inset-auto -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-in-out" strokeWidth={2.5} />
                </div>
              </div>

              <div className="relative z-20 p-6 md:p-8">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl md:text-3xl xl:text-4xl font-black uppercase tracking-tighter text-background">{project.title}</h3>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-sm md:text-base opacity-0 group-hover:opacity-90 text-background/80 leading-relaxed font-medium pt-3 transition-opacity duration-500 delay-100">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Client Full Width Banner */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-primary py-24 md:py-32 px-6 mt-32 border-t border-black/10 z-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-white font-black uppercase text-4xl md:text-5xl lg:text-5xl tracking-tighter mb-16 md:mb-24 leading-none">
            Trusted By <br className="md:hidden" /> Visionaries At
          </h3>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center items-center gap-12 md:gap-x-16 md:gap-y-12 opacity-90"
          >
            {[
              { name: 'Zomato', logo: 'https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png' },
              { name: 'Myntra', logo: 'https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png' },
              { name: 'Urban Company', logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2022/10/urban-company-logo-freelogovectors.net_.png' },
              { name: 'Nykaa', logo: 'https://companieslogo.com/img/orig/NYKAA.NS_BIG-05a25f7d.png?t=1752557278' },
              { name: 'Mamaearth', logo: 'https://vectorseek.com/wp-content/uploads/2023/10/Mamaearth-Logo-Vector.svg-.png' },
              { name: 'Lenskart', logo: 'https://static.lenskart.com/media/desktop/img/menu/logo.png' },
              { name: 'HDFC Bank', logo: 'https://wallpapercave.com/wp/wp10393300.png' },
              { name: 'Sorted360', logo: 'https://sorted360.com/wp-content/uploads/2021/11/logo-6-500x242.png' }
            ].map((brand) => (
              <motion.div
                key={brand.name}
                whileHover={{ scale: 1.1 }}
                className="w-24 md:w-36 h-12 flex items-center justify-center transition-transform duration-300"
              >
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  className="max-w-full max-h-full object-contain brightness-0 invert"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      target.nextElementSibling.classList.remove('hidden');
                    }
                  }}
                />
                <span className="hidden font-bold uppercase tracking-wider text-sm text-white text-center">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

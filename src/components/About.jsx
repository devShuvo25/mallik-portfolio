import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Lightbulb, Zap, Rocket, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding py-24 md:py-40">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-2xl lg:text-5xl font-black mb-8 text-gradient uppercase font-display break-words tracking-tighter">
            ABOUT<span className="text-accent">/</span>ME<span className="text-accent">.</span>
          </h2>
          <div className="space-y-6 md:space-y-10 text-base md:text-xl text-slate-400 leading-relaxed font-medium uppercase tracking-widest">
            <p>
              I BUILD DIGITAL EXPERIENCES THAT MERGE FUNCTIONALITY WITH CUTTING-EDGE DESIGN. AS A FULL STACK DEVELOPER, MY FOCUS IS ON CREATING SCALABLE APPLICATIONS THAT DELIVER PERFORMANCE AND VALUE.
            </p>
            <p>
              SPECIALIZED IN THE MERN STACK, I THRIVE IN BRIDGING THE GAP BETWEEN COMPLEX BACKEND ARCHITECTURE AND SEAMLESS USER INTERFACES.
            </p>
            <p className="border-l-4 border-accent pl-6 md:pl-8 py-3 text-white font-black bg-white/5 rounded-r-2xl">
              FULLY EQUIPPED FOR GLOBAL REMOTE COLLABORATION.
            </p>
          </div>

          <div className="mt-12 pt-10 border-t border-white/5">
            <h4 className="text-[10px] font-black tracking-[0.4em] text-accent uppercase mb-6 flex items-center gap-3">
              <GraduationCap size={14} /> EDUCATION
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-white font-black text-sm md:text-md tracking-tighter uppercase font-display">
                  Bachelor of Urban and Regional Planning
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1">
                  <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    KUET, Khulna, Bangladesh
                  </p>
                  <span className="hidden sm:block w-1 h-1 bg-white/20 rounded-full" />
                  <p className="text-accent/60 text-[10px] font-black tracking-widest uppercase">
                    2024 - PRESENT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-full"
        >
          {[
            { icon: <Globe className="w-8 h-8 text-accent" />, title: 'GLOBAL READY', desc: 'Remote collaboration across time zones' },
            { icon: <Zap className="w-8 h-8 text-accent" />, title: 'FAST ADAPTATION', desc: 'Swiftly mastering new tech ecosystems' },
            { icon: <Lightbulb className="w-8 h-8 text-accent" />, title: 'PROBLEM FIXER', desc: 'Elegant solutions for complex logic' },
            { icon: <Rocket className="w-8 h-8 text-accent" />, title: 'RESULT DRIVEN', desc: 'Delivering production-grade excellence' },
          ].map((item, idx) => (
            <motion.div 
               key={idx} 
               initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
               whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
               animate={{
                 y: [0, -15, 0],
               }}
               transition={{ 
                 y: {
                   duration: 8 + idx, // Increased for a slower, breathable feel
                   repeat: Infinity,
                   ease: [0.45, 0, 0.55, 1],
                   delay: idx * 0.4
                 },
                 opacity: { duration: 1, delay: idx * 0.15 },
                 filter: { duration: 1, delay: idx * 0.15 }
               }}
               viewport={{ once: true }}
               whileHover={{ 
                 y: -10, 
                 scale: 1.05,
                 transition: { duration: 0.4 } 
               }}
               className="glass-card p-8 md:p-10 flex flex-col items-start text-left group hover:bg-white/[0.05] transition-all rounded-[3rem] border-white/5"
            >
              <div className="mb-6 md:mb-8 p-3 md:p-4 bg-white/5 rounded-2xl group-hover:bg-accent/10 transition-colors duration-500">{item.icon}</div>
              <h3 className="font-black text-white text-md mb-3 md:mb-4 tracking-tighter uppercase font-display break-words group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-[10px] md:text-sm text-slate-400 font-bold uppercase tracking-[0.2em] leading-loose">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

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
          <h2 className="text-xl md:text-2xl lg:text-5xl font-black mb-8 uppercase font-display break-words tracking-tighter" style={{ color: 'var(--text-primary)' }}>
            ABOUT<span style={{ color: 'var(--accent-color)' }}>/</span>ME<span style={{ color: 'var(--accent-color)' }}>.</span>
          </h2>
          <div className="space-y-6 md:space-y-10 text-base md:text-xl leading-relaxed font-medium uppercase tracking-widest" style={{ color: 'var(--text-tertiary)' }}>
            <p>
              I BUILD DIGITAL EXPERIENCES THAT MERGE FUNCTIONALITY WITH CUTTING-EDGE DESIGN. AS A FULL STACK DEVELOPER, MY FOCUS IS ON CREATING SCALABLE APPLICATIONS THAT DELIVER PERFORMANCE AND VALUE.
            </p>
            <p>
              SPECIALIZED IN THE MERN STACK, I THRIVE IN BRIDGING THE GAP BETWEEN COMPLEX BACKEND ARCHITECTURE AND SEAMLESS USER INTERFACES.
            </p>
            <p className="pl-6 md:pl-8 py-3 font-black rounded-r-2xl" style={{ borderLeft: '4px solid var(--accent-color)', color: 'var(--text-primary)', backgroundColor: 'var(--glass-bg)' }}>
              FULLY EQUIPPED FOR GLOBAL REMOTE COLLABORATION.
            </p>
          </div>

          <div className="mt-12 pt-10" style={{ borderTop: '1px solid var(--border-color)' }}>
            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase mb-6 flex items-center gap-3" style={{ color: 'var(--accent-color)' }}>
              <GraduationCap size={14} /> EDUCATION
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-black text-sm md:text-md tracking-tighter uppercase font-display" style={{ color: 'var(--text-primary)' }}>
                  Bachelor of Urban and Regional Planning
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1">
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-tertiary)' }}>
                    KUET, Khulna, Bangladesh
                  </p>
                  <span className="hidden sm:block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--border-color)' }} />
                  <p className="text-[10px] font-black tracking-widest uppercase" style={{ color: 'var(--accent-color)', opacity: 0.6 }}>
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
            { icon: <Globe className="w-8 h-8" style={{ color: 'var(--accent-color)' }} />, title: 'GLOBAL READY', desc: 'Remote collaboration across time zones' },
            { icon: <Zap className="w-8 h-8" style={{ color: 'var(--accent-color)' }} />, title: 'FAST ADAPTATION', desc: 'Swiftly mastering new tech ecosystems' },
            { icon: <Lightbulb className="w-8 h-8" style={{ color: 'var(--accent-color)' }} />, title: 'PROBLEM FIXER', desc: 'Elegant solutions for complex logic' },
            { icon: <Rocket className="w-8 h-8" style={{ color: 'var(--accent-color)' }} />, title: 'RESULT DRIVEN', desc: 'Delivering production-grade excellence' },
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
               className="p-8 md:p-10 flex flex-col items-start text-left group transition-all rounded-[3rem]"
               style={{
                 backgroundColor: 'var(--glass-bg)',
                 backdropFilter: 'blur(12px)',
                 border: '1px solid var(--glass-border)',
               }}
               onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--glass-bg)'}
            >
              <div className="mb-6 md:mb-8 p-3 md:p-4 rounded-2xl group-hover:bg-accent/10 transition-colors duration-500" style={{ backgroundColor: 'var(--glass-bg)' }}>{item.icon}</div>
              <h3 className="font-black text-md mb-3 md:mb-4 tracking-tighter uppercase font-display break-words group-hover:text-accent transition-colors" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
              <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] leading-loose" style={{ color: 'var(--text-tertiary)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

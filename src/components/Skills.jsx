import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { 
    name: 'JavaScript', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#F7DF1E" d="M0 0h24v24H0z"/>
        <path d="M18.663 19.335c-.437.68-1.14 1.132-2.14 1.132-.96 0-1.74-.53-2.175-1.155l1.018-.6c.245.41.6.685 1.157.685.545 0 .914-.263.914-.725 0-.41-.305-.595-.91-.86l-1.1-.39c-.933-.404-1.57-.96-1.57-1.95 0-.895.84-1.55 1.762-1.55.765 0 1.25.26 1.71.74l-.74.6c-.343-.3-.591-.497-1.012-.497-.37 0-.71.185-.71.6 0 .33.205.51.7.72l1.1.48c1.1.47 1.63 1.05 1.63 2.05 0 1.1-.73 1.65-1.635 1.65zm-7.615.112c.16.29.35.48.58.62.3.16.63.24 1.01.24.41 0 .73-.08.97-.24.25-.17.38-.41.38-.72V10h1.16v8.43c0 .59-.16 1.07-.48 1.45-.44.5-1.15.8-1.96.8-.75 0-1.39-.18-1.84-.55-.44-.36-.66-.86-.81-1.6l1.01-.64z" fill="#000"/>
      </svg>
    ) 
  },
  { 
    name: 'React', 
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ) 
  },
  { 
    name: 'Next.js', 
    icon: (
      <svg viewBox="0 0 180 180" className="w-10 h-10">
        <mask id="next-mask" maskUnits="userSpaceOnUse" style={{maskType:'alpha'}}>
          <circle cx="90" cy="90" r="90" fill="black"/>
        </mask>
        <g mask="url(#next-mask)">
          <circle cx="90" cy="90" r="90" fill="black"/>
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.1836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white"/>
          <path d="M115.223 54H127.337V125.97H115.223V54Z" fill="white"/>
        </g>
      </svg>
    ) 
  },
  { 
    name: 'Node.js', 
    icon: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <path d="M128 32l-94.8 54.8v109.4L128 251l94.8-54.8V86.8L128 32zm82.8 157.4L128 238.4l-82.8-49V92.6L128 43.6l82.8 49v102.8z" fill="#339933"/>
        <path d="M128 64c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 112c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" fill="#339933"/>
      </svg>
    ) 
  },
  { 
    name: 'Express', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
        <path d="M7.4 17.5h.8v-3.8h2.3v-.6H8.2v-1.9H11v-.6H7.4v6.9zm4.2-.6l1-1.8 1.1 1.8h.9l-1.4-2.2 1.4-2.4h-.9L12.7 14l-1-1.6h-.9l1.4 2.2-1.4 2.3h.8zm5.5 1.5c-1 0-1.8-.8-1.8-1.8 0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c-.1 1-.9 1.8-1.8 1.8zm0-3c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zM5.5 14h.6c.6 0 1-.4 1-.9 0-.6-.4-.9-1-.9h-.6v1.8zm-.7.8h.7c.9 0 1.6-.7 1.6-1.6s-.7-1.6-1.6-1.6H4V18h.8v-3.2zm14.3.1c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm0 3c-1 0-1.8-.8-1.8-1.8 0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c-.1 1-.9 1.8-1.8 1.8z"/>
      </svg>
    ) 
  },
  { 
    name: 'MongoDB', 
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path d="M37 23.5c0 7.8-6.7 14.1-13 14.1s-13-6.3-13-14.1c0-4.6 2.3-8.8 6.1-11.4l6.9-4.1 6.9 4.1c3.8 2.6 6.1 6.8 6.1 11.4z" fill="#47a248"/>
        <path d="M24 6l6.9 4.1c3.8 2.6 6.1 6.8 6.1 11.4 0 3.3-1.2 6.4-3.2 8.7-1.1-3-2.1-7.1-2.1-11.2 0-.3 0-.7-.1-1L24 6z" fill="#3fa049"/>
        <path d="M24 37.6c-4.4 0-8.5-4-10.7-9.4 1.1 2.3 2.9 4.3 5.3 5.6 1.7.9 3.6 1.4 5.4 1.4V37.6z" fill="#47a248"/>
      </svg>
    ) 
  },
  { 
    name: 'Tailwind CSS', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#38bdf8" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ) 
  },
  { 
    name: 'Firebase', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#FFCA28" d="M3.89 15.672L6.255.461A.545.545 0 017.27.284l2.258 4.248L3.89 15.672zm.068.423l6.23-11.832 2.378 4.471-8.608 7.361zm16.152-.423L17.745.461a.545.545 0 00-1.015-.177L14.472 4.532l5.638 10.717zM12 4.743l2.006 3.844-2.006 1.714-2.006-1.714L12 4.743zm0 6.64l2.035-1.738.001.001 6.014 11.417a.545.545 0 01-.84.66L12 15.313 4.79 21.724a.545.545 0 01-.84-.66L9.964 9.645l2.036 1.738z"/>
      </svg>
    ) 
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding py-24 md:py-32 border-t border-white/5 bg-slate-950">
      <div className="mb-16 md:mb-24">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-5xl font-black mb-6 md:mb-8 text-gradient uppercase font-display tracking-tighter">
              SKILLS<span className="text-accent">.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-400 font-bold uppercase tracking-[0.4em]">
              OFFICIAL TOOLS OF THE TRADE.
            </p>
          </motion.div>
        </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ 
              duration: 0.8, 
              delay: idx * 0.05,
              ease: [0.16, 1, 0.3, 1]
            }}
            viewport={{ once: true, margin: "-5%" }}
            whileHover={{ 
              y: -15,
              scale: 1.02,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            className="glass-card p-8 md:p-12 flex flex-col items-center justify-center gap-6 md:gap-8 group hover:bg-white/[0.08] border-white/5 transition-all relative overflow-hidden rounded-[2rem] md:rounded-[3rem]"
          >
            <div className="relative z-10 p-3 md:p-6 bg-white/5 rounded-xl md:rounded-[2rem] group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500 shadow-2xl overflow-hidden">
               {/* Internal Glow on Hover */}
               <div className="absolute inset-0 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                {skill.icon}
              </div>
            </div>
            <h3 className="relative z-10 text-[10px] md:text-xs font-black text-slate-400 group-hover:text-white text-center tracking-widest uppercase font-display transition-colors break-words">
              {skill.name}
            </h3>
            
            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

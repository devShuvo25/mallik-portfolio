import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/dailyzone.png';
import project4 from '../assets/Screenshot_20-2-2026_17456_ecommerce-frontend-tau-lemon.vercel.app.jpeg';
import Magnetic from './Magnetic';
import { cn } from '../lib/utils';

const projects = [
  {
    id: 1,
    title: 'ELITE-EASE',
    description: 'A NEXT-GENERATION TECH RETAIL HUB FEATURING DYNAMIC PRODUCT FILTERING, 3D PREVIEWS, AND AN OPTIMIZED CHECKOUT PIPELINE.',
    tech: ['NEXT.JS', 'TS', 'TAILWIND', 'REDUX'],
    image: project4,
    live: 'https://ecommerce-frontend-tau-lemon.vercel.app',
    github: 'https://github.com/devShuvo25/EliteEase---Tech-E-Commerce-Website-Back-end',
  },
  {
    id: 2,
    title: 'THE DAILY DISH',
    description: 'A PREMIUM MARKETPLACE FOR HOME-COOKED MEALS WITH REAL-TIME PRE-ORDERING AND STRIPE SECURE PAYMENTS.',
    tech: ['REACT', 'NODE.JS', "MONGODB", 'STRIPE'],
    image: project1,
    live: 'https://the-daily-dish.netlify.app/',
    github: '#',
  },
  {
    id: 3,
    title: 'DAILY ZONE',
    description: "A modern full-stack web application that helps users track and manage daily tasks, habits, and productivity.",
    tech: ["REACT", "NODE.JS", "MONGODB", 'FIREBASE'],
    image: project3,
    live: 'https://dailyzone.netlify.app',
    github: '#',
  },
  {
    id: 4,
    title: 'GAME SPACE',
    description: 'A NEXT-GEN GAMING PLATFORM FEATURING VIBRANT GAME CARDS, NEON ACCENTS, AND A MINIMALIST INTERFACE.',
    tech: ['REACT', 'GSAP', 'FIREBASE'],
    image: project2,
    live: 'https://game-space-bd.netlify.app/games',
    github: '#',
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);


  return (
    <section id="projects" className="section-padding py-24 md:py-32" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-black mb-4 md:mb-6 uppercase font-display tracking-tighter" style={{ color: 'var(--text-primary)' }}>
            WORK<span style={{ color: 'var(--accent-color)' }}>.</span>
          </h2>
          <p className="text-base md:text-lg font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--text-tertiary)' }}>
            SELECTED PROJECTS DELIVERING HIGH VALUE.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        <AnimatePresence mode="popLayout">
          {visibleProjects?.map((project, idx) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative cursor-pointer flex flex-col h-full rounded-[2rem] overflow-hidden p-4"
              style={{ backgroundColor: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay with buttons */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                  <Magnetic strength={0.2}>
                    <a 
                      href={project.live} 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Prevents navigation to details
                      className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-accent transition-all"
                    >
                      <span>LIVE</span>
                      <ExternalLink size={14} />
                    </a>
                  </Magnetic>
                  
                  <Magnetic strength={0.2}>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()} // Prevents navigation to details
                      className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                    >
                      <span>CODE</span>
                      <Github size={14} />
                    </a>
                  </Magnetic>
                </div>
              </div>

              <div className="flex flex-col flex-grow px-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'var(--text-tertiary)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-black mb-3 uppercase tracking-tighter group-hover:text-accent transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                
                <p className="text-xs font-medium uppercase tracking-wider leading-relaxed mb-6 line-clamp-3" style={{ color: 'var(--text-tertiary)' }}>
                  {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5">
                   <div className="flex items-center justify-between text-[10px] font-black tracking-[0.2em] uppercase text-white/50 group-hover:text-accent transition-colors">
                    View Details
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                        <ExternalLink size={14} />
                    </motion.span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {projects.length > 3 && (
        <div className="mt-20 flex justify-center">
          <Magnetic strength={0.3}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowAll(!showAll);
              }}
              className="group flex flex-col items-center gap-4"
            >
              <div className="px-10 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-500 font-black text-xs tracking-[0.3em] uppercase">
                {showAll ? 'SHOW LESS' : 'SEE MORE WORK'}
              </div>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className={cn("text-accent transition-transform duration-500", showAll && "rotate-180")}
              >
                <ChevronDown size={24} />
              </motion.div>
            </button>
          </Magnetic>
        </div>
      )}
    </section>
  );
};

export default Projects;
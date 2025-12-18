import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import Magnetic from './Magnetic';
import { cn } from '../lib/utils';

const projects = [
  {
    title: 'LOCAL CHEF BAZAAR',
    description: 'A PREMIUM MARKETPLACE FOR HOME-COOKED MEALS WITH REAL-TIME PRE-ORDERING AND STRIPE SECURE PAYMENTS.',
    tech: ['MERN', 'STRIPE', 'FIREBASE'],
    image: project1,
    live: '#',
    github: '#',
  },
  {
    title: 'GAME SPACE',
    description: 'A NEXT-GEN GAMING PLATFORM FEATURING VIBRANT GAME CARDS, NEON ACCENTS, AND A MINIMALIST PREMIUM INTERFACE.',
    tech: ['REACT', 'GSAP', 'FIREBASE'],
    image: project2,
    live: 'https://game-space-bd.netlify.app/games',
    github: '#',
  },
];

const Projects = () => {
  const [activeIdx, setActiveIdx] = React.useState(null);

  return (
    <section id="projects" className="section-padding py-24 md:py-32 border-t border-white/5">
      <div className="mb-16 md:mb-24">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black mb-4 md:mb-6 text-gradient uppercase font-display break-words tracking-tighter">
              WORK<span className="text-accent">.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-400 font-bold uppercase tracking-[0.3em]">
              SELECTED PROJECTS DELIVERING HIGH VALUE.
            </p>
          </motion.div>
        </div>

      <div className="grid gap-20 lg:gap-32">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-10%" }}
            className="grid lg:grid-cols-12 gap-12 items-center"
          >
            <div 
              onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              className="group lg:col-span-7 relative aspect-video overflow-hidden rounded-[2rem] md:rounded-[3rem] cursor-pointer bg-white/5 border border-white/5"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover transition-transform duration-1000"
              />
              
              {/* Overlay with glass effect */}
              <div className={cn(
                "absolute inset-0 bg-black/40 backdrop-blur-md transition-all duration-500 flex items-center justify-center gap-6",
                activeIdx === idx ? "opacity-100 pointer-events-auto" : "opacity-0 lg:group-hover:opacity-100 pointer-events-none lg:group-hover:pointer-events-auto"
              )}>
                 <Magnetic strength={0.2}>
                   <a 
                     href={project.live} 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-accent transition-all transform hover:scale-105 shadow-2xl"
                   >
                    <span>LIVE</span>
                    <ExternalLink size={18} />
                  </a>
                 </Magnetic>
                 
                 <Magnetic strength={0.2}>
                   <a 
                     href={project.github}
                     target="_blank"
                     rel="noopener noreferrer" 
                     className="flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-2xl"
                   >
                    <span>CODE</span>
                    <Github size={18} />
                   </a>
                 </Magnetic>
              </div>
              
              {/* Parallax Label Tag */}
              <div className="absolute top-6 left-6 p-1 px-4 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-black tracking-widest text-white/50 group-hover:text-accent transition-colors">
                PROJECT {idx + 1}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <div className="flex gap-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold tracking-widest text-slate-500 uppercase px-4 py-1.5 bg-white/5 border border-white/5 rounded-full group-hover:border-accent/20 group-hover:text-accent transition-all duration-500">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white group-hover:text-accent transition-colors leading-[1.1] tracking-tighter font-display break-words">
                {project.title}
              </h3>
              <p className="text-slate-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em] leading-loose max-w-md">
                {project.description}
              </p>
              
              <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100px" }}
                 transition={{ duration: 1, delay: 0.5 }}
                 className="h-1 bg-accent/20 rounded-full group-hover:bg-accent transition-colors duration-500" 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

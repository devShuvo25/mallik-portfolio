import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';
import hero from '../assets/hero-removebg-preview (2).png'
import Magnetic from './Magnetic';

const Hero = ({ show }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 25;
    const y = (clientY - innerHeight / 2) / 25;
    setMousePosition({ x, y });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 lg:py-0"
      onMouseMove={handleMouseMove}
    >
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: Math.random() * 0.5, 
              x: Math.random() * 100 + "%", 
              y: "110%"
            }}
            animate={show ? { 
              y: "-10%",
              x: [null, (Math.random() - 0.5) * 200 + "%"],
              opacity: [0, 0.5, 0]
            } : {}}
            transition={{ 
              duration: Math.random() * 20 + 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-accent rounded-full blur-[1px]"
          />
        ))}
      </div>

      <div className="section-padding relative z-10 grid lg:grid-cols-2 gap-20 lg:gap-32 items-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={show ? "visible" : "hidden"}
          style={{ y: [0, -15, 0] }}
          transition={{
            y: {
              duration: 8,
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1],
            },
            ...containerVariants.visible.transition
          }}
          className="text-center lg:text-left"
        >
          <motion.span 
            variants={itemVariants} 
            className="text-[10px] md:text-sm font-black tracking-[0.5em] text-accent uppercase mb-6 block border border-accent/20 py-2 px-6 rounded-full bg-accent/2 w-fit mx-auto lg:mx-0"
          >
            Full Stack Web Developer
          </motion.span>
          
          <motion.div variants={itemVariants} className="mb-8 w-full max-w-full overflow-hidden">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter mb-4 text-gradient font-display break-words">
              SHUVO <br /> MALLIK<span className="text-accent">.</span>
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg font-medium text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed uppercase tracking-widest"
          >
            Developing high-performance, responsive <br className="hidden md:block" /> MERN stack applications for the global market.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 w-full"
          >
            <Magnetic strength={0.2}>
              <motion.a 
                href="#projects" 
                animate={{ 
                  boxShadow: ["0 0 0 0px rgba(0, 242, 255, 0)", "0 0 0 15px rgba(0, 242, 255, 0.05)", "0 0 0 0px rgba(0, 242, 255, 0)"] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="px-8 py-5 bg-white text-black rounded-full font-bold text-base transition-all transform hover:bg-accent hover:text-black active:scale-95 shadow-2xl flex items-center gap-2 w-full sm:w-auto justify-center tracking-normal"
              >
                PROJECTS
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </motion.a>
            </Magnetic>
            
            <Magnetic strength={0.3}>
              <a 
                href="https://drive.google.com/file/d/1skRkwiRIw-UZcK8Quc59kwqYcZL4OE8h/view?usp=drive_link" 
                download 
                className="px-8 py-5 border border-white/10 rounded-full text-xs font-black tracking-[0.2em] uppercase hover:bg-white/5 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                RESUME <Download size={16} />
              </a>
            </Magnetic>

            <Magnetic strength={0.4}>
              <a href="#contact" className="text-xs font-black tracking-[0.2em] uppercase hover:text-accent transition-colors flex items-center gap-2 group whitespace-nowrap">
                CONTACT <Mail size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Hero Portrait Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="relative w-full flex justify-center lg:justify-end lg:pr-12 order-first lg:order-last mb-12 lg:mb-0"
        >
          <div 
            className="relative z-10 w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px] aspect-square transition-all duration-700 pointer-events-none"
            style={{
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
            }}
          >
            <motion.img 
              src='https://i.ibb.co.com/pjgnfm26/Whats-App-Image-2025-12-21-at-15-18-34-937867e5-removebg-preview.png'
              alt="Shuvo Mallik" 
              style={{ scale: 1.2, x: -mousePosition.x / 2, y: -mousePosition.y / 2 }}
              className="w-full h-full object-contain transition-transform duration-700 pointer-events-none"
            />
          </div>
          {/* Decorative Elements */}
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[120px] pointer-events-none" 
          />
          <motion.div 
            animate={{ 
              x: [mousePosition.x * 2, mousePosition.x * 2 + 30, mousePosition.x * 2],
              y: [mousePosition.y * 2, mousePosition.y * 2 - 30, mousePosition.y * 2]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              x: [-mousePosition.x * 1.5, -mousePosition.x * 1.5 - 40, -mousePosition.x * 1.5],
              y: [-mousePosition.y * 1.5, -mousePosition.y * 1.5 + 40, -mousePosition.y * 1.5]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary-600/10 rounded-full blur-3xl" 
          />
        </motion.div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Hero;

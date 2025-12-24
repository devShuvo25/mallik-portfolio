import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 800; // 0.8 seconds - very fast
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 300); // Quick exit
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
      }}
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Background Decorative Element */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent/10 rounded-full blur-[120px]"
      />

      <div className="relative z-10 text-center w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-8"
        >
          <h2 className="text-sm md:text-xl lg:text-2xl font-black text-white tracking-[0.3em] md:tracking-[0.5em] uppercase font-display">
            SHUVO MALLIK<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="overflow-hidden h-[20vw] sm:h-[15vw] md:h-[10vw] lg:h-[8vw] flex items-center justify-center">
          <motion.span 
            className="text-[20vw] sm:text-[15vw] md:text-[10vw] lg:text-[8vw] font-black text-white leading-none tracking-tighter font-display"
          >
            {Math.round(count)}%
          </motion.span>
        </div>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${count}%` }}
          className="h-[2px] bg-accent mt-6 md:mt-8 mx-auto"
          style={{ maxWidth: '300px' }}
        />
      </div>

      {/* Modern Shutter Effect Elements */}
      <div className="absolute inset-0 pointer-events-none flex">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            exit={{ 
              scaleY: 1,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * 0.05 }
            }}
            style={{ originY: 1 }}
            className="flex-1 bg-white/5 border-r border-white/5 last:border-r-0"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Loader;

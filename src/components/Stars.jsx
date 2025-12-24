import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Stars = () => {
  const { theme } = useTheme();
  
  // Generate random stars with different sizes and positions
  const stars = [...Array(20)].map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  // Only show stars in dark mode
  if (theme !== 'dark') return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
            style={{
              position: 'absolute',
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              willChange: 'transform, opacity',
            }}
            className="bg-white rounded-full"
          >
            {/* Star glow effect */}
            <div 
              className="absolute inset-0 rounded-full blur-sm"
              style={{
                backgroundColor: 'var(--accent-color)',
                opacity: 0.5,
                transform: 'scale(2)',
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Stars;

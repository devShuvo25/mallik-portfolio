import React from 'react';
import { motion } from 'framer-motion';

const Stars = () => {
  // Generate random stars with different sizes and positions
  const stars = [...Array(20)].map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
            className="absolute inset-0 bg-accent/50 rounded-full blur-sm"
            style={{
              transform: 'scale(2)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Stars;

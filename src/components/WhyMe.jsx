import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Cloud, Users, Award, ShieldCheck, Zap } from 'lucide-react';

const reasons = [
  {
    icon: <Code className="w-8 h-8 text-accent" />,
    title: 'FULL STACK MASTERY',
    description: 'DEEP EXPERTISE IN THE MERN STACK AND MODERN DEVELOPMENT PARADIGMS FOR ROBUST APPS.',
  },
  {
    icon: <Cloud className="w-8 h-8 text-accent" />,
    title: 'REMOTE NATIVE',
    description: 'FLUID COLLABORATION ACROSS GLOBAL TIME ZONES WITH INDUSTRY-STANDARD REMOTE TOOLING.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: 'LOGICAL PRECISION',
    description: 'A RIGOROUS APPROACH TO PROBLEM-SOLVING AND CLEAN, SCALABLE ARCHITECTURE.',
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: 'VELOCITY & QUALITY',
    description: 'HIGH-SPEED DELIVERY WITHOUT COMPROMISING ON CODE INTEGRITY OR USER EXPERIENCE.',
  },
];

const WhyMe = () => {
  return (
    <section id="why-me" className="section-padding py-20 md:py-32" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="mb-16 md:mb-24">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-black mb-4 md:mb-6 uppercase leading-none font-display break-words tracking-tighter" style={{ color: 'var(--text-primary)' }}>
          STRATEGY<span style={{ color: 'var(--accent-color)' }}>.</span>
        </h2>
        <p className="text-sm md:text-lg font-bold uppercase tracking-widest" style={{ color: 'var(--text-tertiary)' }}>
          WHY I AM THE STRATEGIC FIT FOR YOUR GLOBAL TEAM.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{ 
                y: {
                  duration: 8, // Doubled duration for maximum smoothness
                  repeat: Infinity,
                  ease: [0.45, 0, 0.55, 1],
                  delay: idx * 0.4 // More spread out stagger
                },
                opacity: { duration: 1, delay: idx * 0.15 },
                x: { duration: 1, delay: idx * 0.15 }
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                transition: { duration: 0.4 } 
              }}
              className="p-8 md:p-12 transition-colors group"
              style={{
                backgroundColor: 'var(--glass-bg)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '1.5rem',
              }}
            >
              <div className="mb-10 group-hover:scale-110 transition-transform duration-700" style={{ color: 'var(--accent-color)' }}>{reason.icon}</div>
              <h3 className="text-lg font-black mb-6 tracking-tighter uppercase font-display group-hover:text-accent transition-colors" style={{ color: 'var(--text-primary)' }}>{reason.title}</h3>
              <p className="font-bold text-xs uppercase tracking-widest leading-loose" style={{ color: 'var(--text-tertiary)' }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default WhyMe;

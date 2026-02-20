import React from 'react';
import { motion } from 'framer-motion';
import { Award, Quote, ExternalLink, Linkedin } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      type: 'CERTIFICATION',
      title: 'Complete Web Development',
      issuer: 'Programming Hero',
      date: '2025',
      description: 'INTENSIVE SPECIALIZATION IN MERN STACK ARCHITECTURE AND DEPLOYMENT.',
      icon: <Award className="w-8 h-8" style={{ color: 'var(--accent-color)' }} />,
      link: 'https://drive.google.com/file/d/1VcWJVcs4lKdbjKlVv7wqGS16E8wsjuYO/view?usp=sharing' // Add your certificate link here
    },
    {
      type: 'RECOMMENDATION',
      title: 'LinkedIn Endorsement',
      issuer: 'Senior Software Engineer',
      date: 'MARCH 2024',
      description: '"AN EXCEPTIONAL PROBLEM SOLVER WHO CONSISTENTLY DELIVERS CLEAN, SCALABLE CODE UNDER TIGHT DEADLINES."',
      icon: <Quote className="w-8 h-8" style={{ color: 'var(--accent-color)' }} />,
      link: 'https://www.linkedin.com/in/shuvo-mallik/' // Add your LinkedIn profile link here
    }
  ];

  return (
    <section id="achievements" className="section-padding py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-xl md:text-2xl lg:text-5xl font-black mb-4 uppercase font-display tracking-tighter" style={{ color: 'var(--text-primary)' }}>
          ACHIEVEMENTS<span style={{ color: 'var(--accent-color)' }}/>
        </h2>
        <div className="h-1 w-20" style={{ backgroundColor: 'var(--accent-color)' }} />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative p-8 md:p-12 flex flex-col justify-between overflow-hidden group"
            style={{
              backgroundColor: 'var(--glass-bg)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '2rem'
            }}
          >
            {/* Background Decorative Icon */}
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
               {React.cloneElement(item.icon, { size: 160 })}
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.1)', border: '1px solid var(--glass-border)' }}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: 'var(--accent-color)' }}>
                    {item.type}
                  </h4>
                  <p className="text-[10px] font-bold uppercase opacity-60" style={{ color: 'var(--text-tertiary)' }}>
                    {item.date}
                  </p>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-black mb-4 uppercase font-display tracking-tight" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] leading-relaxed mb-8" style={{ color: 'var(--text-tertiary)' }}>
                {item.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
              <span className="text-[10px] font-black tracking-widest uppercase" style={{ color: 'var(--text-primary)' }}>
                {item.issuer}
              </span>
              
<motion.a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className="group relative flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all"
  style={{ color: 'var(--text-primary)' }}
>
  <span className="relative">
    {item.type === 'CERTIFICATION' ? 'VIEW CERT' : 'VIEW PROFILE'}
    {/* Animated Underline */}
    <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right group-hover:origin-left" />
  </span>

  <div className="relative overflow-hidden w-4 h-4">
    <ExternalLink 
      size={14} 
      className="absolute transition-all duration-500 transform group-hover:translate-x-4 group-hover:-translate-y-4" 
    />
    <ExternalLink 
      size={14} 
      className="absolute -translate-x-4 translate-y-4 transition-all duration-500 transform group-hover:translate-x-0 group-hover:translate-y-0" 
      style={{ color: 'var(--accent-color)' }}
    />
  </div>
</motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
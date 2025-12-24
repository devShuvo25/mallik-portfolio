import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com" },
    { icon: <Twitter size={18} />, href: "https://twitter.com" },
    { icon: <Mail size={18} />, href: "mailto:shuvo@example.com" },
  ];

  return (
    <footer className="py-12" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="section-padding flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="text-xl font-black tracking-tighter font-display" style={{ color: 'var(--text-primary)' }}>
            SHUVO MALLIK<span style={{ color: 'var(--accent-color)' }}>.</span>
          </h3>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] mt-1" style={{ color: 'var(--text-tertiary)' }}>
            Full Stack Web Developer
          </p>
        </motion.div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link, idx) => (
            <motion.a 
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
              className="transition-colors block"
              style={{ color: 'var(--text-tertiary)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-tertiary)'}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="flex flex-col items-center md:items-end text-[10px] font-bold uppercase tracking-widest gap-2"
          style={{ color: 'var(--text-tertiary)' }}
        >
          <span>MADE BY SHUVO</span>
          <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

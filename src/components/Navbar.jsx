import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

import logo from '../assets/logo.png';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ show }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-[1001] transition-all duration-500 px-6 md:px-12 py-6',
        scrolled ? 'py-4 shadow-2xl' : ''
      )}
      style={{
        backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(32px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={show ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl font-black tracking-tighter flex items-center gap-3"
          style={{ color: 'var(--text-primary)' }}
        >
          <img src={logo} alt="Shuvo Logo" className="w-8 h-8 object-contain" />
          <span>MALLIK<span style={{ color: 'var(--accent-color)' }}>.</span></span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest transition-colors"
              style={{ color: 'var(--text-tertiary)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-tertiary)'}
            >
              {link.name}
            </motion.a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--text-primary)' }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 backdrop-blur-xl z-[-1] md:hidden"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            />
            
            {/* Drawer Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[80%] max-w-[400px] h-screen shadow-2xl md:hidden z-[1002]"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderLeft: '1px solid var(--border-color)',
              }}
            >
              <div className="flex flex-col h-full p-12 pt-32">
                <div className="flex flex-col space-y-10">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-black tracking-tighter transition-all hover:translate-x-2"
                      style={{ color: 'var(--text-primary)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                    >
                      <span style={{ color: 'var(--accent-color)', opacity: 0.3 }} className="mr-4 text-sm font-sans tracking-widest">0{i + 1}</span>
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-auto pt-20" style={{ borderTop: '1px solid var(--border-color)' }}>
                  <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-6" style={{ color: 'var(--text-tertiary)' }}>
                    SOCIALS
                  </p>
                  <div className="flex gap-6">
                    <a 
                      href="https://linkedin.com/in/shuvo-mallik" 
                      target="_blank" 
                      className="text-xs font-bold uppercase tracking-widest transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                    >
                      LINKEDIN
                    </a>
                    <a 
                      href="https://github.com/devShuvo25" 
                      target="_blank" 
                      className="text-xs font-bold uppercase tracking-widest transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                    >
                      GITHUB
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Close Button Inside Drawer */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 p-2 rounded-full transition-colors"
                style={{ color: 'var(--text-primary)' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--glass-bg)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <X size={32} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

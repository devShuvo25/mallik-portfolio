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
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="section-padding flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-black text-white tracking-tighter font-display">
            SHUVO MALLIK<span className="text-accent">.</span>
          </h3>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-1">
            Full Stack Web Developer
          </p>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link, idx) => (
            <a 
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-accent transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-end text-[10px] font-bold text-slate-500 uppercase tracking-widest gap-2">
          <span>MADE BY SHUVO</span>
          <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

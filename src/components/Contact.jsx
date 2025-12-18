import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding py-20 md:py-40 border-t border-white/5 bg-black overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm md:text-lg font-black mb-4 md:mb-6 text-white tracking-tighter uppercase font-display">LET'S CONNECT</h3>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-black mb-6 md:mb-8 text-gradient font-display break-words uppercase tracking-tighter">
            HIRE<span className="text-accent">.</span>
          </h2>
          <p className="text-base md:text-xl text-slate-400 font-bold uppercase tracking-widest mb-10 md:mb-16 leading-relaxed max-w-md">
            I AM CURRENTLY OPEN TO GLOBAL REMOTE OPPORTUNITIES. LET'S BUILD SOMETHING EXTRAORDINARY.
          </p>

          <div className="space-y-10">
            {[
              { label: 'EMAIL', value: 'shuvomallik999@gmail.com', icon: <Mail size={20} />, href: 'mailto:shuvomallik999@gmail.com' },
              { label: 'LINKEDIN', value: 'linkedin.com/in/shuvo-mallik', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/shuvo-mallik/' },
              { label: 'GITHUB', value: 'github.com/shuvomallik', icon: <Github size={20} />, href: 'https://github.com/devShuvo25' },
            ].map((item, i) => (
              item.href ? (
                <a 
                  key={i} 
                  href={item.href}
                  target={item.label === 'EMAIL' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 md:gap-8 group cursor-pointer"
                >
                  <div className="text-accent group-hover:scale-125 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] md:text-[10px] font-black text-slate-500 tracking-[0.2em] md:tracking-[0.4em] mb-0.5 md:mb-1 uppercase">
                      {item.label}
                    </p>
                    <p className="text-sm md:text-base font-black text-white group-hover:text-accent transition-colors tracking-tighter font-display truncate">
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div key={i} className="flex items-center gap-4 md:gap-8">
                  <div className="text-accent shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] md:text-[10px] font-black text-slate-500 tracking-[0.2em] md:tracking-[0.4em] mb-0.5 md:mb-1 uppercase">
                      {item.label}
                    </p>
                    <p className="text-sm md:text-base font-black text-white tracking-tighter font-display truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              )
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-20 shadow-none border-white/5 bg-white/[0.02]"
        >
          <form className="space-y-8 md:space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 md:space-y-4">
              <label className="text-[10px] font-black text-slate-500 tracking-[0.4em] uppercase">Your Name</label>
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 outline-none focus:border-accent transition-colors text-lg md:text-xl font-bold font-sans"
              />
            </div>
            <div className="space-y-2 md:space-y-4">
              <label className="text-[10px] font-black text-slate-500 tracking-[0.4em] uppercase">Your Email</label>
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 outline-none focus:border-accent transition-colors text-base md:text-lg font-bold font-sans"
              />
            </div>
            <div className="space-y-2 md:space-y-4">
              <label className="text-[9px] md:text-[10px] font-black text-slate-500 tracking-[0.2em] md:tracking-[0.4em] uppercase">Message</label>
              <textarea 
                rows="3"
                placeholder="Project details..."
                className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 outline-none focus:border-accent transition-colors text-lg md:text-xl font-bold font-sans resize-none"
              ></textarea>
            </div>
            <button className="btn-premium w-full mt-8 md:mt-12 hover:scale-[1.02] active:scale-95 transition-all">
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

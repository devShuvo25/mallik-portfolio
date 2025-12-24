import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding py-20 md:py-40 overflow-hidden" style={{ borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm md:text-lg font-black mb-4 md:mb-6 tracking-tighter uppercase font-display" style={{ color: 'var(--text-primary)' }}>LET'S CONNECT</h3>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-black mb-6 md:mb-8 font-display break-words uppercase tracking-tighter" style={{ color: 'var(--text-primary)' }}>
            HIRE<span style={{ color: 'var(--accent-color)' }}>.</span>
          </h2>
          <p className="text-base md:text-xl font-bold uppercase tracking-widest mb-10 md:mb-16 leading-relaxed max-w-md" style={{ color: 'var(--text-tertiary)' }}>
            I AM CURRENTLY OPEN TO GLOBAL REMOTE OPPORTUNITIES. LET'S BUILD SOMETHING EXTRAORDINARY.
          </p>

          <div className="space-y-10">
            {[
              { label: 'EMAIL', value: 'shuvomallik999@gmail.com', icon: <Mail size={20} />, href: 'mailto:shuvomallik999@gmail.com' },
              { label: 'LINKEDIN', value: 'linkedin.com/in/shuvo-mallik', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/shuvo-mallik/' },
              { label: 'GITHUB', value: 'github.com/shuvomallik', icon: <Github size={20} />, href: 'https://github.com/devShuvo25' },
            ].map((item, i) => (
              item.href ? (
                <motion.a 
                  key={i} 
                  href={item.href}
                  target={item.label === 'EMAIL' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  animate={{
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4
                  }}
                  className="flex items-center gap-4 md:gap-8 group cursor-pointer"
                >
                  <div className="text-accent group-hover:scale-125 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] mb-0.5 md:mb-1 uppercase" style={{ color: 'var(--text-tertiary)' }}>
                      {item.label}
                    </p>
                    <p className="text-sm md:text-base font-black group-hover:text-accent transition-colors tracking-tighter font-display truncate" style={{ color: 'var(--text-primary)' }}>
                      {item.value}
                    </p>
                  </div>
                </motion.a>
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
          animate={{
            y: [0, -15, 0],
          }}
          transition={{ 
            y: {
              duration: 12, // Very slow, luxurious float
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1],
            },
            opacity: { duration: 1.2 },
            scale: { duration: 1.2 }
          }}
          viewport={{ once: true }}
          className="p-8 md:p-20 shadow-none"
          style={{
            backgroundColor: 'var(--glass-bg)',
            backdropFilter: 'blur(12px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '1.5rem',
          }}
        >
          <form className="space-y-8 md:space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 md:space-y-4">
              <label className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: 'var(--text-tertiary)' }}>Your Name</label>
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full bg-transparent py-3 md:py-4 outline-none focus:border-accent transition-colors text-lg md:text-xl font-bold font-sans"
                style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
              />
            </div>
            <div className="space-y-2 md:space-y-4">
              <label className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: 'var(--text-tertiary)' }}>Your Email</label>
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-transparent py-3 md:py-4 outline-none focus:border-accent transition-colors text-base md:text-lg font-bold font-sans"
                style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
              />
            </div>
            <div className="space-y-2 md:space-y-4">
              <label className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase" style={{ color: 'var(--text-tertiary)' }}>Message</label>
              <textarea 
                rows="3"
                placeholder="Project details..."
                className="w-full bg-transparent py-3 md:py-4 outline-none focus:border-accent transition-colors text-lg md:text-xl font-bold font-sans resize-none"
                style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
              ></textarea>
            </div>
            <motion.button 
              animate={{ 
                boxShadow: ["0 0 0 0px rgba(0, 242, 255, 0)", "0 0 0 10px rgba(0, 242, 255, 0.1)", "0 0 0 0px rgba(0, 242, 255, 0)"] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="btn-premium w-full mt-8 md:mt-12 hover:scale-[1.02] active:scale-95 transition-all"
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const experiences = [
  {
    company: "Badhon Soft",
    role: "Junior Full Stack Developer",
    period: "2025 — Present",
    points: [
      "Developed multiple MERN and Next.js applications with responsive, user-focused interfaces.",
      "Built secure REST APIs with authentication, role-based access, and optimized database queries.",
      "Implemented global state management using Redux Toolkit and RTK Query for efficient data handling.",
      "Delivered production-ready systems including dashboards, admin panels, and business management tools.",
    ],
    tech: ["Next.js", "Tailwind", "TypeScript", "Node", "Express", "Prisma", "PostgreSQL"],
  },
];

const Experience = () => {
  return (
    // Updated padding: px-6 for mobile, px-12 for tablets, and max-w-7xl for large screens
    <section id="experience" className="relative py-12 md:py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Responsive Text Sizes: text-4xl for mobile, text-7xl for desktop */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-tight md:leading-none">
            Experience<span className="text-[var(--accent-color)]">.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-4">
            <div className="hidden sm:block h-px w-12 bg-[var(--accent-color)]" />
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-[var(--text-tertiary)]">
              Roles & Selected Contributions
            </p>
          </div>
        </motion.div>
      </div>

      {/* Experience List */}
      <div className="space-y-16 md:space-y-24">
        {experiences.map((exp, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8"
          >
            {/* Left Side: Meta Info (Sticky only on large screens) */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <span className="text-[var(--accent-color)] font-mono text-xs md:text-sm mb-2 block">
                0{idx + 1} // {exp.period}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] leading-tight uppercase">
                {exp.company}
              </h3>
              <p className="text-[var(--text-tertiary)] font-medium mt-1 uppercase tracking-wider text-xs md:text-sm">
                {exp.role}
              </p>
            </div>

            {/* Right Side: Content Card */}
            <motion.div 
              // Disabling hover lift on touch devices for better UX
              whileHover={{ y: window?.innerWidth > 768 ? -5 : 0 }}
              className="lg:col-span-8 relative p-6 md:p-10 rounded-2xl overflow-hidden transition-colors"
              style={{
                background: "linear-gradient(145deg, var(--glass-bg), transparent)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Decorative Background Gradient */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--accent-color)] opacity-[0.03] blur-[100px] pointer-events-none" />

              <ul className="space-y-4">
                {exp.points.map((p, i) => (
                  <li key={i} className="flex gap-3 md:gap-4 text-[var(--text-tertiary)] text-sm md:text-base leading-relaxed group/item">
                    <span className="text-[var(--accent-color)] mt-1.5 flex-shrink-0">
                      <svg width="10" height="10" className="md:w-3 md:h-3" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="group-hover/item:text-[var(--text-primary)] transition-colors duration-300">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Tags - Adjusted padding for mobile */}
              <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-[var(--glass-border)] flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <Magnetic key={t} strength={0.15}>
                    <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest uppercase bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] text-[var(--text-tertiary)] hover:border-[var(--accent-color)] hover:text-[var(--text-primary)] transition-all inline-block">
                      {t}
                    </span>
                  </Magnetic>
                ))}
              </div>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
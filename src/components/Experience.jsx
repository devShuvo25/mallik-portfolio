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
    <section id="experience" className="relative py-5 px-24 md:py-10  max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            Experience<span className="text-[var(--accent-color)]">.</span>
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <div className="h-px w-12 bg-[var(--accent-color)]" />
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-[var(--text-tertiary)]">
              Roles & Selected Contributions
            </p>
          </div>
        </motion.div>
      </div>

      {/* Experience List */}
      <div className="space-y-20">
        {experiences.map((exp, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left Side: Meta Info (Sticky on Desktop) */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <span className="text-[var(--accent-color)] font-mono text-sm mb-2 block">
                0{idx + 1} // {exp.period}
              </span>
              <h3 className="text-3xl font-black text-[var(--text-primary)] leading-tight uppercase">
                {exp.company}
              </h3>
              <p className="text-[var(--text-tertiary)] font-medium mt-1 uppercase tracking-wider text-sm">
                {exp.role}
              </p>
            </div>

            {/* Right Side: Content Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="lg:col-span-8 relative p-8 md:p-10 rounded-2xl overflow-hidden transition-colors"
              style={{
                background: "linear-gradient(145deg, var(--glass-bg), transparent)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Subtle Decorative Background Gradient */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--accent-color)] opacity-[0.03] blur-[100px] pointer-events-none" />

              <ul className="space-y-4">
                {exp.points.map((p, i) => (
                  <li key={i} className="flex gap-4 text-[var(--text-tertiary)] leading-relaxed group/item">
                    <span className="text-[var(--accent-color)] mt-1.5 flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="group-hover/item:text-[var(--text-primary)] transition-colors duration-300">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="mt-10 pt-8 border-t border-[var(--glass-border)] flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <Magnetic key={t} strength={0.15}>
                    <span className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] text-[var(--text-tertiary)] hover:border-[var(--accent-color)] hover:text-[var(--text-primary)] transition-all">
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
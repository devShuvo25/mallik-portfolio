import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WhyMe from './components/WhyMe';
import Contact from './components/Contact';

import Noise from './components/Noise';
import Footer from './components/Footer';

import Lenis from 'lenis';

function App() {
  React.useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      normalizeWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950">
      <Noise />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

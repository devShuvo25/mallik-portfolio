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
import Loader from './components/Loader';
import Stars from './components/Stars';

import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 2,
      normalizeWheel: true,
      infinite: false,
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
      <AnimatePresence mode="wait">
        {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <Stars />
      <Noise />
      <Navbar show={!isLoading} />
      <main>
        <Hero show={!isLoading} />
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

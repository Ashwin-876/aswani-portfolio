import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Arsenal from './components/Arsenal';
import Projects from './components/Projects';
import AIEngine from './components/AIEngine';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SocialFooter from './components/SocialFooter';
import useScrollReveal from './hooks/useScrollReveal';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useScrollReveal();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Initial ScrollTrigger refresh after a small delay to ensure page layout is settled
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleLoad);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="app">
      <div className="ambient-particles"></div>
      <div className="chess-board-grid"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Arsenal />
        <Projects />
        <AIEngine />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <SocialFooter />
    </div>
  );
}

export default App;

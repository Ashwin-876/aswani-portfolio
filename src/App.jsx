import React from 'react';
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

function App() {
  useScrollReveal();

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

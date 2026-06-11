import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const NOTATIONS = [
  '[person: 98%]',
  '[car: 91%]',
  '[cup: 88%]',
  '[laptop: 95%]',
  '[chair: 84%]',
  '[book: 79%]',
  '[traffic_light: 92%]',
  '[bicycle: 87%]'
];

const Hero = () => {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  
  const [loading, setLoading] = useState(true);
  const numFrames = 40;

  // 1. Preload all 40 frames from the HERO PAGE ASWANI folder
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = [];

    const loadImage = (index) => {
      const frameNum = String(index + 1).padStart(3, '0');
      const img = new Image();
      img.src = `/HERO PAGE ASWANI/ezgif-frame-${frameNum}.jpg`;
      
      img.onload = () => {
        loadedImages[index] = img;
        loadedCount++;
        if (loadedCount === numFrames) {
          imagesRef.current = loadedImages;
          setLoading(false);
        }
      };

      img.onerror = () => {
        console.warn(`Failed to load frame ${frameNum}, trying fallback`);
        // Fallback to load placeholder or proceed to avoid blocking the app
        const fallbackImg = new Image();
        fallbackImg.src = '/aswani-profile.webp'; // Fallback asset
        fallbackImg.onload = () => {
          loadedImages[index] = fallbackImg;
          loadedCount++;
          if (loadedCount === numFrames) {
            imagesRef.current = loadedImages;
            setLoading(false);
          }
        };
      };
    };

    for (let i = 0; i < numFrames; i++) {
      loadImage(i);
    }
  }, []);

  // 2. Cover-fit image drawing helper
  const renderFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = imagesRef.current[index];
    if (!img || !ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const iw = img.width;
    const ih = img.height;

    const r = Math.min(w / iw, h / ih);
    let nw = iw * r;
    let nh = ih * r;

    // Expand to fit canvas width if smaller
    if (nw < w) {
      const r2 = w / nw;
      nw *= r2;
      nh *= r2;
    }
    // Expand to fit canvas height if smaller
    if (nh < h) {
      const r2 = h / nh;
      nw *= r2;
      nh *= r2;
    }

    const cw = iw * (w / nw);
    const ch = ih * (h / nh);

    const cx = (iw - cw) * 0.5;
    const cy = (ih - ch) * 0.5;

    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, cx, cy, cw, ch, 0, 0, w, h);
  };

  // 3. Setup ScrollTrigger and GSAP timelines
  useEffect(() => {
    if (loading) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Helper to resize canvas to display resolution
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      renderFrame(currentFrameRef.current);
    };

    // Initialize canvas size and draw first frame
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create ScrollTrigger to handle image sequence scrub and hero pinning
    const scrollTriggerObj = ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: '+=250%', // Pin duration
      pin: true,
      scrub: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        // Map scroll progress (0 to 1) to frame indices (0 to 39)
        const frameIndex = Math.min(
          numFrames - 1,
          Math.floor(self.progress * numFrames)
        );
        currentFrameRef.current = frameIndex;
        renderFrame(frameIndex);
      }
    });

    // Create timeline to fade out the overlay elements as user scrolls
    const fadeTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '+=80%', // Fade out completely in the first part of the scroll
        scrub: true,
      }
    });

    fadeTimeline.to('.hero-hud-corner, .hero-chess-notation', {
      opacity: 0,
      y: -50,
      ease: 'none',
    });

    // Intro timeline (runs once when images are loaded and component mounts)
    const introTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    introTimeline.fromTo('.hero-hud-corner', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.05 }, 0.2);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      scrollTriggerObj.kill();
      fadeTimeline.scrollTrigger?.kill();
      fadeTimeline.kill();
      introTimeline.kill();
    };
  }, [loading]);

  if (loading) {
    return (
      <section id="home" className="hero-section hero-loading">
        <div className="hero-loader-spinner" />
        <span className="hero-loader-text">PREPARING EXPERIENCE...</span>
      </section>
    );
  }

  return (
    <section id="home" ref={heroRef} className="hero-section">
      {/* Fullscreen interactive canvas */}
      <canvas className="hero-canvas" ref={canvasRef} />

      {/* Grid overlay on top of canvas for high-tech aesthetic */}
      <div className="hero-grid" />

      {/* HUD corners */}
      <div className="hero-hud-corner hero-hud-tl" />
      <div className="hero-hud-corner hero-hud-tr" />
      <div className="hero-hud-corner hero-hud-bl" />
      <div className="hero-hud-corner hero-hud-br" />

      {/* Floating chess notations */}
      {NOTATIONS.map((notation, i) => (
        <div
          key={notation}
          className="hero-chess-notation"
          style={{
            left: `${6 + i * 12}%`,
            animationDelay: `${i * 1.8}s`,
            animationDuration: `${14 + i * 2}s`,
          }}
        >
          {notation}
        </div>
      ))}
    </section>
  );
};

export default Hero;

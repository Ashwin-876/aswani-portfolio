import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Crown } from 'lucide-react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaInstagram, 
  FaDiscord, 
  FaTelegramPlane, 
  FaWhatsapp, 
  FaRedditAlien, 
  FaPinterestP, 
  FaBehance, 
  FaDribbble 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

import './SocialFooter.css';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { id: 'github', icon: <FaGithub />, href: '#' },
  { id: 'linkedin', icon: <FaLinkedinIn />, href: '#' },
  { id: 'x', icon: <FaXTwitter />, href: '#' },
  { id: 'instagram', icon: <FaInstagram />, href: '#' },
  { id: 'discord', icon: <FaDiscord />, href: '#' },
  { id: 'telegram', icon: <FaTelegramPlane />, href: '#' },
  { id: 'whatsapp', icon: <FaWhatsapp />, href: '#' },
  { id: 'gmail', icon: <SiGmail />, href: '#' },
  { id: 'reddit', icon: <FaRedditAlien />, href: '#' },
  { id: 'pinterest', icon: <FaPinterestP />, href: '#' },
  { id: 'behance', icon: <FaBehance />, href: '#' },
  { id: 'dribbble', icon: <FaDribbble />, href: '#' }
];

const SocialFooter = () => {
  const sectionRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal badge and titles
      gsap.fromTo('.availability-badge', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
        }}
      );

      gsap.fromTo('.next-move-title', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out', scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
        }}
      );

      gsap.fromTo('.next-move-subtitle', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.4, ease: 'power3.out', scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
        }}
      );

      // Staggered reveal for icons
      gsap.fromTo(iconsRef.current,
        { y: 100, opacity: 0, scale: 0.5 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
      );

      // Floating Particles Creation
      const createParticles = () => {
        const container = sectionRef.current;
        if (!container) return;
        
        for (let i = 0; i < 20; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');
          
          // Randomize properties
          const size = Math.random() * 4 + 1;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = Math.random() * 4 + 3;
          
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${left}%`;
          particle.style.top = `${top}%`;
          particle.style.animationDelay = `${delay}s`;
          particle.style.animationDuration = `${duration}s`;
          
          container.appendChild(particle);
        }
      };
      
      createParticles();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} className="social-footer">
      {/* Giant King Watermark */}
      <div className="king-watermark">
        <Crown size="1em" strokeWidth={0.5} />
      </div>

      {/* Connecting glowing line behind icons */}
      <div className="social-lines-bg"></div>

      <div className="social-footer-content">
        
        <div className="availability-badge">
          <div className="dot-pulse"></div>
          AVAILABLE FOR NEW PROJECTS
        </div>

        <div className="social-icons-row">
          {socialLinks.map((link, index) => {
            // Calculate a deterministic animation delay for organic floating
            const floatDelay = (((index * 1.37) % 4) * -1).toFixed(2);
            
            return (
              <a 
                key={link.id} 
                href={link.href}
                className="social-icon-wrapper"
                target="_blank"
                rel="noopener noreferrer"
                ref={el => iconsRef.current[index] = el}
                style={{ animationDelay: `${floatDelay}s` }}
                aria-label={link.id}
              >
                {link.icon}
              </a>
            );
          })}
        </div>

        <h2 className="next-move-title">THE NEXT MOVE IS YOURS.</h2>
        <p className="next-move-subtitle">
          Ready to build intelligent AI solutions and impactful digital experiences.
        </p>

        <div className="footer-bottom">
          <div className="footer-mastery-quote">
            "Every Project Is A Move Towards Mastery."
          </div>
          <div className="footer-title">
            GRANDMASTER | AI ENGINEER
          </div>
          <div className="footer-copyright">
            © 2026 Aswani C. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SocialFooter;

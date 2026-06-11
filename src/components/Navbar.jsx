import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import './Navbar.css';

const navLinks = [
    { label: 'OPENING', target: 'home' },
    { label: 'ABOUT', target: 'about' },
    { label: 'SKILLS', target: 'skills' },
    { label: 'STACK', target: 'arsenal' },
    { label: 'PROJECTS', target: 'projects' },
    { label: 'ENGINE', target: 'ai-engine' },
    { label: 'AWARDS', target: 'achievements' },
    { label: 'CAREER', target: 'experience' },
    { label: 'CONTACT', target: 'contact' }
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [soundEnabled] = useState(true);
    const [activeSection, setActiveSection] = useState('home');
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Calculate scroll progress percentage
            const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight * 100}`;
            setScrollProgress(scroll);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-35% 0px -55% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navLinks.forEach(link => {
            const el = document.getElementById(link.target);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const playChessSound = (type = 'move') => {
        if (!soundEnabled) return;
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            
            if (type === 'move') {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(140, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.1);
                
                gain.gain.setValueAtTime(0.15, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
                
                osc.start();
                osc.stop(ctx.currentTime + 0.1);
            } else if (type === 'check') {
                const osc1 = ctx.createOscillator();
                const gain1 = ctx.createGain();
                osc1.connect(gain1);
                gain1.connect(ctx.destination);
                
                osc1.type = 'sine';
                osc1.frequency.setValueAtTime(330, ctx.currentTime);
                osc1.frequency.setValueAtTime(440, ctx.currentTime + 0.05);
                
                gain1.gain.setValueAtTime(0.1, ctx.currentTime);
                gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
                
                osc1.start();
                osc1.stop(ctx.currentTime + 0.2);
            }
        } catch (e) {
            console.warn("Audio blocked by browser policy until interaction.", e);
        }
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        playChessSound(targetId === 'contact' ? 'check' : 'move');
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#home" className="logo" onClick={() => playChessSound('move')}>
                    ASWANI C <span className="logo-sub">AI ENGINEER</span>
                </a>

                <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.target}
                            href={`#${link.target}`}
                            onClick={(e) => handleNavClick(e, link.target)}
                            className={`nav-item ${activeSection === link.target ? 'active' : ''}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="mobile-controls">
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Scroll Progress Indicator */}
            <div 
                className="scroll-progress-bar" 
                style={{ width: `${scrollProgress}%` }}
            ></div>
        </nav>
    );
};

export default Navbar;

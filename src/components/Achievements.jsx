import React, { useEffect, useRef } from 'react';
import './Achievements.css';
import { Award, Trophy, Star, Shield, Calendar } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextType from './TextType';

gsap.registerPlugin(ScrollTrigger);

// Custom chess piece vectors for background depth
const ChessSVGs = {
    queen: (
        <svg viewBox="0 0 512 512" width="100%" height="100%" className="parallax-chess-piece-hall hall-queen" aria-hidden="true">
            <path 
                fill="currentColor" 
                d="M496 288c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32c0 8.8-7.2 16-16 16zm-480 0c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32c0 8.8-7.2 16-16 16z"
                opacity="0.015"
            />
        </svg>
    ),
    knight: (
        <svg viewBox="0 0 448 512" width="100%" height="100%" className="parallax-chess-piece-hall hall-knight" aria-hidden="true">
            <path 
                fill="currentColor" 
                d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5l0 132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400l320 0c0-20 9.9-38.7 26.4-50L250.7 232.8c-10.6-7.2-10.9-22.6-.7-30.3c6.6-5 15.7-5 22.3 0l49.4 37c2.3 1.7 4.7 3.2 7.3 4.5l3.2 1.6c15.4 7.7 33.8 6.6 48.1-3l10.6-7c8.9-5.9 14.2-15.9 14.2-26.6V106.5c0-17-6.7-33.2-18.7-45.2L352 48l-256 0z"
                opacity="0.015"
            />
        </svg>
    )
};

// Detailed inline SVGs and custom render badges for the 8 recognitions
const RecognitionIcons = {
    trophy: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <path fill="currentColor" d="M18 2H6v2H2v3c0 3.2 2.1 5.8 5 6.7V17c0 1.1.9 2 2 2h2v2H8v2h8v-2h-4v-2h2c1.1 0 2-.9 2-2v-3.3c2.9-.9 5-3.5 5-6.7V4h-4V2zM4 7V6h2v3.8C4.8 9 4 8.1 4 7zm16 0c0 1.1-.8 2-2 2.8V6h2v1z"/>
        </svg>
    ),
    firstPlace: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <circle cx="12" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path fill="currentColor" d="M11 6h2v6h-2zM12 3a8 8 0 0 0-8 8c0 3.5 2.2 6.5 5.5 7.5l-1.5 3.5h8l-1.5-3.5c3.3-1 5.5-4 5.5-7.5a8 8 0 0 0-8-8z"/>
            <text x="12" y="11" fill="currentColor" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">1st</text>
        </svg>
    ),
    excellence: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
    ),
    bestProject: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <path fill="none" stroke="currentColor" strokeWidth="2" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <path fill="none" stroke="currentColor" strokeWidth="2" d="M14 2v6h6M9 15l2 2 4-4"/>
        </svg>
    ),
    codeInnovation: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 7l-4 10"/>
        </svg>
    ),
    finalist: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
    ),
    teamLeadership: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5S5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
    ),
    merit: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <circle cx="12" cy="8" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path fill="currentColor" d="M9 12l-2 8 5-2 5 2-2-8z"/>
        </svg>
    )
};

const Achievements = () => {
    const canvasRef = useRef(null);
    const sectionRef = useRef(null);

    const stats = [
        { target: 15, label: "Awards Earned", icon: <Award size={20} className="award-stat-icon" />, suffix: "+" },
        { target: 10, label: "Competitions Won", icon: <Trophy size={20} className="award-stat-icon" />, suffix: "+" },
        { target: 5, label: "Hackathons", icon: <Star size={20} className="award-stat-icon" />, suffix: "+" },
        { target: 100, label: "Dedication", icon: <Shield size={20} className="award-stat-icon" />, suffix: "%" }
    ];

    const recognitions = [
        {
            title: "Winner",
            subtitle: "Smart India Hackathon 2024",
            description: "Developed an AI-powered solution for real-time waste management and smart monitoring.",
            date: "Mar 2024",
            icon: RecognitionIcons.trophy,
            color: "#cca43b" // Gold
        },
        {
            title: "1st Place",
            subtitle: "AI Model Building Competition",
            description: "Secured first place for creating a high accuracy ML model for predictive healthcare analytics.",
            date: "Jan 2024",
            icon: RecognitionIcons.firstPlace,
            color: "#A259FF" // Purple
        },
        {
            title: "Excellence Award",
            subtitle: "Data Science Summit 2024",
            description: "Recognized for outstanding performance in data analysis and impactful visualization storytelling.",
            date: "Aug 2024",
            icon: RecognitionIcons.excellence,
            color: "#e5c158" // Yellow-Gold
        },
        {
            title: "Best Project Award",
            subtitle: "College Tech Fest 2024",
            description: "Awarded for building an innovative AI chatbot with NLP and context understanding.",
            date: "Sep 2024",
            icon: RecognitionIcons.bestProject,
            color: "#2EB67D" // Green
        },
        {
            title: "Code Innovation Award",
            subtitle: "Hack The Future 2023",
            description: "Honored for writing efficient, scalable and optimized code in the hackathon project development.",
            date: "Nov 2023",
            icon: RecognitionIcons.codeInnovation,
            color: "#FF6C37" // Orange
        },
        {
            title: "Finalist",
            subtitle: "National ML Challenge 2023",
            description: "Selected among top finalists for building a robust ML solution for real-world problem statement.",
            date: "Oct 2023",
            icon: RecognitionIcons.finalist,
            color: "#3F91DF" // Blue
        },
        {
            title: "Team Leadership Award",
            subtitle: "TechNova Hackathon 2023",
            description: "Recognized for leadership, teamwork and delivering a high-impact AI solution.",
            date: "Jul 2023",
            icon: RecognitionIcons.teamLeadership,
            color: "#8C62FF" // Purple-Blue
        },
        {
            title: "Certificate of Merit",
            subtitle: "Python Programming Challenge",
            description: "Awarded for exceptional problem solving skills and achieving highest score.",
            date: "May 2023",
            icon: RecognitionIcons.merit,
            color: "#E01E5A" // Red
        }
    ];

    // Hook 1: Canvas particle embers drift loop (Viewport Throttled)
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let isVisible = false;

        // Resize handler
        const resizeCanvas = () => {
            const parent = canvas.parentElement || document.body;
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Dust/embers array (reduced count for performance)
        const particleCount = 25;
        const particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vy: -(Math.random() * 0.25 + 0.1), // floating upwards
                vx: (Math.random() - 0.5) * 0.12,
                radius: Math.random() * 1.2 + 0.6,
                alpha: Math.random() * 0.35 + 0.1
            });
        }

        // Animation loop
        const animate = () => {
            if (!isVisible) {
                animationFrameId = null;
                return;
            }
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.y += p.vy;
                p.x += p.vx;
                
                // Recycle if they drift off bounds
                if (p.y < 0) {
                    p.y = canvas.height;
                    p.x = Math.random() * canvas.width;
                }
                if (p.x < 0 || p.x > canvas.width) {
                    p.vx *= -1;
                }
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(204, 164, 59, ${p.alpha})`;
                ctx.fill();
            });
            
            animationFrameId = requestAnimationFrame(animate);
        };

        // Intersection Observer to throttle canvas rendering when out of viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
                if (isVisible) {
                    if (!animationFrameId) {
                        animationFrameId = requestAnimationFrame(animate);
                    }
                } else {
                    if (animationFrameId) {
                        cancelAnimationFrame(animationFrameId);
                        animationFrameId = null;
                    }
                }
            });
        }, { threshold: 0.02 });

        observer.observe(canvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            observer.disconnect();
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    // Hook 2: GSAP ScrollTrigger Configurations (Responsive & Optimized)
    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            // Desktop-only parallax scroll for background chess vectors
            gsap.to(".hall-queen", {
                y: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: "#achievements",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
            gsap.to(".hall-knight", {
                y: 65,
                ease: "none",
                scrollTrigger: {
                    trigger: "#achievements",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Desktop 3D staggered reveal of cards
            const cards = gsap.utils.toArray(".recognition-card");
            gsap.fromTo(cards,
                {
                    opacity: 0,
                    y: 40,
                    scale: 0.95,
                    rotateY: 10
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateY: 0,
                    duration: 1.0,
                    stagger: 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".recognitions-grid-modern",
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        mm.add("(max-width: 767px)", () => {
            // Mobile-optimized simple reveals
            const cards = gsap.utils.toArray(".recognition-card");
            gsap.fromTo(cards,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.06,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".recognitions-grid-modern",
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        mm.add("all", () => {
            // Animations active on all viewport sizes
            // Animate counters row cards
            const statCards = gsap.utils.toArray(".achieve-stat-card");
            gsap.fromTo(statCards,
                { opacity: 0, y: 25, scale: 0.96 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    stagger: 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".achievements-counters-grid",
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // Animate digits counting up
            const counters = gsap.utils.toArray(".achieve-stat-card .achieve-stat-number");
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute("data-target"), 10);
                gsap.fromTo(counter, 
                    { textContent: 0 },
                    { 
                        textContent: target,
                        duration: 1.8,
                        ease: "power2.out",
                        snap: { textContent: 1 },
                        scrollTrigger: {
                            trigger: counter,
                            start: "top 90%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <section id="achievements" ref={sectionRef} className="section achievements-section-modern">
            {/* HTML5 Dust/Ember particles rising background */}
            <canvas ref={canvasRef} className="hall-particles-canvas" />

            {/* Faint Chess Pieces Background Parallax */}
            {ChessSVGs.queen}
            {ChessSVGs.knight}

            <div className="container">
                {/* Chess board overlay grid lines for aesthetic background depth */}
                <div className="chessboard-grid-depth"></div>

                {/* Section Header Centered */}
                <div className="achievements-header-centered">
                    <div className="achievements-badge-row">
                        <div className="achieve-badge-line"></div>
                        <div className="achieve-badge-inner">
                            <Trophy size={16} className="achieve-badge-trophy-icon" style={{ color: 'var(--accent-gold)' }} />
                            <span className="achieve-badge-text">ACHIEVEMENTS</span>
                        </div>
                        <div className="achieve-badge-line"></div>
                    </div>

                    <h2 className="achievements-main-title" style={{ minHeight: '80px', display: 'block' }}>
                        <TextType 
                            text={["AWARDS| & RECOGNITIONS", "EXCELLENCE| MILESTONES", "HACKATHON| TRIUMPHS"]} 
                            as="span"
                            typingSpeed={60}
                            deletingSpeed={35}
                            pauseDuration={2500}
                            loop={true}
                            showCursor={true}
                            cursorCharacter="|"
                            textColors={["#f3f4f6", "var(--accent-gold)"]}
                        />
                    </h2>
                    <p className="achievements-subtitle-lead">
                        Milestones that motivate me to keep challenging, learning, and building impact.
                    </p>

                    <div className="achieve-decor-divider">
                        <span className="achieve-decor-line"></span>
                        <span className="achieve-pawn-decor">♟</span>
                        <span className="achieve-decor-line"></span>
                    </div>

                    {/* Four pillars counters */}
                    <div className="achievements-counters-grid">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="achieve-stat-card gold-border">
                                <div className="achieve-stat-icon-wrapper">
                                    {stat.icon}
                                </div>
                                <div className="achieve-stat-text">
                                    <div className="achieve-number-row">
                                        <span className="achieve-stat-number" data-target={stat.target}>0</span>
                                        <span className="achieve-stat-suffix">{stat.suffix}</span>
                                    </div>
                                    <span className="achieve-stat-label font-mono">{stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recognitions Header Divider */}
                <div className="my-recognitions-divider">
                    <span className="divider-trim"></span>
                    <span className="divider-label font-mono">MY RECOGNITIONS</span>
                    <span className="divider-trim"></span>
                </div>

                {/* 4-Column Recognitions Grid */}
                <div className="recognitions-grid-modern">
                    {recognitions.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="recognition-card gold-border"
                            style={{ '--accent-theme': item.color }}
                        >
                            {/* Circular Icon Circle */}
                            <div className="recognition-icon-circle" style={{ color: item.color, backgroundColor: `rgba(${parseInt(item.color.slice(1,3),16)}, ${parseInt(item.color.slice(3,5),16)}, ${parseInt(item.color.slice(5,7),16)}, 0.06)` }}>
                                {item.icon}
                            </div>

                            {/* Texts */}
                            <div className="recognition-texts">
                                <h3 className="recognition-title" style={{ color: item.color }}>{item.title}</h3>
                                <h4 className="recognition-subtitle">{item.subtitle}</h4>
                                <p className="recognition-desc">{item.description}</p>
                            </div>

                            {/* Date Badge */}
                            <div className="recognition-date-badge font-mono">
                                <Calendar size={12} className="calendar-icon" />
                                {item.date}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quote testimonial card at the bottom */}
                <div className="achievements-quote-footer gold-border">
                    <span className="achieve-quote-symbol">“</span>
                    <p className="achieve-quote-paragraph">
                        Every award is a reminder that consistency in <span className="highlight-strategy">strategy</span> leads to <span className="highlight-excellence">excellence</span> in results.
                    </p>
                    <div className="achieve-knight-watermark">
                        <svg viewBox="0 0 448 512" width="60" height="70">
                            <path 
                                fill="rgba(204, 164, 59, 0.025)" 
                                stroke="rgba(204, 164, 59, 0.05)" 
                                strokeWidth="0.5"
                                d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5l0 132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400l320 0c0-20 9.9-38.7 26.4-50L250.7 232.8c-10.6-7.2-10.9-22.6-.7-30.3c6.6-5 15.7-5 22.3 0l49.4 37c2.3 1.7 4.7 3.2 7.3 4.5l3.2 1.6c15.4 7.7 33.8 6.6 48.1-3l10.6-7c8.9-5.9 14.2-15.9 14.2-26.6V106.5c0-17-6.7-33.2-18.7-45.2L352 48l-256 0z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;

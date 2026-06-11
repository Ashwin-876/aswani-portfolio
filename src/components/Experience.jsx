import React, { useEffect, useRef } from 'react';
import { Trophy, Shield, Target, Award, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextType from './TextType';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

// Authentic vector paths for background parallax chess pieces (scaled to viewport size)
const ChessSVGs = {
    knight: (
        <svg viewBox="0 0 448 512" width="100%" height="100%" className="parallax-chess-piece parallax-knight" aria-hidden="true">
            <path 
                fill="currentColor" 
                d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5l0 132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400l320 0c0-20 9.9-38.7 26.4-50L250.7 232.8c-10.6-7.2-10.9-22.6-.7-30.3c6.6-5 15.7-5 22.3 0l49.4 37c2.3 1.7 4.7 3.2 7.3 4.5l3.2 1.6c15.4 7.7 33.8 6.6 48.1-3l10.6-7c8.9-5.9 14.2-15.9 14.2-26.6V106.5c0-17-6.7-33.2-18.7-45.2L352 48l-256 0zM352 0l16 16c21.9 21.9 32 80.5 32 80.5" 
                opacity="0.03"
            />
        </svg>
    ),
    rook: (
        <svg viewBox="0 0 448 512" width="100%" height="100%" className="parallax-chess-piece parallax-rook" aria-hidden="true">
            <path 
                fill="currentColor" 
                d="M416 320c0-20.2-12.5-37.4-30-44.5V208c17.5-7.1 30-24.3 30-44.5V80c0-8.8-7.2-16-16-16H368v32H320V64H272v32H224V64H176v32H128V64H80v32H48c-8.8 0-16 7.2-16 16v83.5c0 20.2 12.5 37.4 30 44.5v67.5c-17.5 7.1-30 24.3-30 44.5v48c0 26.5 21.5 48 48 48H368c26.5 0 48-21.5 48-48v-48zM64 480c0 17.7 14.3 32 32 32h256"
                opacity="0.025"
            />
        </svg>
    ),
    queen: (
        <svg viewBox="0 0 512 512" width="100%" height="100%" className="parallax-chess-piece parallax-queen" aria-hidden="true">
            <path 
                fill="currentColor" 
                d="M496 288c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32c0 8.8-7.2 16-16 16zm-480 0c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32c0 8.8-7.2 16-16 16zM297 122.9c-8.8-15.2-28-20.4-43.2-11.6s-20.4 28-11.6 43.2l53 91.8"
                opacity="0.03"
            />
        </svg>
    ),
    king: (
        <svg viewBox="0 0 448 512" width="100%" height="100%" className="finale-king-svg" aria-hidden="true">
            <path 
                fill="url(#goldGradient)" 
                d="M224 0c13.3 0 24 10.7 24 24v16h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16v32h48c17.7 0 32 14.3 32 32v16H96v-16c0-17.7 14.3-32 32-32h48V88h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16V24c0-13.3 10.7-24 24-24zm16 160h112c17.7 0 32 14.3 32 32v16H64v-16c0-17.7 14.3-32 32-32h112v-16zM32 256h384c17.7 0 32 14.3 32 32 0 41.5-25 78.1-63.4 93.5L340.5 416H107.5L63.4 381.5C25 366.1 0 329.5 0 288c0-17.7 14.3-32 32-32zm32 160h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 64c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32z" 
            />
            <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent-gold-light)" />
                    <stop offset="50%" stopColor="var(--accent-gold)" />
                    <stop offset="100%" stopColor="var(--accent-gold-dark)" />
                </linearGradient>
            </defs>
        </svg>
    )
};

const Experience = () => {
    const sectionRef = useRef(null);
    const canvasRef = useRef(null);

    const milestones = [
        {
            move: "MOVE 01",
            stage: "OPENING GAMBIT",
            title: "Web Development Intern",
            company: "Code Alpha",
            duration: "June 2023 (1 month)",
            details: [
                "Designed responsive user interfaces using custom CSS layouts and clean visual elements.",
                "Assisted in refactoring legacy frontend codes to optimize client-side performances.",
                "Implemented dynamic event handling logic to build fluent interface micro-interactions."
            ],
            tags: ["HTML5", "CSS3", "JavaScript", "Git"],
            icon: "♟️"
        },
        {
            move: "MOVE 02",
            stage: "STRATEGIC DEVELOPMENT",
            title: "Cloud with AI Training",
            company: "SkillMaven",
            duration: "Oct 2023 (1 month)",
            details: [
                "Trained and evaluated deep neural models using cloud GPU compute nodes.",
                "Configured robust storage systems and dataset ingress pipelines.",
                "Optimized training computation scales and managed distributed testing runtimes."
            ],
            tags: ["AWS", "Python", "Deep Learning", "Data Pipelines"],
            icon: "♞"
        },
        {
            move: "MOVE 03",
            stage: "MIDGAME EXPANSION",
            title: "Full-stack Development Intern",
            company: "SkillMaven",
            duration: "Dec 2023 - Jan 2024 (2 months)",
            details: [
                "Designed scalable server architectures and RESTful API controller routes.",
                "Built responsive administrative dashboards featuring interactive telemetry panels.",
                "Reduced query response speeds by implementing database indexing heuristics."
            ],
            tags: ["React", "Node.js", "MongoDB", "Express API"],
            icon: "♜"
        },
        {
            move: "MOVE 04",
            stage: "ENDGAME MASTERY",
            title: "AI & Data Science Architect",
            company: "Autonomous AI Deploys",
            duration: "Cumulative",
            details: [
                "Integrated real-time Stockfish 10 chess engine metrics via custom WASM thread loops.",
                "Implemented full-viewport cover canvas GSAP scroll-frame sequences.",
                "Created responsive bounding box computer vision floaters."
            ],
            tags: ["TensorFlow", "PyTorch", "OpenCV", "WASM", "GSAP"],
            icon: "♛"
        }
    ];

    const metrics = [
        { target: 2, label: "Internships Completed", suffix: "" },
        { target: 15, label: "AI & ML Projects", suffix: "+" },
        { target: 10, label: "Certifications", suffix: "+" },
        { target: 15, label: "Awards & Wins", suffix: "+" }
    ];

    // Hook 1: Championship Dust Particles Canvas Loop (Viewport Throttled)
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let isVisible = false;

        const resizeCanvas = () => {
            const parent = canvas.parentElement || document.body;
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Subtle floating particles representing championship dust (reduced count for performance)
        const particleCount = 30;
        const particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vy: -(Math.random() * 0.25 + 0.1), // floating upwards
                vx: (Math.random() - 0.5) * 0.12,
                radius: Math.random() * 1.2 + 0.5,
                alpha: Math.random() * 0.35 + 0.1,
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                twinkleDir: Math.random() > 0.5 ? 1 : -1
            });
        }

        const animate = () => {
            if (!isVisible) {
                animationFrameId = null;
                return;
            }
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.y += p.vy;
                p.x += p.vx;
                
                // Twinkle effect (twinkle alpha between 0.1 and 0.5)
                p.alpha += p.twinkleSpeed * p.twinkleDir;
                if (p.alpha > 0.5) {
                    p.alpha = 0.5;
                    p.twinkleDir = -1;
                } else if (p.alpha < 0.1) {
                    p.alpha = 0.1;
                    p.twinkleDir = 1;
                }

                // Recycle if they drift off bounds
                if (p.y < 0) {
                    p.y = canvas.height;
                    p.x = Math.random() * canvas.width;
                    p.alpha = Math.random() * 0.35 + 0.1;
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
        let gsapCtx = gsap.context(() => {
            // 1. General animations (active on all screens)
            
            // Timeline path drawing animation on scroll
            gsap.fromTo(".timeline-line-progress",
                { scaleY: 0, transformOrigin: "top center" },
                {
                    scaleY: 1,
                    transformOrigin: "top center",
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".timeline-container-journey",
                        start: "top 70%",
                        end: "bottom 70%",
                        scrub: true
                    }
                }
            );

            // Animate card dots as timeline reaches them
            const items = gsap.utils.toArray(".timeline-milestone-item");
            items.forEach((item) => {
                const dot = item.querySelector(".journey-milestone-dot");
                if (dot) {
                    gsap.fromTo(dot,
                        { scale: 0.5, backgroundColor: "rgba(14, 17, 24, 0.9)", borderColor: "rgba(204, 164, 59, 0.2)" },
                        {
                            scale: 1,
                            backgroundColor: "var(--accent-gold)",
                            borderColor: "var(--accent-gold-light)",
                            boxShadow: "0 0 12px var(--accent-gold)",
                            scrollTrigger: {
                                trigger: item,
                                start: "top 55%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }
            });

            // Count up stats animations
            gsap.utils.toArray(".metric-digit").forEach((digit) => {
                const targetVal = parseInt(digit.getAttribute("data-target"), 10);
                gsap.fromTo(digit,
                    { textContent: 0 },
                    {
                        textContent: targetVal,
                        duration: 2.0,
                        snap: { textContent: 1 },
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".experience-metrics-grid",
                            start: "top 90%"
                        }
                    }
                );
            });

            // Finale King card reveal
            gsap.fromTo(".timeline-finale-wrap",
                { opacity: 0, scale: 0.95, y: 40 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".timeline-finale-wrap",
                        start: "top 85%"
                    }
                }
            );

            // 2. Media query specific animations
            let mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                // Desktop-only parallax background chess pieces animation
                gsap.to(".parallax-knight", {
                    y: -80,
                    rotate: 5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });

                gsap.to(".parallax-rook", {
                    y: 90,
                    rotate: -8,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });

                gsap.to(".parallax-queen", {
                    y: -50,
                    rotate: 3,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });

                // Desktop 3D milestone rotations
                const itemsList = gsap.utils.toArray(".timeline-milestone-item");
                itemsList.forEach((item, idx) => {
                    const isLeft = idx % 2 === 0;
                    gsap.fromTo(item,
                        {
                            opacity: 0,
                            x: isLeft ? -100 : 100,
                            rotateY: isLeft ? -15 : 15,
                            scale: 0.96
                        },
                        {
                            opacity: 1,
                            x: 0,
                            rotateY: 0,
                            scale: 1,
                            duration: 1.1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: item,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                });
            });

            mm.add("(max-width: 767px)", () => {
                // Mobile-optimized simple reveals (no heavy 3D transforms, no side shifts)
                const itemsList = gsap.utils.toArray(".timeline-milestone-item");
                itemsList.forEach((item) => {
                    gsap.fromTo(item,
                        { opacity: 0, y: 30 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: item,
                                start: "top 90%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                });
            });
        }, sectionRef);

        return () => gsapCtx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="experience" className="section experience-section-cinematic">
            {/* Fullscreen Golden Particles Background Canvas */}
            <canvas ref={canvasRef} className="career-particles-canvas" />

            {/* Ambient lighting focal overlay grids */}
            <div className="experience-ambient-glow position-top-left"></div>
            <div className="experience-ambient-glow position-bottom-right"></div>
            <div className="ambient-particles-experience"></div>

            {/* Parallax Faded Chess Pieces Background */}
            <div className="chess-parallax-layer">
                {ChessSVGs.knight}
                {ChessSVGs.rook}
                {ChessSVGs.queen}
            </div>

            <div className="container">
                <div className="notation-badge">
                    <span className="badge-move">THE ENDGAME</span>
                    <span className="badge-code">CAREER TIMELINE</span>
                </div>
                
                <h2 className="section-title" style={{ minHeight: '80px', display: 'block' }}>
                    <TextType 
                        text={["THE| ENDGAME", "CAREER| TACTICS", "TIMELINE| JOURNEY"]} 
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
                <p className="section-subtitle">Experience & career journey timeline</p>

                {/* Animated Stats Counters Panel */}
                <div className="experience-metrics-grid">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="metric-box gold-border">
                            <div className="metric-number-wrap font-heading">
                                <span className="metric-digit" data-target={metric.target}>0</span>
                                <span className="metric-plus">{metric.suffix}</span>
                            </div>
                            <span className="metric-label font-mono">{metric.label}</span>
                        </div>
                    ))}
                </div>

                {/* Staggered Vertical Journey Timeline */}
                <div className="timeline-container-journey">
                    {/* Progress tracking line */}
                    <div className="timeline-line-bg"></div>
                    <div className="timeline-line-progress"></div>

                    <div className="milestones-list-journey">
                        {milestones.map((item, idx) => {
                            const isLeft = idx % 2 === 0;
                            return (
                                <div 
                                    key={idx} 
                                    className={`timeline-milestone-item ${isLeft ? 'milestone-item-left' : 'milestone-item-right'}`}
                                >
                                    {/* Central anchor node dot */}
                                    <div className="journey-milestone-dot-anchor">
                                        <div className="journey-milestone-dot">
                                            <span className="dot-inner-icon">{item.icon}</span>
                                        </div>
                                    </div>

                                    {/* Glassmorphic Description Card */}
                                    <div className="milestone-card-glass gold-border">
                                        <div className="card-perspective-inner">
                                            <div className="card-top-header">
                                                <span className="move-number-label font-mono">{item.move}</span>
                                                <span className="stage-tag font-mono">{item.stage}</span>
                                            </div>
                                            
                                            <h3 className="card-role-title">{item.title}</h3>
                                            
                                            <div className="card-company-row font-mono">
                                                <span className="company-text">{item.company}</span>
                                                <span className="meta-sep">•</span>
                                                <span className="duration-text">{item.duration}</span>
                                            </div>

                                            <ul className="card-details-list">
                                                {item.details.map((bullet, bIdx) => (
                                                    <li key={bIdx} className="details-bullet">
                                                        <span className="bullet-decor-knight">♞</span>
                                                        <p className="bullet-desc">{bullet}</p>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="card-tags-row">
                                                {item.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="milestone-tag font-mono">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Dramatic Grandmaster Finale Quote */}
                <div className="timeline-finale-wrap gold-border">
                    <div className="king-visual-wrap">
                        <div className="king-visual-bg-glow"></div>
                        {ChessSVGs.king}
                    </div>

                    <div className="finale-quote-content">
                        <span className="finale-quote-mark">“</span>
                        <blockquote className="finale-quote-text font-heading">
                            Every move was preparation. Every challenge was strategy. Every project was a step toward mastery.
                        </blockquote>
                        <cite className="finale-quote-author font-mono">— ASWANI C</cite>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

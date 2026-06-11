import React, { useEffect, useRef } from 'react';
import { Brain, BarChart3, Lightbulb, Cpu } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextType from './TextType';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const profileRef = useRef(null);

    useEffect(() => {
        // Fade up of heading and tagline
        gsap.fromTo(".about-left > *", 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

        // Staggered fade in of about cards
        gsap.fromTo(".about-card-item",
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1.0,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".about-cards-grid",
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );

        // Parallax effect on the profile card (moves slower/faster than scroll)
        gsap.fromTo(profileRef.current,
            { y: 50 },
            {
                y: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} id="about" className="section about-section">
            <div className="container about-container">
                <div className="about-left">
                    <div className="about-me-badge">
                        <svg className="about-pawn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2a3 3 0 0 1 3 3c0 .87-.37 1.66-1 2.2V9h2a2 2 0 0 1 2 2v2H6v-2a2 2 0 0 1 2-2h2V7.2c-.63-.54-1-1.33-1-2.2a3 3 0 0 1 3-3z" />
                            <path d="M19 17v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2h14z" />
                            <path d="M4 21h16v1H4z" />
                        </svg>
                        <span className="about-badge-text">ABOUT ME</span>
                    </div>

                    <h2 className="about-heading" style={{ minHeight: '120px', display: 'block' }}>
                        <TextType 
                            text={["The Mind Behind The Strategy", "AI & Data Science Architect", "Building Intelligent Systems"]} 
                            as="span"
                            typingSpeed={60}
                            deletingSpeed={35}
                            pauseDuration={2500}
                            loop={true}
                            showCursor={true}
                            cursorCharacter="|"
                            textColors={["var(--accent-gold)", "#f3f4f6"]}
                        />
                    </h2>

                    <div className="about-tagline-wrap">
                        <p className="about-tagline">
                            I'm an AI & Data Science Engineer passionate about building intelligent systems, solving real-world problems, and transforming ideas into impactful, scalable solutions.
                        </p>
                    </div>

                    <div className="about-cards-grid">
                        {[
                            { icon: <Brain size={32} />, title: "AI & Machine Learning", desc: "Building smart models that learn and adapt." },
                            { icon: <BarChart3 size={32} />, title: "Data Science & Analytics", desc: "Turning data into insights that drive better decisions." },
                            { icon: <Lightbulb size={32} />, title: "Problem Solving & Innovation", desc: "Solving complex challenges with creativity and cutting-edge technology." }
                        ].map((card, index) => (
                            <div key={index} className="about-card-item">
                                <div className="card-icon-wrap">
                                    <div className="card-icon-gold">
                                        {card.icon}
                                    </div>
                                </div>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about-right">
                    <div ref={profileRef} className="profile-container-card">
                        {/* Top right decorative dots */}
                        <div className="profile-dots">•••</div>

                        {/* Gold King chess background decoration */}
                        <div className="profile-king-bg" />

                        {/* Profile Image */}
                        <img 
                            src="/aswani-profile.png" 
                            alt="Aswani C" 
                            className="profile-display-img" 
                        />

                        {/* Bottom Floating Badge */}
                        <div className="profile-bottom-badge">
                            <div className="badge-chip-icon">
                                <Cpu size={20} className="chip-icon-gold" />
                            </div>
                            <div className="badge-text-wrap">
                                <h4>AI & Data Science Engineer</h4>
                                <p>Building the future, one algorithm at a time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

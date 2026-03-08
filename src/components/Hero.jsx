import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="container hero-container">
                <div className="hero-content animate-fade-in">
                    <p className="hero-greeting">Hi there, I'm</p>
                    <h1 className="hero-name">Aswani C</h1>
                    <h2 className="hero-tagline">
                        AI & ML student building <span className="highlight">real-time solutions</span>
                    </h2>
                    <p className="hero-description">
                        Open to internships & collaborations. Let’s build something impactful.
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="https://drive.google.com/file/d/1mDQ7o2E2HqH7ilwyGnMcMlIxI0VLEVi_/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-outline">
                            View CV <ArrowRight size={18} />
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                    <div className="hero-image-wrapper">
                        <img src="/profile.png" alt="Aswani C" className="hero-profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

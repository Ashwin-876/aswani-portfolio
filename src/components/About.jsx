import React from 'react';
import { GraduationCap, BrainCircuit, Code2 } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About <span>Me</span></h2>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I’m Aswani, a 3rd-year B.Tech student specializing in AI & Data Science at Christ the King Engineering College. I’m passionate about building real-time AI/ML applications and web solutions. I have hands-on experience through internships, workshops and competitions, and I’m actively seeking internships or collaborative projects in AI/ML and cloud.
                        </p>

                        <div className="about-highlights mt-8">
                            <div className="highlight-item">
                                <GraduationCap className="highlight-icon" />
                                <div>
                                    <h4>Education</h4>
                                    <p>B.Tech in AI & Data Science</p>
                                    <p className="text-sm text-muted">Christ the King Engineering College — 3rd Year</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <BrainCircuit className="highlight-icon" />
                                <div>
                                    <h4>AI & Machine Learning</h4>
                                    <p>Focusing on real-time models and data-driven solutions.</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <Code2 className="highlight-icon" />
                                <div>
                                    <h4>Web Solutions</h4>
                                    <p>Building responsive platforms and interactive web applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-image">
                        <div className="image-frame">
                            <div className="frame-border"></div>
                            <img
                                src="/profile.png"
                                alt="Aswani Portrait"
                                className="profile-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

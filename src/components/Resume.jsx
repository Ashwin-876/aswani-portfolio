import React from 'react';
import { Download, Quote } from 'lucide-react';
import './Resume.css';

const Resume = () => {
    const testimonials = [
        {
            name: "Dr. Sarah Johnson",
            role: "Professor of Artificial Intelligence",
            text: "Aswani is an exceptional student who consistently demonstrates a deep understanding of complex AI algorithms. Her projects are always innovative and well-executed.",
        },
        {
            name: "David Chen",
            role: "Lead Developer, Tech Hub",
            text: "During her internship, Aswani showed remarkable proficiency in Flutter. She single-handedly optimized our mobile app's performance by 30%. Highly recommended.",
        }
    ];

    return (
        <section id="resume" className="section resume-section">
            <div className="container">
                <div className="resume-container">

                    <div className="resume-download box-panel">
                        <h2 className="panel-title">My <span>Resume</span></h2>
                        <p className="panel-text">
                            View my complete educational background, technical skills, and professional experience.
                        </p>
                        <button className="btn btn-primary download-btn">
                            Download Resume (PDF) <Download size={18} />
                        </button>
                        <br />
                        <br />
                        <div className="education-timeline">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <h4>B.Tech AI & Data Science</h4>
                                <span className="timeline-date">2023 - Present (3rd Year)</span>
                                <p>Focusing on Machine Learning, Deep Learning, and Algorithm Design.</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonials box-panel">
                        <h2 className="panel-title">Mentors' <span>Remarks</span></h2>
                        <div className="testimonial-list">
                            {testimonials.map((testimonial, idx) => (
                                <div key={idx} className="testimonial-card">
                                    <Quote className="quote-icon" size={24} />
                                    <p className="testimonial-text">"{testimonial.text}"</p>
                                    <div className="testimonial-author">
                                        <h4>{testimonial.name}</h4>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Resume;

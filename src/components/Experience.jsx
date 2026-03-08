import React from 'react';
import { Briefcase, Video } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: "Full-stack Development Intern",
            company: "SkillMaven",
            duration: "2 months",
            type: "Internship",
        },
        {
            title: "Cloud with AI Training",
            company: "SkillMaven",
            duration: "1 month",
            type: "Training",
        },
        {
            title: "Web Development Intern",
            company: "Code Alpha",
            duration: "1 month",
            type: "Internship",
        }
    ];

    const workshops = [
        "Attended multiple hands-on workshops and seminars on AI",
        "Participated in Machine Learning & Deep Learning bootcamps",
        "Completed practical training sessions on Cloud Technologies"
    ];

    return (
        <section id="experience" className="section bg-alt">
            <div className="container">
                <h2 className="section-title">Internships & <span>Workshops</span></h2>
                <p className="section-subtitle">Real-world experience and continuous upskilling.</p>

                <div className="experience-container">
                    <div className="experience-list box-panel">
                        <h3 className="panel-title"><Briefcase size={24} className="panel-icon" /> Internships & Training</h3>

                        <div className="timeline">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <h4>{exp.title}</h4>
                                        <div className="timeline-meta">
                                            <span className="company">{exp.company}</span>
                                            <span className="duration">{exp.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="workshops-list box-panel">
                        <h3 className="panel-title"><Video size={24} className="panel-icon" /> Workshops & Seminars</h3>

                        <ul className="workshop-bullets">
                            {workshops.map((item, idx) => (
                                <li key={idx}>
                                    <div className="bullet-point"></div>
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

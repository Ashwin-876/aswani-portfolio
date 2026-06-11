import React from 'react';
import { Shield, Target } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            move: "MOVE 03",
            title: "Full-stack Development Intern",
            company: "SkillMaven",
            duration: "2 months",
            type: "Tactical Execution"
        },
        {
            move: "MOVE 02",
            title: "Cloud with AI Training",
            company: "SkillMaven",
            duration: "1 month",
            type: "Positioning Play"
        },
        {
            move: "MOVE 01",
            title: "Web Development Intern",
            company: "Code Alpha",
            duration: "1 month",
            type: "Opening Gambit"
        }
    ];

    const workshops = [
        "Attended multiple hands-on workshops and seminars on Advanced AI frameworks",
        "Participated in deep-learning and neural processing bootcamps",
        "Completed practical training systems on AWS & Cloud Deployment solutions"
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="notation-badge">
                    <span className="badge-move">ENDGAME</span>
                    <span className="badge-code">CAREER TIMELINE</span>
                </div>
                <h2 className="section-title">THE <span>ENDGAME</span></h2>
                <p className="section-subtitle">Experience & career journey timeline</p>

                <div className="experience-container">
                    <div className="experience-list gold-border">
                        <h3 className="panel-title"><Shield size={20} className="panel-icon" /> Tactics & Positions</h3>

                        <div className="timeline">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="timeline-item">
                                    <div className="timeline-dot-container">
                                        <span className="timeline-dot font-mono">{exp.move.split(' ')[1]}</span>
                                    </div>
                                    <div className="timeline-content">
                                        <span className="move-type font-mono">{exp.type}</span>
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

                    <div className="workshops-list gold-border">
                        <h3 className="panel-title"><Target size={20} className="panel-icon" /> Analysis & Bootcamps</h3>

                        <ul className="workshop-bullets">
                            {workshops.map((item, idx) => (
                                <li key={idx}>
                                    <div className="bullet-point font-mono">{idx + 1}</div>
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

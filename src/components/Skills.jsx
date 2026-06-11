import React from 'react';
import { Cpu, Terminal, Compass, ShieldAlert, Award, Database } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            piece: "MACHINE LEARNING",
            role: "Supervised & Unsupervised Learning",
            icon: <Database size={20} />,
            skills: ["Regression", "Classification", "Clustering", "Scikit-Learn", "Model Tuning"]
        },
        {
            piece: "DEEP LEARNING",
            role: "Neural Network Architecture",
            icon: <Cpu size={20} />,
            skills: ["TensorFlow", "CNNs", "PyTorch Basics", "Backpropagation", "Neural Design"]
        },
        {
            piece: "COMPUTER VISION",
            role: "Spatial & Image Processing",
            icon: <Terminal size={20} />,
            skills: ["OpenCV", "Object Detection", "Face Recognition", "Image Segmentation"]
        },
        {
            piece: "GENERATIVE AI",
            role: "Synthesis & Language Models",
            icon: <Compass size={20} />,
            skills: ["LLM Integration", "Prompt Engineering", "API Orchestration", "Transformers"]
        },
        {
            piece: "DATA SCIENCE",
            role: "Exploration & Analytics",
            icon: <Award size={20} />,
            skills: ["Data Wrangling", "Pandas & NumPy", "Tableau", "Power BI", "SQL Queries"]
        },
        {
            piece: "PROBLEM SOLVING",
            role: "Algorithmic Calculation",
            icon: <ShieldAlert size={20} />,
            skills: ["Data Structures", "Logical Analysis", "Computational Tactics", "Heuristic Methods"]
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="notation-badge">
                    <span className="badge-move">CALCULATIONS</span>
                    <span className="badge-code">AI EXPERTISE</span>
                </div>
                <h2 className="section-title">THE <span>CALCULATIONS</span></h2>
                <p className="section-subtitle">Deep intelligence layers and mathematical calculations</p>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card gold-border">
                            <div className="skill-card-header">
                                <div className="skill-icon-wrapper">
                                    {category.icon}
                                </div>
                                <div>
                                    <span className="piece-title font-mono">{category.piece}</span>
                                    <h3 className="piece-role">{category.role}</h3>
                                </div>
                            </div>

                            <div className="skill-tags">
                                {category.skills.map((skill, sIndex) => (
                                    <span key={sIndex} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

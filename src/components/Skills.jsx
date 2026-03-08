import React from 'react';
import { Code, Layout, Database, Settings, Cloud, PenTool } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming",
            icon: <Code size={24} />,
            skills: ["Python", "C", "C++"]
        },
        {
            title: "Web & Full-stack",
            icon: <Layout size={24} />,
            skills: ["HTML", "CSS", "JavaScript", "React", "Node.js (Basic)"]
        },
        {
            title: "Data & ML",
            icon: <Database size={24} />,
            skills: ["Machine Learning", "Deep Learning", "Model Building", "Dataset Handling"]
        },
        {
            title: "Tools",
            icon: <Settings size={24} />,
            skills: ["Tableau", "Power BI", "Canva", "Figma", "MS Office", "Advanced Excel"]
        },
        {
            title: "Cloud & DevOps",
            icon: <Cloud size={24} />,
            skills: ["Cloud Technologies (Trained)", "Firebase", "Version Control (Git)"]
        },
        {
            title: "Other",
            icon: <PenTool size={24} />,
            skills: ["UI/UX Design Basics", "Technical Writing"]
        }
    ];

    return (
        <section id="skills" className="section bg-alt">
            <div className="container">
                <h2 className="section-title">Skills & <span>Tools</span></h2>
                <p className="section-subtitle">
                    The technologies and tools I use to build scalable, intelligent applications.
                </p>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card box-panel">
                            <div className="skill-card-header">
                                <div className="skill-icon-wrapper">
                                    {category.icon}
                                </div>
                                <h3>{category.title}</h3>
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

import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ['All', 'Web', 'AI', 'ML'];

    const projectData = [
        {
            title: "Campus Meetups",
            description: "A web/mobile platform to create and join college events and meetups with RSVP & notifications.",
            techStack: ["React", "Node.js", "Firebase", "Web"],
            category: "Web",
            image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            liveLink: "#",
            githubLink: "#",
            details: "Problem: Students miss out on college events due to scattered communication. Approach: Built a centralized platform with real-time RSVP tracking and push notifications using Firebase."
        },
        {
            title: "Food Expiry System",
            description: "System/tool to track food expiry and send alerts to reduce waste.",
            techStack: ["Python", "SQL", "CRON Jobs", "Web"],
            category: "Web",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            liveLink: "#",
            githubLink: "#",
            details: "Problem: Tons of food is wasted annually in retail due to overlooked expiry dates. Approach: Developed a scheduled Python background job that queries an inventory database and dispatches alerts for near-expiry items."
        },
        {
            title: "Flood Prediction & Alert System",
            description: "AI model + alerting pipeline to predict floods and notify stakeholders.",
            techStack: ["Scikit-Learn", "Python", "Cloud Alerts", "ML"],
            category: "ML",
            image: "https://images.unsplash.com/photo-1583095125211-1358b6bd27f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            liveLink: "#",
            githubLink: "#",
            details: "Problem: Lack of early warning systems for sudden floods. Approach: Trained predictive ML models on historical weather and water level data, integrated with a cloud alert pipeline."
        },
        {
            title: "Face Recognition",
            description: "Face detection/recognition module for authentication or attendance.",
            techStack: ["OpenCV", "Python", "Deep Learning", "AI"],
            category: "AI",
            image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            liveLink: "#",
            githubLink: "#",
            details: "Problem: Manual attendance is time-consuming. Approach: Implemented a deep learning based facial recognition system utilizing OpenCV for real-time video stream processing."
        },
        {
            title: "Speech-to-Text Translator",
            description: "Real-time speech recognition and translation prototype.",
            techStack: ["Speech APIs", "ML", "Python", "AI"],
            category: "AI",
            image: "https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            liveLink: "#",
            githubLink: "#",
            details: "Problem: Language barriers in real-time communication. Approach: Built a pipeline capturing audio, feeding it to speech-to-text APIs, and translating the output in real-time."
        },
        {
            title: "Plant Disease Prediction",
            description: "Image-based classifier to detect plant diseases and suggest remedies.",
            techStack: ["CNN", "TensorFlow", "PyTorch", "ML"],
            category: "ML",
            image: "https://images.unsplash.com/photo-1530836369250-ef71a3f5e481?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            liveLink: "#",
            githubLink: "#",
            details: "Problem: Farmers lose crop yield due to unidentifiable plant diseases. Approach: Trained a Convolutional Neural Network on a dataset of diseased plant leaves to accurately classify the disease and present localized remedies."
        }
    ];

    const filteredProjects = filter === 'All' ? projectData : projectData.filter(p => p.category === filter);

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured <span>Projects</span></h2>
                <p className="section-subtitle">
                    A selection of my recent work in web development, cross-platform apps, and data science.
                </p>

                <div className="project-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image-container" onClick={() => setSelectedProject(project)}>
                                <img src={project.image} alt={project.title} className="project-img" />
                                <div className="project-overlay">
                                    <span className="view-text">Click to view details</span>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.techStack.map((tech, tIndex) => (
                                        <span key={tIndex} className="tech-badge">{tech}</span>
                                    ))}
                                </div>

                                <button onClick={() => setSelectedProject(project)} className="btn-details">
                                    View Details <ExternalLink size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Details Modal */}
                {selectedProject && (
                    <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
                        <div className="project-modal" onClick={e => e.stopPropagation()}>
                            <button className="close-modal" onClick={() => setSelectedProject(null)}>
                                <X size={24} />
                            </button>
                            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                            <div className="modal-content">
                                <h3>{selectedProject.title}</h3>
                                <p className="modal-desc">{selectedProject.description}</p>

                                <div className="modal-section">
                                    <h4>Approach & Results</h4>
                                    <p>{selectedProject.details}</p>
                                </div>

                                <div className="modal-tech">
                                    {selectedProject.techStack.map((tech, i) => (
                                        <span key={i} className="tech-badge">{tech}</span>
                                    ))}
                                </div>

                                <div className="modal-actions">
                                    <a href={selectedProject.githubLink} className="btn btn-outline" target="_blank" rel="noreferrer">
                                        <Github size={18} /> GitHub Repo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;

import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import { FolderOpen, Code, Brain, Target, Github, Heart, X, MessageSquare, Play, HelpCircle } from 'lucide-react';
import TextType from './TextType';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Define high-fidelity inline SVGs for all technologies used in the projects
const TechSVGs = {
    python: (
        <svg viewBox="0 0 24 24" width="16" height="16" className="tech-logo-svg">
            <path fill="#3776AB" d="M12 2C6.48 2 6.17 2.45 6.17 4.14v2.09h5.96v.83H3.81C2.12 7.06 2 7.57 2 12c0 4.43.12 4.94 1.81 4.94h1.72v-2.42c0-1.8 1.48-3.28 3.28-3.28h5.96c1.8 0 3.28-1.48 3.28-3.28V5.86c0-1.8-1.48-3.28-3.28-3.28H12zm2.09 1.76c.46 0 .83.37.83.83 0 .46-.37.83-.83.83-.46 0-.83-.37-.83-.83 0-.46.37-.83.83-.83z"/>
            <path fill="#FFD343" d="M12 22c5.52 0 5.83-.45 5.83-2.14v-2.09h-5.96v-.83h8.32c1.69 0 1.81-.51 1.81-4.94 0-4.43-.12-4.94-1.81-4.94h-1.72v2.42c0 1.8-1.48 3.28-3.28 3.28H11.23c-1.8 0-3.28 1.48-3.28 3.28v2.12c0 1.8 1.48 3.28 3.28 3.28H12zm-2.09-1.76c-.46 0-.83-.37-.83-.83 0-.46.37-.83.83-.83s.83.37.83.83c0 .46-.37.83-.83.83z"/>
        </svg>
    ),
    tensorflow: (
        <svg viewBox="0 0 24 24" width="16" height="16" className="tech-logo-svg">
            <path fill="#FF6F00" d="M12 2.69l9.31 5.37v10.74L12 24.17l-9.31-5.37V8.06L12 2.69M12 1.92L1.87 7.62v11.69L12 25l10.13-5.69V7.62L12 1.92z"/>
        </svg>
    ),
    opencv: (
        <svg viewBox="0 0 24 24" width="16" height="16" className="tech-logo-svg">
            <circle cx="12" cy="7" r="4.5" fill="none" stroke="#FF2E2E" strokeWidth="2.5"/>
            <circle cx="7.5" cy="15" r="4.5" fill="none" stroke="#00D200" strokeWidth="2.5"/>
            <circle cx="16.5" cy="15" r="4.5" fill="none" stroke="#2E2EFF" strokeWidth="2.5"/>
        </svg>
    ),
    numpy: (
        <svg viewBox="0 0 24 24" width="16" height="16" className="tech-logo-svg">
            <path fill="#4DABCF" d="M12 2.2L3.5 7.1v9.8L12 21.8l8.5-4.9V7.1L12 2.2zm0 1.7l6.8 3.9v7.8l-6.8 3.9-6.8-3.9V7.8L12 3.9z"/>
        </svg>
    ),
    pandas: (
        <svg viewBox="0 0 24 24" width="16" height="16" className="tech-logo-svg">
            <rect x="3" y="10" width="4" height="11" fill="#150458"/>
            <rect x="10" y="6" width="4" height="15" fill="#E70488"/>
            <rect x="17" y="3" width="4" height="18" fill="#FFC000"/>
        </svg>
    ),
    scikitlearn: (
        <svg viewBox="0 0 24 24" width="16" height="16" className="tech-logo-svg">
            <circle cx="12" cy="12" r="9" fill="none" stroke="#F7931E" strokeWidth="2"/>
            <circle cx="12" cy="12" r="3" fill="#0076B2"/>
        </svg>
    ),
    matplotlib: (
        <svg viewBox="0 0 24 24" width="16" height="16" className="tech-logo-svg">
            <path d="M6 16c2-4 4-7 6-7s4 2 6 7" fill="none" stroke="#FF5722" strokeWidth="2"/>
            <circle cx="12" cy="12" r="9" fill="none" stroke="#11557c" strokeWidth="1"/>
        </svg>
    ),
    transformers: (
        <svg viewBox="0 0 24 24" width="16" height="16" className="tech-logo-svg">
            <path fill="#FFD21E" d="M12 2a10 10 0 0 0-10 10c0 4.1 2.5 7.6 6 9.1v-2.3a7.8 7.8 0 0 1-4-6.8c0-4.3 3.5-7.8 8-7.8s8 3.5 8 7.8a7.8 7.8 0 0 1-4 6.8v2.3c3.5-1.5 6-5 6-9.1A10 10 0 0 0 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/>
        </svg>
    ),
    nltk: (
        <svg viewBox="0 0 24 24" width="16" height="16" className="tech-logo-svg">
            <path fill="#3F91DF" d="M4 4h16v16H4zM6 6v12h12V6zm2 2h8v2H8zm0 4h8v2H8zm0 4h5v2H8z"/>
        </svg>
    ),
    flask: (
        <svg viewBox="0 0 24 24" width="16" height="16" className="tech-logo-svg">
            <path fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" d="M19 19c-1.5-3.5-3-5.5-3-8.5V4h-1V3H9v1h-1v6.5c0 3-1.5 5-3 8.5C3.5 20.5 4.5 22 6.5 22h11c2 0 3-1.5 1.5-3z"/>
        </svg>
    ),
    yolov8: (
        <svg viewBox="0 0 24 24" width="16" height="16" className="tech-logo-svg">
            <rect x="3" y="3" width="18" height="18" fill="none" stroke="#00D200" strokeWidth="2"/>
            <path fill="#00D200" d="M9 9h6v6H9z"/>
        </svg>
    ),
    torch: (
        <svg viewBox="0 0 24 24" width="16" height="16" className="tech-logo-svg">
            <path fill="#EE4C2C" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1.69 13.91c-.26-.1-.5-.22-.72-.37s-.42-.32-.59-.51c-.17-.19-.3-.39-.4-.61s-.14-.43-.14-.65h-.06c-.02.26-.08.52-.18.76s-.25.46-.46.66c-.21.2-.46.36-.76.47s-.63.17-.99.17c-.52 0-.96-.1-1.32-.3s-.65-.47-.87-.8c-.22-.33-.37-.7-.44-1.12-.07-.42-.11-.84-.11-1.28V9.17h1.69v4.2c0 .28.01.55.03.82.02.27.07.51.15.72s.21.37.4.49c.19.12.45.18.79.18.32 0 .57-.05.77-.16s.35-.26.47-.46c.12-.2.19-.44.22-.71.03-.27.05-.56.05-.86V9.17h1.69v4.25c0 .3.02.58.05.86.03.28.1.53.22.74c.12.21.28.37.49.49c.21.12.47.18.8.18c.33 0 .59-.06.77-.18c.18-.12.32-.28.4-.49c.08-.21.13-.45.15-.72s.03-.55.03-.84V9.17H19v4.28c0 .44-.04.86-.11 1.28c-.07.42-.22.79-.44 1.12c-.22.33-.51.6-.87.8c-.36.2-.8.3-1.32.3c-.57 0-1.09-.13-1.57-.42z"/>
        </svg>
    ),
    streamlit: (
        <svg viewBox="0 0 24 24" width="16" height="16" className="tech-logo-svg">
            <path fill="#FF4B4B" d="M12 2L2 14h20L12 2zm0 5l6.5 8H5.5L12 7zm0 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
        </svg>
    ),
    plotly: (
        <svg viewBox="0 0 24 24" width="16" height="16" className="tech-logo-svg">
            <path fill="none" stroke="#3F4F75" strokeWidth="2.5" d="M3 21h18M3 21V3M6 16l4-5 5 4 6-9"/>
        </svg>
    )
};

const Projects = () => {
    const [filter, setFilter] = useState('All Projects');
    const [selectedProject, setSelectedProject] = useState(null);
    const [favorites, setFavorites] = useState({});
    
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        // Project cards are now animated via the global useScrollReveal hook 
        // which adds staggered slide-up animations to all .project-card elements.
    }, [filter]);

    useEffect(() => {
        let gsapCtx = gsap.context(() => {
            // Stagger reveal of stats cards
            const statCards = gsap.utils.toArray(".projects-stats-grid .stat-card");
            gsap.fromTo(statCards,
                { opacity: 0, y: 25, scale: 0.96 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    stagger: 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".projects-stats-grid",
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // Animate counter digits
            const counters = gsap.utils.toArray(".projects-stats-grid .stat-number");
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute("data-target"), 10);
                gsap.fromTo(counter, 
                    { textContent: 0 },
                    { 
                        textContent: target,
                        duration: 1.8,
                        ease: "power2.out",
                        snap: { textContent: 1 },
                        scrollTrigger: {
                            trigger: counter,
                            start: "top 90%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            });
        }, sectionRef);

        return () => gsapCtx.revert();
    }, []);

    const categories = [
        'All Projects',
        'AI / ML',
        'Data Science',
        'Computer Vision',
        'Web Development',
        'NLP'
    ];

    const stats = [
        { target: 15, label: "Projects", icon: <FolderOpen size={20} className="stat-icon" />, suffix: "+" },
        { target: 6, label: "Technologies", icon: <Code size={20} className="stat-icon" />, suffix: "+" },
        { target: 10, label: "ML Models", icon: <Brain size={20} className="stat-icon" />, suffix: "+" },
        { target: 100, label: "Dedication", icon: <Target size={20} className="stat-icon" />, suffix: "%" }
    ];

    const projectData = [
        {
            title: "Brain Tumor Detection",
            category: "Computer Vision",
            tags: ["Computer Vision", "AI / ML"],
            image: "/images/brain_tumor.webp",
            description: "Deep learning model to detect and classify brain tumors from MRI scans with high accuracy.",
            techStack: [
                { name: "Python", icon: TechSVGs.python },
                { name: "TensorFlow", icon: TechSVGs.tensorflow },
                { name: "OpenCV", icon: TechSVGs.opencv },
                { name: "Numpy", icon: TechSVGs.numpy }
            ],
            githubLink: "https://github.com",
            details: "Constructed a convolutional neural network (CNN) model leveraging deep learning layers to read biological MRI images. Used OpenCV for image manipulation and noise reduction, processing tumor identification parameters dynamically."
        },
        {
            title: "Stock Price Prediction",
            category: "Data Science",
            tags: ["Data Science", "AI / ML"],
            image: "/images/stock_prediction.webp",
            description: "LSTM based model to predict stock prices using historical data and technical indicators.",
            techStack: [
                { name: "Python", icon: TechSVGs.python },
                { name: "Pandas", icon: TechSVGs.pandas },
                { name: "Scikit-learn", icon: TechSVGs.scikitlearn },
                { name: "Matplotlib", icon: TechSVGs.matplotlib }
            ],
            githubLink: "https://github.com",
            details: "Formulated a Long Short-Term Memory (LSTM) recurrent neural network framework to learn dynamic historical price adjustments. Handled predictive data scaling, moving average curves, and variance predictions."
        },
        {
            title: "AI Chatbot Assistant",
            category: "NLP",
            tags: ["NLP", "AI / ML"],
            image: "/images/ai_chatbot.webp",
            description: "Intelligent chatbot using NLP and Transformers to understand and respond to user queries.",
            techStack: [
                { name: "Python", icon: TechSVGs.python },
                { name: "Transformers", icon: TechSVGs.transformers },
                { name: "NLTK", icon: TechSVGs.nltk },
                { name: "Flask", icon: TechSVGs.flask }
            ],
            githubLink: "https://github.com",
            details: "Implemented conversational AI using state-of-the-art HuggingFace transformer modules. Handled context pipelines, sequence tokenization, and built a lightweight Flask microservice endpoint for client deployment."
        },
        {
            title: "Real-time Object Detection",
            category: "Computer Vision",
            tags: ["Computer Vision", "AI / ML"],
            image: "/images/object_detection.webp",
            description: "YOLOv8 based real-time object detection system for identifying multiple objects in images and video.",
            techStack: [
                { name: "Python", icon: TechSVGs.python },
                { name: "YOLOv8", icon: TechSVGs.yolov8 },
                { name: "OpenCV", icon: TechSVGs.opencv },
                { name: "Torch", icon: TechSVGs.torch }
            ],
            githubLink: "https://github.com",
            details: "Built a high-performance computer vision tool using YOLOv8 architectures. The pipeline ingests multi-channel video captures to identify vehicles and pedestrian targets in real-time with sub-millisecond execution latency."
        },
        {
            title: "Sales Dashboard Analytics",
            category: "Data Science",
            tags: ["Data Science", "Web Development"],
            image: "/images/sales_dashboard.webp",
            description: "Interactive dashboard for sales insights, data visualization and business decision making.",
            techStack: [
                { name: "Python", icon: TechSVGs.python },
                { name: "Streamlit", icon: TechSVGs.streamlit },
                { name: "Pandas", icon: TechSVGs.pandas },
                { name: "Plotly", icon: TechSVGs.plotly }
            ],
            githubLink: "https://github.com",
            details: "Constructed a responsive, dark-themed analytic command board using Streamlit. Leveraged Pandas structures to perform data queries and Plotly visualizations to render regional sales trends."
        },
        {
            title: "Fake News Detection",
            category: "NLP",
            tags: ["NLP", "AI / ML"],
            image: "/images/fake_news.webp",
            description: "Machine learning model to detect fake news articles based on text features and NLP techniques.",
            techStack: [
                { name: "Python", icon: TechSVGs.python },
                { name: "Scikit-learn", icon: TechSVGs.scikitlearn },
                { name: "NLTK", icon: TechSVGs.nltk },
                { name: "Pandas", icon: TechSVGs.pandas }
            ],
            githubLink: "https://github.com",
            details: "Engineered a textual classification pipeline utilizing Term Frequency-Inverse Document Frequency (TF-IDF) feature matrix matrices. Trained binary classification algorithms to evaluate and stamp misinformation alerts."
        }
    ];

    const toggleFavorite = (projectTitle, e) => {
        e.stopPropagation();
        setFavorites(prev => ({
            ...prev,
            [projectTitle]: !prev[projectTitle]
        }));
    };

    // Filter projects based on selected tag/category
    const filteredProjects = filter === 'All Projects' 
        ? projectData 
        : projectData.filter(p => p.tags.includes(filter));

    const notations = [
      "[person: 97%]",
      "[vehicle: 94%]",
      "[laptop: 91%]",
      "[chair: 88%]",
      "[cup: 85%]",
      "[backpack: 82%]"
    ];

    return (
        <section id="projects" className="section projects-section-modern" ref={sectionRef}>
            <div className="container">
                {/* Chess constellation grid background overlay */}
                <div className="constellation-grid-overlay"></div>

                {/* Ambient notations floating on the right side */}
                {notations.map((note, idx) => (
                    <span 
                        key={idx} 
                        className="chess-note-drift font-mono" 
                        style={{
                            top: `${18 + (idx * 13)}%`,
                            right: '4%',
                            animationDelay: `${idx * 1.5}s`
                        }}
                    >
                        {note}
                    </span>
                ))}

                {/* Centered Header Container */}
                <div className="projects-header-centered">
                    <div className="projects-header-content">
                        <div className="works-badge-container">
                            <div className="badge-trim-line"></div>
                            <div className="works-badge-inner">
                                <span className="works-piece-icon">♟</span>
                                <span className="works-badge-text">MY WORKS</span>
                            </div>
                            <div className="badge-trim-line"></div>
                        </div>

                        <h2 className="projects-main-title" style={{ minHeight: '80px', display: 'block' }}>
                            <TextType 
                                text={["|PROJECTS", "PORTFOLIO| DEPLOYS", "AI| INITIATIVES"]} 
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
                        <p className="projects-tagline">Ideas. Strategized. Built. Deployed.</p>
                        <p className="projects-description-lead">
                            A collection of AI & Data Science projects where strategy meets technology to solve real-world problems.
                        </p>

                        {/* Folder, code, brain, target stats panel */}
                        <div className="projects-stats-grid">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="stat-card gold-border">
                                    <div className="stat-icon-container">
                                        {stat.icon}
                                    </div>
                                    <div className="stat-info">
                                        <div className="stat-number-row">
                                            <span className="stat-number" data-target={stat.target}>0</span>
                                            <span className="stat-suffix">{stat.suffix}</span>
                                        </div>
                                        <span className="stat-label font-mono">{stat.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Categories Navigation Pills */}
                <div className="pills-navigation-bar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`navigation-pill-btn font-mono ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Horizontal Scroll track */}
                <div className="horizontal-scroll-container">
                    <div className="horizontal-scroll-track" ref={trackRef}>
                        {filteredProjects.map((project, index) => (
                            <div key={index} className="project-card-modern gold-border" onClick={() => setSelectedProject(project)}>
                                {/* Card Media Header */}
                                <div className="card-media-wrapper">
                                    <img src={project.image} alt={project.title} className="card-img" />
                                    <div className="card-image-gradient"></div>
                                    
                                    {/* Heart/Favorite button */}
                                    <button 
                                        className={`heart-fave-btn ${favorites[project.title] ? 'favorited' : ''}`}
                                        onClick={(e) => toggleFavorite(project.title, e)}
                                    >
                                        <Heart size={15} fill={favorites[project.title] ? "var(--accent-gold)" : "none"} />
                                    </button>
                                </div>

                                {/* Card text content */}
                                <div className="card-body-wrapper">
                                    <div className="card-badge-row">
                                        <span className="card-category-badge font-mono">{project.category}</span>
                                    </div>
                                    <h3 className="card-project-title">{project.title}</h3>
                                    <p className="card-project-desc">{project.description}</p>

                                    {/* Inline tech stack SVGs */}
                                    <div className="card-tech-badges">
                                        {project.techStack.map((tech, tIdx) => (
                                            <div key={tIdx} className="tech-badge-inline" title={tech.name}>
                                                <div className="tech-icon-circle">
                                                    {tech.icon}
                                                </div>
                                                <span className="tech-badge-name font-mono">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <span className="card-action-link font-mono">
                                        View Project <span className="arrow">→</span>
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Final CTA Card inside the horizontal track */}
                        <div className="project-card-modern cta-slide gold-border">
                            <div className="cta-slide-inner">
                                <div className="cta-slide-icon-wrapper">
                                    <svg viewBox="0 0 448 512" width="45" height="50" className="cta-knight-icon">
                                        <path 
                                            fill="var(--accent-gold)" 
                                            d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5l0 132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400l320 0c0-20 9.9-38.7 26.4-50L250.7 232.8c-10.6-7.2-10.9-22.6-.7-30.3c6.6-5 15.7-5 22.3 0l49.4 37c2.3 1.7 4.7 3.2 7.3 4.5l3.2 1.6c15.4 7.7 33.8 6.6 48.1-3l10.6-7c8.9-5.9 14.2-15.9 14.2-26.6V106.5c0-17-6.7-33.2-18.7-45.2L352 48l-256 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="cta-slide-title">Every project is a move towards mastery.</h3>
                                <p className="cta-slide-desc">
                                    I build solutions that <span className="gold-emphasis">create impact.</span>
                                </p>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline cta-github-btn">
                                    <Github size={16} /> More on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Details Modal Popup */}
                {selectedProject && (
                    <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
                        <div className="project-modal-container gold-border" onClick={e => e.stopPropagation()}>
                            <button className="close-modal-btn" onClick={() => setSelectedProject(null)}>
                                <X size={18} />
                            </button>
                            <img src={selectedProject.image} alt={selectedProject.title} className="modal-top-banner" />
                            
                            <div className="modal-body-content">
                                <span className="modal-category font-mono">{selectedProject.category}</span>
                                <h3 className="modal-title">{selectedProject.title}</h3>
                                <p className="modal-desc">{selectedProject.description}</p>
                                
                                <div className="modal-section-details">
                                    <h4 className="font-mono modal-sec-title">METHODOLOGY & STRATEGY</h4>
                                    <p className="modal-details-para">{selectedProject.details}</p>
                                </div>

                                <div className="modal-tech-row">
                                    {selectedProject.techStack.map((tech, i) => (
                                        <div key={i} className="tech-badge-inline">
                                            <div className="tech-icon-circle">
                                                {tech.icon}
                                            </div>
                                            <span className="tech-badge-name font-mono">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="modal-actions-bar">
                                    <a href={selectedProject.githubLink} className="btn btn-primary" target="_blank" rel="noreferrer">
                                        <Github size={16} /> View Code on GitHub
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

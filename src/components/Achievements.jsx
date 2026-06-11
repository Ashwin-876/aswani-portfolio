import React from 'react';
import './Achievements.css';
import { Award, Trophy, Star, Shield, Users, Code, FileText, Calendar, CheckSquare, Sparkles } from 'lucide-react';

// Detailed inline SVGs and custom render badges for the 8 recognitions
const RecognitionIcons = {
    trophy: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <path fill="currentColor" d="M18 2H6v2H2v3c0 3.2 2.1 5.8 5 6.7V17c0 1.1.9 2 2 2h2v2H8v2h8v-2h-4v-2h2c1.1 0 2-.9 2-2v-3.3c2.9-.9 5-3.5 5-6.7V4h-4V2zM4 7V6h2v3.8C4.8 9 4 8.1 4 7zm16 0c0 1.1-.8 2-2 2.8V6h2v1z"/>
        </svg>
    ),
    firstPlace: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <circle cx="12" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path fill="currentColor" d="M11 6h2v6h-2zM12 3a8 8 0 0 0-8 8c0 3.5 2.2 6.5 5.5 7.5l-1.5 3.5h8l-1.5-3.5c3.3-1 5.5-4 5.5-7.5a8 8 0 0 0-8-8z"/>
            <text x="12" y="11" fill="currentColor" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">1st</text>
        </svg>
    ),
    excellence: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
    ),
    bestProject: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <path fill="none" stroke="currentColor" strokeWidth="2" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <path fill="none" stroke="currentColor" strokeWidth="2" d="M14 2v6h6M9 15l2 2 4-4"/>
        </svg>
    ),
    codeInnovation: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 7l-4 10"/>
        </svg>
    ),
    finalist: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
    ),
    teamLeadership: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5S5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
    ),
    merit: (
        <svg viewBox="0 0 24 24" width="22" height="22" className="recog-svg-icon">
            <circle cx="12" cy="8" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path fill="currentColor" d="M9 12l-2 8 5-2 5 2-2-8z"/>
        </svg>
    )
};

const Achievements = () => {
    const stats = [
        { count: "15+", label: "Awards Earned", icon: <Award size={20} className="award-stat-icon" /> },
        { count: "10+", label: "Competitions Won", icon: <Trophy size={20} className="award-stat-icon" /> },
        { count: "5+", label: "Hackathons", icon: <Star size={20} className="award-stat-icon" /> },
        { count: "100%", label: "Dedication", icon: <Shield size={20} className="award-stat-icon" /> }
    ];

    const recognitions = [
        {
            title: "Winner",
            subtitle: "Smart India Hackathon 2024",
            description: "Developed an AI-powered solution for real-time waste management and smart monitoring.",
            date: "Mar 2024",
            icon: RecognitionIcons.trophy,
            color: "#cca43b" // Gold
        },
        {
            title: "1st Place",
            subtitle: "AI Model Building Competition",
            description: "Secured first place for creating a high accuracy ML model for predictive healthcare analytics.",
            date: "Jan 2024",
            icon: RecognitionIcons.firstPlace,
            color: "#A259FF" // Purple
        },
        {
            title: "Excellence Award",
            subtitle: "Data Science Summit 2024",
            description: "Recognized for outstanding performance in data analysis and impactful visualization storytelling.",
            date: "Aug 2024",
            icon: RecognitionIcons.excellence,
            color: "#e5c158" // Yellow-Gold
        },
        {
            title: "Best Project Award",
            subtitle: "College Tech Fest 2024",
            description: "Awarded for building an innovative AI chatbot with NLP and context understanding.",
            date: "Sep 2024",
            icon: RecognitionIcons.bestProject,
            color: "#2EB67D" // Green
        },
        {
            title: "Code Innovation Award",
            subtitle: "Hack The Future 2023",
            description: "Honored for writing efficient, scalable and optimized code in the hackathon project development.",
            date: "Nov 2023",
            icon: RecognitionIcons.codeInnovation,
            color: "#FF6C37" // Orange
        },
        {
            title: "Finalist",
            subtitle: "National ML Challenge 2023",
            description: "Selected among top finalists for building a robust ML solution for real-world problem statement.",
            date: "Oct 2023",
            icon: RecognitionIcons.finalist,
            color: "#3F91DF" // Blue
        },
        {
            title: "Team Leadership Award",
            subtitle: "TechNova Hackathon 2023",
            description: "Recognized for leadership, teamwork and delivering a high-impact AI solution.",
            date: "Jul 2023",
            icon: RecognitionIcons.teamLeadership,
            color: "#8C62FF" // Purple-Blue
        },
        {
            title: "Certificate of Merit",
            subtitle: "Python Programming Challenge",
            description: "Awarded for exceptional problem solving skills and achieving highest score.",
            date: "May 2023",
            icon: RecognitionIcons.merit,
            color: "#E01E5A" // Red
        }
    ];

    return (
        <section id="achievements" className="section achievements-section-modern">
            <div className="container">
                {/* Chess background elements */}
                <div className="chessboard-grid-depth"></div>

                {/* Section Header Centered */}
                <div className="achievements-header-centered">
                    <div className="achievements-badge-row">
                        <div className="achieve-badge-line"></div>
                        <div className="achieve-badge-inner">
                            <span className="achieve-badge-icon">🏆</span>
                            <span className="achieve-badge-text">ACHIEVEMENTS</span>
                        </div>
                        <div className="achieve-badge-line"></div>
                    </div>

                    <h2 className="achievements-main-title">AWARDS & RECOGNITIONS</h2>
                    <p className="achievements-subtitle-lead">
                        Milestones that motivate me to keep challenging, learning, and building impact.
                    </p>

                    <div className="achieve-decor-divider">
                        <span className="achieve-decor-line"></span>
                        <span className="achieve-pawn-decor">♟</span>
                        <span className="achieve-decor-line"></span>
                    </div>

                    {/* Four pillars counters */}
                    <div className="achievements-counters-grid">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="achieve-stat-card gold-border">
                                <div className="achieve-stat-icon-wrapper">
                                    {stat.icon}
                                </div>
                                <div className="achieve-stat-text">
                                    <span className="achieve-stat-number">{stat.count}</span>
                                    <span className="achieve-stat-label font-mono">{stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recognitions Header Divider */}
                <div className="my-recognitions-divider">
                    <span className="divider-trim"></span>
                    <span className="divider-label font-mono">MY RECOGNITIONS</span>
                    <span className="divider-trim"></span>
                </div>

                {/* 4-Column Recognitions Grid */}
                <div className="recognitions-grid-modern">
                    {recognitions.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="recognition-card gold-border"
                            style={{ '--accent-theme': item.color }}
                        >
                            {/* Circular Icon Circle */}
                            <div className="recognition-icon-circle" style={{ color: item.color, backgroundColor: `rgba(${parseInt(item.color.slice(1,3),16)}, ${parseInt(item.color.slice(3,5),16)}, ${parseInt(item.color.slice(5,7),16)}, 0.06)` }}>
                                {item.icon}
                            </div>

                            {/* Texts */}
                            <div className="recognition-texts">
                                <h3 className="recognition-title" style={{ color: item.color }}>{item.title}</h3>
                                <h4 className="recognition-subtitle">{item.subtitle}</h4>
                                <p className="recognition-desc">{item.description}</p>
                            </div>

                            {/* Date Badge */}
                            <div className="recognition-date-badge font-mono">
                                <Calendar size={12} className="calendar-icon" />
                                {item.date}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quote testmonial card at the bottom */}
                <div className="achievements-quote-footer gold-border">
                    <span className="achieve-quote-symbol">“</span>
                    <p className="achieve-quote-paragraph">
                        Every award is a reminder that consistency in <span className="highlight-strategy">strategy</span> leads to <span className="highlight-excellence">excellence</span> in results.
                    </p>
                    <div className="achieve-knight-watermark">
                        <svg viewBox="0 0 448 512" width="60" height="70">
                            <path 
                                fill="rgba(204, 164, 59, 0.025)" 
                                stroke="rgba(204, 164, 59, 0.05)" 
                                strokeWidth="0.5"
                                d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5l0 132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400l320 0c0-20 9.9-38.7 26.4-50L250.7 232.8c-10.6-7.2-10.9-22.6-.7-30.3c6.6-5 15.7-5 22.3 0l49.4 37c2.3 1.7 4.7 3.2 7.3 4.5l3.2 1.6c15.4 7.7 33.8 6.6 48.1-3l10.6-7c8.9-5.9 14.2-15.9 14.2-26.6V106.5c0-17-6.7-33.2-18.7-45.2L352 48l-256 0z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;

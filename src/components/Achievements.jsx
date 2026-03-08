import React from 'react';
import { Award, Users, Target, Globe } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
    return (
        <section id="achievements" className="section">
            <div className="container">
                <h2 className="section-title">Beyond <span>Academics</span></h2>
                <p className="section-subtitle">
                    Awards, leadership roles, and my passion for chess.
                </p>

                <div className="achievements-grid">

                    {/* Awards Section */}
                    <div className="box-panel grid-span-2">
                        <div className="panel-header">
                            <Award className="panel-icon" size={28} />
                            <h3 className="panel-title-inline">Achievements & Awards</h3>
                        </div>
                        <ul className="bullet-list">
                            <li><strong>1st Place</strong> — National level Cyberathon at KUCAS.</li>
                            <li><strong>2nd Place</strong> — Project Presentation: Plant Disease Prediction.</li>
                            <li><strong>1st Place</strong> — Nanotechnology paper presentation.</li>
                            <li><strong>1st Place</strong> — College level chess tournament.</li>
                            <li><strong>2nd Place</strong> — Nilgiri district chess championship.</li>
                            <li><strong>1st Place</strong> — Technical quiz at PPG City of Engineering.</li>
                            <li>Participated in state-level chess events and Chess Olympiad (Chennai).</li>
                            <li>Participated in an international conference at Christ the King Engineering College.</li>
                        </ul>
                    </div>

                    {/* Extracurriculars */}
                    <div className="box-panel">
                        <div className="panel-header">
                            <Target className="panel-icon" size={28} />
                            <h3 className="panel-title-inline">Extracurriculars</h3>
                        </div>
                        <div className="extracurricular-content">
                            <h4>Chess Enthusiast</h4>
                            <p className="text-muted mt-2">
                                Multiple district and state-level participations and awards. Served as a chess academy coach for 1 year, training juniors and organizing local tournaments.
                            </p>
                        </div>
                    </div>

                    {/* Leadership */}
                    <div className="box-panel">
                        <div className="panel-header">
                            <Users className="panel-icon" size={28} />
                            <h3 className="panel-title-inline">Leadership & Volunteering</h3>
                        </div>
                        <ul className="bullet-list">
                            <li><strong>7 years</strong> of leadership experience in school (student parliament / club leadership).</li>
                            <li><strong>~8 years</strong> Volunteer & member of Dr. APJ Abdul Kalam Vizhudugal Academy.</li>
                        </ul>
                    </div>

                    {/* Languages */}
                    <div className="box-panel">
                        <div className="panel-header">
                            <Globe className="panel-icon" size={28} />
                            <h3 className="panel-title-inline">Languages</h3>
                        </div>
                        <div className="language-tags mt-4">
                            <span className="skill-tag">Tamil</span>
                            <span className="skill-tag">English</span>
                            <span className="skill-tag">Malayalam</span>
                            <span className="skill-tag">Kannada</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Achievements;

import React, { useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin, Download } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for your strategic proposal! Aswani will respond to your move shortly.");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="notation-badge">
                    <span className="badge-move">CHECKMATE</span>
                    <span className="badge-code">COLLABORATION</span>
                </div>
                <h2 className="section-title">THE <span>CHECKMATE</span></h2>
                <p className="section-subtitle">Contact & collaboration initiatives</p>

                <div className="contact-container gold-border">
                    <div className="contact-info">
                        <h3>Initiate Contact</h3>
                        <p className="contact-desc text-muted">
                            The board is set, and the calculations are complete. Propose your next move (internships, collaborations, or general consultation).
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <h4 className="font-mono">ENCRYPTED MAIL</h4>
                                    <p>aswanichandrakumar@gmail.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <h4 className="font-mono">COMMS LINE</h4>
                                    <p>+91 936XXXXXX</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/aswanichandrakumar" target="_blank" rel="noreferrer" aria-label="Github"><Github size={18} /></a>
                            <a href="https://linkedin.com/in/aswanic" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                        </div>

                        <div className="mt-8">
                            <a href="https://drive.google.com/file/d/1mDQ7o2E2HqH7ilwyGnMcMlIxI0VLEVi_/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-outline font-mono">
                                STRATEGIC BRIEF (PDF) <Download size={14} />
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <h3 className="font-mono text-gradient" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>MAKE YOUR MOVE</h3>
                            <div className="form-group">
                                <label htmlFor="name" className="font-mono">SIGNATURE (YOUR NAME)</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="font-mono">COMMS LINK (YOUR EMAIL)</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject" className="font-mono">GAMBIT DETAILS (SUBJECT)</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="e.g. Project Proposal / Internship"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="font-mono">STRATEGIC PROPOSAL (MESSAGE)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Draft message contents..."
                                    rows="4"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn font-mono">
                                TRANSMIT ACTION <Send size={14} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

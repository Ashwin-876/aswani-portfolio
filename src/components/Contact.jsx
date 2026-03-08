import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Download } from 'lucide-react';
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
        alert("Thanks for your message! This is a demo form.");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="section contact-section bg-alt">
            <div className="container">
                <h2 className="section-title">Get In <span>Touch</span></h2>
                <p className="section-subtitle">
                    I’m available for internships & collaborative projects — let’s build something impactful. Contact me!
                </p>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p className="contact-desc text-muted">
                            Feel free to reach out directly via email or mobile, or connect with me on LinkedIn and GitHub.
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>aswanichandrakumar@gmail.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4>Mobile</h4>
                                    <p>+91 936XXXXXX</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/aswanichandrakumar" target="_blank" rel="noreferrer" aria-label="Github"><Github size={20} /></a>
                            <a href="https://linkedin.com/in/aswanic" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        </div>

                        <div className="mt-8">
                            <a href="https://drive.google.com/file/d/1mDQ7o2E2HqH7ilwyGnMcMlIxI0VLEVi_/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-outline">
                                View Resume (PDF) <Download size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form box-panel">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Proposal / Internship"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Hello Aswani, I would like to discuss..."
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <a href="#home" className="logo text-gradient">Aswani C</a>
                    <p className="footer-text">
                        Building intelligent systems and elegant interfaces.
                    </p>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Aswani C. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#projects">Projects</a>
                        <a href="#resume">Resume</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

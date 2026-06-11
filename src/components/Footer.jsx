import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <a href="#home" className="logo">
                        GRANDMASTER <span className="logo-sub">ASWANI</span>
                    </a>
                    <p className="footer-text">
                        Formulating calculations and executing tactical systems for digital transformation.
                    </p>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Aswani C. All rights reserved.</p>
                    <div className="footer-links font-mono">
                        <a href="#home">Opening</a>
                        <a href="#about">Calculations</a>
                        <a href="#skills">Arsenal</a>
                        <a href="#projects">Gambits</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

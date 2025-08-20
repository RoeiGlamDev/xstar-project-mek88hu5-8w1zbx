import React from 'react';
import './AboutPage.css'; // Importing CSS for styling

const AboutPage: React.FC = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1 className="about-title">Welcome to GlamCS</h1>
                <p className="about-subtitle">Elevate Your Beauty Experience</p>
            </header>
            <section className="about-content">
                <h2 className="about-section-title">Our Philosophy</h2>
                <p className="about-text">
                    At GlamCS, we believe in the power of luxury and elegance. Our products are designed to enhance your natural beauty with high-quality ingredients and innovative 3D designs.
                </p>
                <h2 className="about-section-title">Why Choose Us?</h2>
                <ul className="about-list">
                    <li>Premium Quality Ingredients</li>
                    <li>Elegant Packaging</li>
                    <li>Exceptional Customer Service</li>
                </ul>
            </section>
            <footer className="about-footer">
                <p className="footer-text">© 2023 GlamCS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;
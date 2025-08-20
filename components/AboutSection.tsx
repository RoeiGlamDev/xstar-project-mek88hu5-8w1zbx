import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">Welcome to GlamCS</h1>
                <p className="about-description">
                    Discover the elegance of high-end cosmetics crafted for the modern individual. 
                    Our luxurious products are designed to enhance your natural beauty with a touch of glamour.
                </p>
                <div className="about-3d-effect">
                    {/* 3D design effect can be implemented here */}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
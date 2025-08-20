import React from 'react';
import { Parallax } from 'react-parallax';
import './ParallaxSection.css'; // Assuming you have a CSS file for styling

const ParallaxSection: React.FC = () => {
    return (
        <Parallax
            blur={0}
            bgImage={require('../../assets/images/parallax-background.jpg')} // Add your background image
            bgImageAlt="parallax background"
            strength={500}
        >
            <div style={{ height: '500px' }}>
                <div className="parallax-content">
                    <h1 className="parallax-title">Elevate Your Beauty</h1>
                    <p className="parallax-description">Discover the luxury of GlamCS cosmetics.</p>
                </div>
            </div>
        </Parallax>
    );
};

export default ParallaxSection;
import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const features = [
  {
    title: 'Luxury Ingredients',
    description: 'Our products are made with the finest ingredients for a premium experience.',
    icon: '💎', // Example icon
  },
  {
    title: 'Elegant Packaging',
    description: 'Each product is elegantly packaged to reflect the luxury within.',
    icon: '📦', // Example icon
  },
  {
    title: '3D Effects',
    description: 'Experience our products with stunning 3D visual effects.',
    icon: '✨', // Example icon
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Why Choose GlamCS?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
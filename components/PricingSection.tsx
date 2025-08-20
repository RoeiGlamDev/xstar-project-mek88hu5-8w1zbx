import React from 'react';
import './PricingSection.css'; // Importing the CSS for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="pricing-title">Luxury Pricing Plans</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic</h3>
                        <p className="card-price">$29/month</p>
                        <ul className="card-features">
                            <li>Access to basic products</li>
                            <li>24/7 customer support</li>
                        </ul>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card featured">
                        <h3 className="card-title">Premium</h3>
                        <p className="card-price">$59/month</p>
                        <ul className="card-features">
                            <li>Access to all products</li>
                            <li>Priority customer support</li>
                            <li>Exclusive discounts</li>
                        </ul>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Deluxe</h3>
                        <p className="card-price">$99/month</p>
                        <ul className="card-features">
                            <li>All Premium features</li>
                            <li>Personalized consultations</li>
                            <li>Free shipping</li>
                        </ul>
                        <button className="card-button">Choose Plan</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
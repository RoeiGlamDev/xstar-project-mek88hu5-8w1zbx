import React from 'react';
import './PricingPage.css'; // Importing CSS for styling

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <header className="pricing-header">
                <h1 className="title">GlamCS Pricing</h1>
                <p className="subtitle">Elevate your beauty experience with our premium products.</p>
            </header>
            <section className="pricing-cards">
                <div className="card luxury">
                    <h2 className="card-title">Luxury Package</h2>
                    <p className="card-price">$199</p>
                    <ul className="card-features">
                        <li>Exclusive 3D Product Design</li>
                        <li>Personalized Consultation</li>
                        <li>Free Shipping</li>
                    </ul>
                    <button className="card-button">Choose Plan</button>
                </div>
                <div className="card premium">
                    <h2 className="card-title">Premium Package</h2>
                    <p className="card-price">$149</p>
                    <ul className="card-features">
                        <li>High-End Product Selection</li>
                        <li>Complimentary Samples</li>
                        <li>Priority Support</li>
                    </ul>
                    <button className="card-button">Choose Plan</button>
                </div>
                <div className="card standard">
                    <h2 className="card-title">Standard Package</h2>
                    <p className="card-price">$99</p>
                    <ul className="card-features">
                        <li>Quality Product Range</li>
                        <li>Standard Shipping</li>
                    </ul>
                    <button className="card-button">Choose Plan</button>
                </div>
            </section>
            <footer className="pricing-footer">
                <p>© 2023 GlamCS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PricingPage;
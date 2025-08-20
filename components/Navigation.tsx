import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Assuming you have a CSS file for styles

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <div className="logo">
                <Link to="/">GlamCS</Link> {/* Logo linking to homepage */}
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
        </nav>
    );
};

export default Navigation;
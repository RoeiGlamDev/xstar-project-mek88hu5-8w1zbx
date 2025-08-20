import React from 'react';

const ThreeTypes: React.FC = () => {
    return (
        <div className="three-types">
            <div className="type-item">
                <h2>Type 1</h2>
                <p>Luxury skincare products designed for elegance.</p>
            </div>
            <div className="type-item">
                <h2>Type 2</h2>
                <p>High-end makeup essentials to enhance your beauty.</p>
            </div>
            <div className="type-item">
                <h2>Type 3</h2>
                <p>Exclusive fragrances that embody sophistication.</p>
            </div>
        </div>
    );
};

export default ThreeTypes;
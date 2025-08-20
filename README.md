import React from 'react';

const README: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 style={{ color: '#FF7F50' }}>GlamCS Cosmetics Website</h1>
      <h2>Overview</h2>
      <p>
        GlamCS is a high-end cosmetics website designed with elegance in mind. 
        Our color palette features luxurious orange and white tones, complemented by 
        stunning 3D designs and effects.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Elegant and modern UI/UX design</li>
        <li>Responsive layout for all devices</li>
        <li>High-quality 3D product visuals</li>
        <li>Intuitive navigation and user experience</li>
      </ul>
      <h2>Getting Started</h2>
      <p>
        To get started with the GlamCS project, clone the repository and install 
        the necessary dependencies:
      </p>
      <pre>
        <code>
          git clone https://github.com/yourusername/glamcs.git
          cd glamcs
          npm install
        </code>
      </pre>
      <h2>Usage</h2>
      <p>
        Run the development server to see the website in action:
      </p>
      <pre>
        <code>
          npm start
        </code>
      </pre>
      <h2>Contributing</h2>
      <p>
        We welcome contributions! Please fork the repository and submit a pull request 
        for any enhancements or bug fixes.
      </p>
      <h2>License</h2>
      <p>
        This project is licensed under the MIT License.
      </p>
    </div>
  );
};

export default README;
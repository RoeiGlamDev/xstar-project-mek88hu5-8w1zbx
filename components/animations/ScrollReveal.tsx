'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom', // Animation origin
      distance: '50px', // Distance of the reveal
      duration: 1000, // Animation duration
      delay: 200, // Delay between animations
      easing: 'ease-in-out', // Easing function
      reset: true, // Reset animation on scroll
    });

    sr.reveal('.reveal', { interval: 200 }); // Reveal elements with class 'reveal'
  }, []);

  return <div className="reveal">{children}</div>; // Render children with reveal effect
};

export default ScrollRevealComponent;
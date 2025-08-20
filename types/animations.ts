import { AnimationType } from './types'; // Importing AnimationType from types file

const animationTypes: AnimationType[] = [
  {
    name: 'Fade In', // Animation name
    duration: 300, // Duration in milliseconds
    effect: 'opacity', // CSS property affected
    easing: 'ease-in', // Easing function
  },
  {
    name: 'Slide Up', // Animation name
    duration: 400, // Duration in milliseconds
    effect: 'transform', // CSS property affected
    easing: 'ease-out', // Easing function
    translateY: '-20px', // Translate effect
  },
  {
    name: 'Zoom In', // Animation name
    duration: 500, // Duration in milliseconds
    effect: 'transform', // CSS property affected
    easing: 'ease-in-out', // Easing function
    scale: 1.1, // Scale effect
  },
  {
    name: 'Rotate', // Animation name
    duration: 600, // Duration in milliseconds
    effect: 'transform', // CSS property affected
    easing: 'linear', // Easing function
    rotate: '360deg', // Rotate effect
  },
];

export default animationTypes; // Default export of animationTypes array
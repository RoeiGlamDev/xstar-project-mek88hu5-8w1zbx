import React from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GradientBackgroundContainer = styled.div`
  width: 100%;
  height: 100vh; // Full height for the background
  background: linear-gradient(270deg, #FFA500, #FFFFFF); // Orange to white gradient
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite; // Smooth animation
  position: fixed; // Fixed position for full coverage
  top: 0;
  left: 0;
  z-index: -1; // Behind other components
`;

const GradientBackground: React.FC = () => {
  return <GradientBackgroundContainer />; // Render the gradient background
};

export default GradientBackground;
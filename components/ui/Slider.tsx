'use client';

import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Slide = styled.div<{ active: boolean }>`
  width: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${({ active }) => (active ? 'translateX(0)' : 'translateX(100%)')};
  opacity: ${({ active }) => (active ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;
  background: white; // Background color for slides
  border-radius: 15px; // Rounded corners for elegance
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.button<{ active: boolean }>`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'orange' : 'lightgray')}; // Active dot color
  border: none;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: orange; // Hover effect
  }
`;

const Slider: React.FC<{ slides: React.ReactNode[] }> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <SliderContainer>
      {slides.map((slide, index) => (
        <Slide key={index} active={index === currentIndex}>
          {slide}
        </Slide>
      ))}
      <SliderDots>
        {slides.map((_, index) => (
          <Dot key={index} active={index === currentIndex} onClick={() => setCurrentIndex(index)} />
        ))}
      </SliderDots>
      <button onClick={prevSlide}>Prev</button> {/* Button for previous slide */}
      <button onClick={nextSlide}>Next</button> {/* Button for next slide */}
    </SliderContainer>
  );
};

export default Slider;
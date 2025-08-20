import { useEffect, useState } from 'react';

const useScrollAnimation = (threshold: number) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible; // returns true if scrolled past threshold
};

export default useScrollAnimation;
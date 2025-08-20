import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useFadeIn = (duration: number = 1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration });
    }
  }, [duration]);

  return ref;
};

export const useSlideIn = (direction: 'left' | 'right' | 'up' | 'down', duration: number = 1) => {
  const ref = useRef<HTMLDivElement>(null);
  const xValue = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0';
  const yValue = direction === 'up' ? '-100%' : direction === 'down' ? '100%' : '0';

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, { x: xValue, y: yValue, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration });
    }
  }, [direction, duration]);

  return ref;
};

export const useBounce = (duration: number = 1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, { scale: 0.5 }, { scale: 1, duration, yoyo: true, repeat: -1 });
    }
  }, [duration]);

  return ref;
};

export default { useFadeIn, useSlideIn, useBounce };
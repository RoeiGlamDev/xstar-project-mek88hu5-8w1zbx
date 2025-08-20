import { useEffect, useState } from 'react';

const useParallax = (scrollRef: React.RefObject<HTMLDivElement>, speed: number) => {
    const [offset, setOffset] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollTop = window.scrollY; // Get current scroll position
            setOffset(scrollTop * speed); // Calculate parallax offset
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Attach scroll event
        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up event listener
        };
    }, []);

    return offset; // Return the calculated offset
};

export default useParallax;
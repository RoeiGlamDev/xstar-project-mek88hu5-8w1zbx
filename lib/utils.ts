import { useEffect, useState } from 'react';

// Utility function to debounce a value
export const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

// Function to format currency
export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

// Function to generate a random ID
export const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

// Function to check if a value is a valid email
export const isValidEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Function to fetch data from an API
export const fetchData = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export default {
    useDebounce,
    formatCurrency,
    generateId,
    isValidEmail,
    fetchData,
};
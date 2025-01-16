import { useState, useEffect } from 'react';

export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set a timeout to update the debounced value after the delay
    const handler = setTimeout(() => {
        setDebouncedValue(value);
    }, delay);

    // Cleanup the timeout if the value or delay changes
    return () => {
        clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
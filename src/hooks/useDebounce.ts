import { useState, useEffect } from "react";

export const useDebounce = (
  value: string,
  delay: number,
  minLength: number
) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    if (value.length < minLength) {
      return;
    }

    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay, minLength]);

  return debouncedValue;
};

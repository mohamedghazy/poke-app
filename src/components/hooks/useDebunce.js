import { useState, useEffect } from "react";

/** Debounce a value that changes rapidly, to a lower delay - useful for automatic search - use this directly to reduce api calls
 * @param { any } value Any React compatible state value
 * @param { int } [delay=250] A delay to debounce by
 */
export default function useDebounce(value, delay = 250) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    // Cancel the timeout if value changes (also on delay change or unmount)
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

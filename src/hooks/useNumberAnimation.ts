import { useState, useEffect } from 'react';

/**
 * Custom hook that animates a number change using a split-flap display effect
 * Adjusts animation speed based on distance from target
 */
export function useNumberAnimation(
  targetValue: number,
  animationSpeed: number = 5,
) {
  const [displayedValue, setDisplayedValue] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    setIsAnimating(true);

    const interval = setInterval(() => {
      setDisplayedValue(prev => {
        const distance = Math.abs(targetValue - prev);

        // Dynamic increment based on distance, so that the animation is faster when the target is further away
        let step = 1;
        if (distance > 500) step = 20;
        else if (distance > 200) step = 10;
        else if (distance > 100) step = 5;
        else if (distance > 50) step = 2;

        if (prev < targetValue) {
          const newValue = Math.min(prev + step, targetValue);
          return newValue;
        } else if (prev > targetValue) {
          const newValue = Math.max(prev - step, targetValue);
          return newValue;
        } else {
          clearInterval(interval);
          setIsAnimating(false);
          return targetValue;
        }
      });
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [targetValue, animationSpeed]);

  return { displayedValue, isAnimating };
}

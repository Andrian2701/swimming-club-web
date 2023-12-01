import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useInViewCounter = (
  ref: React.RefObject<HTMLDivElement>,
  maxVal: number,
  time: number
) => {
  const [count, setCount] = useState<number>(0);
  const { ref: itemRef, inView: itemVisible } = useInView();

  useEffect(() => {
    if (itemVisible) {
      const interval: any = setInterval(() => {
        return count < maxVal ? setCount(count + 1) : clearInterval(interval);
      }, time);
      return () => {
        clearInterval(interval);
      };
    }
  }, [count, itemVisible, maxVal, time]);

  return { itemRef, count, itemVisible };
};

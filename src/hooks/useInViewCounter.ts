import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useInViewCounter = (
  ref: React.RefObject<HTMLDivElement>,
  maxVal: number,
  time: number
) => {
  const [count, setCount] = useState<number>(0);
  const { ref: countRef, inView: countVisible } = useInView();

  useEffect(() => {
    if (countVisible === true) {
      const interval: any = setInterval(() => {
        return count < maxVal ? setCount(count + 1) : clearInterval(interval);
      }, time);

      return () => {
        clearInterval(interval);
      };
    }
  }, [count, countVisible]);

  return { countRef, count };
};

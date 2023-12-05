import { useRef } from "react";
import { useInViewCounter } from "../../hooks/useInViewCounter";

interface TrustCount {
  title: string;
  className: string;
  maxVal: number;
  time: number;
  char?: string;
}

export const TrustCount = ({
  title,
  maxVal,
  time,
  className,
  char,
}: TrustCount) => {
  const trustCountRef = useRef<HTMLDivElement>(null);
  const { itemRef, count } = useInViewCounter(trustCountRef, maxVal, time);

  return (
    <div className={`${className}`} ref={itemRef}>
      <div></div>
      <span>
        {count}
        {char && "%"}
      </span>
      <h5>{title}</h5>
    </div>
  );
};

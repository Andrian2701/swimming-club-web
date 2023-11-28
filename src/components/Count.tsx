import { useRef } from "react";
import { useInViewCounter } from "../hooks/useInViewCounter";

interface ICountProps {
  title: string;
  className: string;
  maxVal: number;
  time: number;
  char?: string;
}

export const Count: React.FC<ICountProps> = ({
  title,
  maxVal,
  time,
  className,
  char,
}) => {
  const metricRef = useRef<HTMLDivElement>(null);
  const { itemRef, count } = useInViewCounter(metricRef, maxVal, time);

  return (
    <div className={`${className}`} ref={itemRef}>
      <div></div>
      <span>
        {count}
        {char ? "%" : null}
      </span>
      <h5>{title}</h5>
    </div>
  );
};

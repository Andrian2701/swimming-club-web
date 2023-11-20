import React, { useRef } from "react";
import { useInViewCounter } from "../hooks/useInViewCounter";

interface ICountProps {
  title: string;
  className: string;
  maxVal: number;
  time: number;
}

export const Count: React.FC<ICountProps> = ({
  title,
  maxVal,
  time,
  className,
}) => {
  const metricRef = useRef<HTMLDivElement>(null);
  const { countRef, count } = useInViewCounter(metricRef, maxVal, time);

  return (
    <div className={`${className}`} ref={countRef}>
      <div></div>
      <span>{count}</span>
      <h5>{title}</h5>
    </div>
  );
};

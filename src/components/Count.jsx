import { useRef } from "react";
import { useInViewCounter } from "../hooks/useInViewCounter";

export const Count = ({ title, maxVal, time, className }) => {
  const metricRef = useRef();
  const { countRef, count } = useInViewCounter(metricRef, maxVal, time);

  return (
    <div className={`${className}`} ref={countRef}>
      <div></div>
      <span>{count}</span>
      <h5>{title}</h5>
    </div>
  );
};

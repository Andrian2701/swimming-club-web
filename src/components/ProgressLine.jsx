import { useEffect, useState, useRef } from "react";
import { useInViewCounter } from "../hooks/useInViewCounter";

export const ProgressLine = ({
  time,
  maxVal,
  label,
  backgroundColor = "#e5e5e5",
  visualParts = [{ percentage: "0%" }],
}) => {
  const progressRef = useRef(null);
  const { itemRef, count, itemVisible } = useInViewCounter(
    progressRef,
    maxVal,
    time
  );

  const [widths, setWidths] = useState(visualParts.map(() => 0));

  useEffect(() => {
    if (itemVisible) {
      requestAnimationFrame(() => {
        setWidths(visualParts.map((item) => item.percentage));
      });
    }
  }, [visualParts, itemVisible]);

  return (
    <div className="progress-line">
      <div
        className="progress-visual-full"
        style={{
          backgroundColor,
        }}
      >
        {visualParts.map((item, idx) => (
          <div
            ref={itemRef}
            key={idx}
            style={{
              width: widths[idx],
              backgroundColor: item.color,
            }}
            className="progress-visual-part"
          />
        ))}
      </div>
      <div className="progress-details">
        <span>{label}</span>
        <span className="percentages">{count}%</span>
      </div>
    </div>
  );
};

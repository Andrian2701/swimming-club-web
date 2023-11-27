import { useEffect, useState } from "react";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useInViewCounter } from "../hooks/useInViewCounter";
import "../styles/components/ProgressLine.scss";

export const ProgressLine = ({
  time,
  maxVal,
  label,
  backgroundColor = "#e5e5e5",
  visualParts = [
    {
      percentage: "0%",
    },
  ],
}) => {
  const { ref: progressLine, inView: progressLineIsVisible } = useInView();
  // const progressRef = useRef(null);
  // const { countRef, count } = useInViewCounter(progressLine, maxVal, time);

  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    if (progressLineIsVisible) {
      requestAnimationFrame(() => {
        setWidths(
          visualParts.map((item) => {
            return item.percentage;
          })
        );
      });
    }
  }, [visualParts, progressLineIsVisible]);

  return (
    <>
      <div
        className="progressVisualFull"
        style={{
          backgroundColor,
        }}
      >
        {visualParts.map((item, index) => {
          return (
            <div
              ref={progressLine}
              key={item.color}
              style={{
                width: widths[index],
                backgroundColor: item.color,
              }}
              className="progressVisualPart"
            />
          );
        })}
      </div>
      <div className="details">
        <span>{label}</span>
        <span className="percentages">{widths}</span>
      </div>
    </>
  );
};

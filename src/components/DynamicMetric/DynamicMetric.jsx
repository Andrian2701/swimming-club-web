import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import "../../styles/components/DynamicMetric.scss";

const DynamicMetric = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const { ref: metric1Ref, inView: metric1Visible } = useInView();
  const { ref: metric2Ref, inView: metric2Visible } = useInView();
  const { ref: metric3Ref, inView: metric3Visible } = useInView();

  useEffect(() => {
    if (metric1Visible === true) {
      const interval = setInterval(() => {
        return count < 29 ? setCount(count + 1) : clearInterval(interval);
      }, 150);

      return () => {
        clearInterval(interval);
      };
    }
  }, [count, metric1Visible]);

  useEffect(() => {
    if (metric2Visible === true) {
      const interval2 = setInterval(() => {
        return count2 < 469 ? setCount2(count2 + 1) : clearInterval(interval2);
      }, 7);

      return () => {
        clearInterval(interval2);
      };
    }
  }, [count2, metric2Visible]);

  useEffect(() => {
    if (metric3Visible === true) {
      const interval3 = setInterval(() => {
        return count3 < 98 ? setCount3(count3 + 1) : clearInterval(interval3);
      }, 40);

      return () => {
        clearInterval(interval3);
      };
    }
  }, [count3, metric3Visible]);

  return (
    <>
      <h4>Why you should trust us?</h4>
      <div className="dynamic-metrics">
        <div className="metric1" ref={metric1Ref}>
          <div></div>
          <span>{count}</span>
          <h5>Experienced Coaches</h5>
        </div>
        <div className="metric2" ref={metric2Ref}>
          <div></div>
          <span>{count2}</span>
          <h5>Gold Medals Won</h5>
        </div>
        <div className="metric3" ref={metric3Ref}>
          <div></div>
          <span>{count3}%</span>
          <h5>Positive Feedbacks</h5>
        </div>
      </div>
    </>
  );
};

export default DynamicMetric;

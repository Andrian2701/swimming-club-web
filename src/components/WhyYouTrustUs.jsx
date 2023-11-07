import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import "../styles/components/WhyYouTrustUs.scss";

const WhyYouTrustUs = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const { ref: test1Ref, inView: testVisible } = useInView();
  const { ref: test2Ref, inView: testVisible2 } = useInView();
  const { ref: test3Ref, inView: testVisible3 } = useInView();

  useEffect(() => {
    if (testVisible === true) {
      const interval = setInterval(() => {
        return count < 29 ? setCount(count + 1) : clearInterval(interval);
      }, 150);

      return () => {
        clearInterval(interval);
      };
    }
  }, [count, testVisible]);

  useEffect(() => {
    if (testVisible2 === true) {
      const interval2 = setInterval(() => {
        return count2 < 469 ? setCount2(count2 + 1) : clearInterval(interval2);
      }, 7);

      return () => {
        clearInterval(interval2);
      };
    }
  }, [count2, testVisible2]);

  useEffect(() => {
    if (testVisible3 === true) {
      const interval3 = setInterval(() => {
        return count3 < 98 ? setCount3(count3 + 1) : clearInterval(interval3);
      }, 40);

      return () => {
        clearInterval(interval3);
      };
    }
  }, [count3, testVisible3]);

  return (
    <div className="why-trust-us">
      <h4>Why you should trust us?</h4>
      <div className="dynamic-metrics">
        <div className="test1" ref={test1Ref}>
          <div></div>
          <span>{count}</span>
          <h5>Experienced Coaches</h5>
        </div>
        <div className="test2" ref={test2Ref}>
          <div></div>
          <span>{count2}</span>
          <h5>Gold Medals Won</h5>
        </div>
        <div className="test3" ref={test3Ref}>
          <div></div>
          <span>{count3}%</span>
          <h5>Positive Feedbacks</h5>
        </div>
      </div>
    </div>
  );
};

export default WhyYouTrustUs;

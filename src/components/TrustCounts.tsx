import { Count } from "./Count";
import "../styles/components/TrustCounts.scss";

export const TrustCounts = () => {
  return (
    <>
      <h4>Why you should trust us?</h4>
      <div className="counts">
        <Count
          title="Experienced Coaches"
          maxVal={29}
          time={150}
          className="count1"
        />
        <Count
          title="Gold Medals Won"
          maxVal={469}
          time={7}
          className="count2"
        />
        <Count
          title="Positive Feedbacks"
          maxVal={98}
          time={40}
          className="count3"
          char="%"
        />
      </div>
    </>
  );
};

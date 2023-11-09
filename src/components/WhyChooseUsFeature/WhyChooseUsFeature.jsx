import { features } from "../../data/features";
import "../../styles/components/WhyChooseUsFeature.scss";

const WhyChooseUsFeature = () => {
  return (
    <>
      {features.map((item, idx) => (
        <div
          key={item.id}
          className={`feature ${
            idx % 4 === 0 ? "white" : idx % 2 === 0 ? "purple" : "green"
          }`}
        >
          <h4>{item.heading}</h4>
          <div>{item.description}</div>
        </div>
      ))}
    </>
  );
};

export default WhyChooseUsFeature;

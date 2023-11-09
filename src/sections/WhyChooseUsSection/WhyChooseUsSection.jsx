import SectionHeader from "../../components/SectionHeader";
import WhyChooseUsFeature from "../../components/WhyChooseUsFeature";
import "../../styles/sections/WhyChooseUsSection.scss";

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us">
      <div className="header">
        <SectionHeader id={2} />
      </div>
      <div className="why-choose-us-features">
        <WhyChooseUsFeature />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

import { SectionHeading } from "../components/SectionHeading";
import { ReasonToChoose } from "../components/ReasonToChoose";
import "../styles/sections/WhyChooseUsSection.scss";

export const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us-section">
      <div className="header">
        <SectionHeading id={2} />
      </div>
      <div className="why-choose-us-reasons">
        <ReasonToChoose />
      </div>
    </section>
  );
};

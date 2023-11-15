import { TextHeading } from "../components/TextHeading";
import { ReasonToChoose } from "../components/ReasonToChoose";
import "../styles/sections/WhyChooseUsSection.scss";

export const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us-section">
      <div className="header">
        <TextHeading id={2} />
      </div>
      <div className="why-choose-us-reasons">
        <ReasonToChoose />
      </div>
    </section>
  );
};

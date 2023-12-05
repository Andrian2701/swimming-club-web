import { SectionHeading } from "../features/SectionHeading";
import { ReasonToChoose } from "../features/ReasonToChoose";
import "../../styles/components/sections/WhyChooseUsSection.scss";

export const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us">
      <div className="header">
        <SectionHeading id={2} />
      </div>
      <div className="why-choose-us-reasons">
        <ReasonToChoose />
      </div>
    </section>
  );
};

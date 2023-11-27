import { SectionHeading } from "../SectionHeading";
import { TrustCounts } from "../TrustCounts";
import "../../styles/components/sections/TrainingOverviewSection.scss";

const img4 = require("../../assests/img/sections/Img4.webp") as string;
const img2 = require("../../assests/img/sections/Img2.jpeg") as string;

export const TrainingOverviewSection = () => {
  return (
    <section className="training-overview-section">
      <div className="images">
        <img className="img2" src={img2} alt="section-img" />
        <img className="img1" src={img4} alt="section-img" />
      </div>
      <div className="header">
        <SectionHeading id={4} />
        <div className="trust-counts">
          <TrustCounts />
        </div>
      </div>
    </section>
  );
};

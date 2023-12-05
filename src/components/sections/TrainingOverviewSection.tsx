import { ImagesContainer } from "../features/ImagesContainer";
import { SectionHeading } from "../features/SectionHeading";
import { TrustCountsBar } from "../features/TrustCountsBar";
import "../../styles/components/sections/TrainingOverviewSection.scss";

const img4 = require("../../assests/img/sections/Img4.webp") as string;
const img2 = require("../../assests/img/sections/Img2.jpeg") as string;

export const TrainingOverviewSection = () => {
  return (
    <section className="training-overview">
      <div className="images">
        <ImagesContainer img1={img2} img2={img4} />
      </div>
      <div className="section-heading">
        <SectionHeading id={4} />
        <div className="trust-counts">
          <h4>Why you should trust us?</h4>
          <div className="counts">
            <TrustCountsBar />
          </div>
        </div>
      </div>
    </section>
  );
};

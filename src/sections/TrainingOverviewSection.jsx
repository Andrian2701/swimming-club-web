import { TextHeading } from "../components/TextHeading";
import { TrustCounts } from "../components/TrustCounts";
import img4 from "../assests/img/sections/Img4.webp";
import img2 from "../assests/img/sections/Img2.jpeg";
import "../styles/sections/TrainingOverviewSection.scss";

export const TrainingOverviewSection = () => {
  return (
    <section className="training-overview-section">
      <div className="images">
        <img className="img2" src={img2} alt="section-img" />
        <img className="img1" src={img4} alt="section-img" />
      </div>
      <div className="header">
        <TextHeading id={4} />
        <div className="trust-counts">
          <TrustCounts />
        </div>
      </div>
    </section>
  );
};

import SectionHeader from "../../components/SectionHeader";
import DynamicMetric from "../../components/DynamicMetric";
import img4 from "../../assests/imgs/sections/img4.webp";
import img5 from "../../assests/imgs/sections/Img5.jpeg";
import "../../styles/sections/TrainingOverviewSection.scss";

const TrainingOverviewSection = () => {
  return (
    <section className="training-overview">
      <div className="images">
        <img className="img1" src={img4} alt="img1" />
        <img className="img2" src={img5} alt="img2" />
      </div>
      <div className="header">
        <SectionHeader id={4} />
        <div className="why-trust-us">
          <DynamicMetric />
        </div>
      </div>
    </section>
  );
};

export default TrainingOverviewSection;

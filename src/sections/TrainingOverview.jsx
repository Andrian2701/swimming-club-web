import WhyYouTrustUs from "../components/WhyYouTrustUs";
import img4 from "../img/other-img/img4.jpeg";
import img5 from "../img/other-img/Img5.jpeg";
import "../styles/sections/TrainingOverview.scss";

const TrainingOverview = () => {
  return (
    <section className="training-overview">
      <div className="images">
        <img className="img1" src={img4} alt="img1" />
        <img className="img2" src={img5} alt="img2" />
      </div>
      <div className="header">
        <span>EXPLORE MORE</span>
        <h2>Health, Safety, and Learning Fueled by the Joy of Progress</h2>
        <p>
          The OceanStars club offers comprehensive classes for both children and
          adults in swimming, diving, and aqua aerobics. Our dedicated and
          skilled staff cultivates a tranquil and enjoyable atmosphere, ensuring
          every participant conquers water-related fears and hones various
          swimming techniques to discover their favorite.
        </p>
        <WhyYouTrustUs />
      </div>
    </section>
  );
};

export default TrainingOverview;

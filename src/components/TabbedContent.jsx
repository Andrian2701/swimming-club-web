import Tab from "./Tab";
import detailsImg1 from "../img/details/detailsImg1.jpg";
import detailsImg2 from "../img/details/detailsImg1.jpg";
import detailsImg3 from "../img/details/detailsImg1.jpg";
import "../styles/TabbedContent.scss";

export default function TabbedContent() {
  return (
    <section className="tabbed-content">
      <div className="text-content">
        <span>SECURE AND ENJOYABLE</span>
        <h2>Why OceanStars Club Stands Apart From Competitors</h2>
        <Tab />
      </div>
      <div className="imgs">
        <img className="img1" src={detailsImg1} alt="tab-img1" />
        <img className="img2" src={detailsImg2} alt="tab-img2" />
        <img className="img3" src={detailsImg3} alt="tab-img3" />
      </div>
    </section>
  );
}

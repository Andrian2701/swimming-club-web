import { Tab } from "../components/Tab";
import { TextHeading } from "../components/TextHeading";
import img1 from "../assests/img/sections/Img1.jpg";
import img5 from "../assests/img/sections/Img5.jpeg";
import img3 from "../assests/img/sections/Img3.jpeg";
import "../styles/sections/WhatSetsUsApartSection.scss";

export const WhatSetsUsApartSection = () => {
  return (
    <section className="what-sets-us-apart-section">
      <div className="header">
        <TextHeading id={1} />
        <Tab />
      </div>
      <div className="imgs">
        <img className="img1" src={img1} alt="section-img" />
        <img className="img2" src={img5} alt="section-img" />
        <img className="img3" src={img3} alt="section-img" />
      </div>
    </section>
  );
};

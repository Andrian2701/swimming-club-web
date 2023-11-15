import { Tab } from "../components/Tab";
import { TextHeading } from "../components/TextHeading";
import img1 from "../assests/imgs/sections/Img1.jpg";
import img2 from "../assests/imgs/sections/Img2.jpeg";
import img3 from "../assests/imgs/sections/img3.jpeg";
import "../styles/sections/WhatSetsUsApartSection.scss";

export const WhatSetsUsApartSection = () => {
  return (
    <section className="what-sets-us-apart">
      <div className="header">
        <TextHeading id={1} />
        <Tab />
      </div>
      <div className="imgs">
        <img className="img1" src={img1} alt="img1" />
        <img className="img2" src={img2} alt="img2" />
        <img className="img3" src={img3} alt="img3" />
      </div>
    </section>
  );
};

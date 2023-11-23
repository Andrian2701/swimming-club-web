import { Tab } from "../components/Tab";
import { SectionHeading } from "../components/SectionHeading";
import "../styles/sections/WhatSetsUsApartSection.scss";

const img1 = require("../assests/img/sections/Img1.jpg") as string;
const img3 = require("../assests/img/sections/Img3.jpeg") as string;
const img5 = require("../assests/img/sections/Img5.jpeg") as string;

export const WhatSetsUsApartSection = () => {
  return (
    <section className="what-sets-us-apart-section">
      <div className="header">
        <SectionHeading id={1} />
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

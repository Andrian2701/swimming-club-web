import { SectionHeading } from "../features/SectionHeading";
import { Tab } from "../ui/Tab";
import { ImagesContainer } from "../features/ImagesContainer";
import "../../styles/components/sections/WhatSetsUsApartSection.scss";

const img1 = require("../../assests/img/sections/Img1.jpg") as string;
const img3 = require("../../assests/img/sections/Img3.jpeg") as string;
const img5 = require("../../assests/img/sections/Img5.jpeg") as string;

export const WhatSetsUsApartSection = () => {
  return (
    <section className="what-sets-us-apart">
      <div className="section-heading">
        <SectionHeading id={1} />
        <div className="tabs">
          <Tab />
        </div>
      </div>
      <div className="imgs">
        <ImagesContainer img1={img1} img2={img5} img3={img3} />
      </div>
    </section>
  );
};

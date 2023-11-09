import Tab from "../../components/Tab";
import img1 from "../../assests/imgs/sections/Img1.jpg";
import img2 from "../../assests/imgs/sections/Img2.jpeg";
import img3 from "../../assests/imgs/sections/img3.jpeg";
import "../../styles/sections/WhatSetsUsApartSection.scss";
import SectionHeader from "../../components/SectionHeader";

const WhatSetsUsApartSection = () => {
  return (
    <section className="what-sets-us-apart">
      <div className="header">
        <SectionHeader id={1} />
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

export default WhatSetsUsApartSection;

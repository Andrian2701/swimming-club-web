import Tabs from "../components/Tabs";
import img1 from "../img/other-img/Img1.jpg";
import img2 from "../img/other-img/Img2.jpeg";
import img3 from "../img/other-img/img3.jpeg";
import "../styles/sections/WhatSetsUsApart.scss";

const WhatSetsUsApart = () => {
  return (
    <section className="what-sets-us-apart">
      <div className="header">
        <span>SECURE AND ENJOYABLE</span>
        <h2>Why OceanStars Club Stands Apart From Competitors</h2>
        <Tabs />
      </div>
      <div className="imgs">
        <img className="img1" src={img1} alt="img1" />
        <img className="img2" src={img2} alt="img2" />
        <img className="img3" src={img3} alt="img3" />
      </div>
    </section>
  );
};

export default WhatSetsUsApart;

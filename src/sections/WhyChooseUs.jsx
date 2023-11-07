import WhyChooseUsFeatures from "../components/WhyChooseUsFeatures";
import "../styles/sections/WhyChooseUs.scss";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="header">
        <span>LEARN MORE</span>
        <h2>Discover the Reasons To Choose Us</h2>
        <p>
          We introduce innovative pool activities, continuously enhancing our
          expertise through diverse courses and staying updated with the latest
          trends in swim instruction. Our website is frequently refreshed with
          valuable content, including informative blog articles tailored to
          assist parents.
        </p>
      </div>
      <div className="why-choose-us-features">
        <WhyChooseUsFeatures />
      </div>
    </section>
  );
};

export default WhyChooseUs;

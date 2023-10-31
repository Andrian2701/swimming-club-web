import BenefitItem from "./BenefitItem";
import "../styles/Benefits.scss";

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="header">
        <div className="heading">
          <span>LEARN MORE</span>
          <h2>Discover The Reasons To Choose Us</h2>
        </div>
        <div className="description">
          We introduce innovative pool activities, continuously enhancing our
          expertise through diverse courses and staying updated with the latest
          trends in swim instruction. Our website is frequently refreshed with
          valuable content, including informative blog articles tailored to
          assist parents.
        </div>
      </div>
      <div className="benefit-items">
        <BenefitItem />
      </div>
    </section>
  );
}

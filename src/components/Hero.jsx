import heroImg1 from "../img/hero/heroImg1.jpeg";
import "../styles/Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroImg1} alt="hero-img1" />
    </section>
  );
}

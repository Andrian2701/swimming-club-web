import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { ScrollUpButton } from "../ui/ScrollUpButton";
import { NavButton } from "../ui/NavButton";
import { exploreNavLinks } from "../../const/footerNavLinks";
import { resourcesNavLinks } from "../../const/footerNavLinks";
import { socialMediaNavLinks } from "../../const/footerNavLinks";
import { blogNavLinks } from "../../const/footerNavLinks";
import { AiOutlineMobile } from "react-icons/ai";
import { HiOutlineMapPin } from "react-icons/hi2";
import { LuClock3 } from "react-icons/lu";
import "../../styles/components/layout/Footer.scss";

export const Footer = () => {
  const { ref: footerRef, inView: footerVisible } = useInView();

  return (
    <footer id="footer" ref={footerRef}>
      <ScrollUpButton footerVisible={footerVisible} />
      <div className="footer-top">
        <div className="header">
          <span>CLASS FOR YOU</span>
          <h2>
            Figuring Out Which Class
            <br></br>
            Is Right for You?
          </h2>
        </div>
        <div className="find-class-btn">
          <NavButton destination="/our-courses" text="Find a class for me" />
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-middle">
        <div className="contact-info">
          <h3>OceanStars</h3>
          <p>
            OceanStars thrives on a fervor for intense sports and physical
            prowess. Our institution was forged with a zeal for challenging
            sports and individual excellence
          </p>
          <div className="phone-number">
            <div>
              <AiOutlineMobile />
            </div>
            <p>
              Don't hesitate to call
              <br></br>
              271-441-2092
            </p>
          </div>
        </div>
        <div className="location-and-hours">
          <div className="location">
            <div>
              <HiOutlineMapPin />
            </div>
            <div>
              <h3>Location</h3>
              <p>
                Sunset Boulevard 124,
                <br></br>
                Miami, FL 33101
              </p>
            </div>
          </div>
          <div className="hours">
            <div>
              <LuClock3 />
            </div>
            <div>
              <h3>Hours</h3>
              <p>
                Mon-Fri: 7:00 - 22:00
                <br></br>
                Sat-Sun: 7:00 - 20:00
              </p>
            </div>
          </div>
        </div>
        <div className="explore-links">
          <h3>Explore</h3>
          <ul>
            {exploreNavLinks.map((link) => (
              <li key={link.text}>
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="resources-links">
          <h3>Resources</h3>
          <ul>
            {resourcesNavLinks.map((link) => (
              <li key={link.text}>
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="blog-links">
          <h3>Latest From Blog</h3>
          <ul>
            {blogNavLinks.map((link) => (
              <li key={link.text}>
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <div className="copyright">
          <p>
            &copy; Copyright 2023 <span>OceanStars</span>. All rights reserved.
          </p>
        </div>
        <div className="sm-nav-links">
          {socialMediaNavLinks.map((link) => (
            <div key={link.id}>
              <Link to="#">{link.icon}</Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

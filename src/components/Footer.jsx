import { Link } from "react-router-dom";
import { AiOutlineMobile } from "react-icons/ai";
import { HiOutlineMapPin } from "react-icons/hi2";
import { LuClock3 } from "react-icons/lu";
import { exploreLinks } from "../data/footerLinks";
import { resourcesLinks } from "../data/footerLinks";
import { blogLinks } from "../data/footerLinks";
import "../styles/components/Footer.scss";

function Footer() {
  return (
    <footer>
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
          <Link to="#">Find a class for me</Link>
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
            {exploreLinks
              ? exploreLinks.map((link) => (
                  <li key={link.id}>
                    <Link to={link.to}>{link.text}</Link>
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="resources-links">
          <h3>Resources</h3>
          <ul>
            {resourcesLinks
              ? resourcesLinks.map((link) => (
                  <li key={link.id}>
                    <Link to={link.to}>{link.text}</Link>
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="blog-links">
          <h3>Latest From Blog</h3>
          <ul>
            {blogLinks
              ? blogLinks.map((link) => (
                  <li key={link.id}>
                    <Link to={link.to}>{link.text}</Link>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

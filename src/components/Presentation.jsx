import { Link } from "react-router-dom";
import { AiOutlineMobile } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";
import { NavButton } from "./NavButton";
import { TextHeading } from "./TextHeading";
import { PresentationCourse } from "./PresentationCourse";
import "../styles/components/Presentation.scss";

export const Presentation = () => {
  return (
    <div className="presentation">
      <div className="presentation-header">
        <TextHeading id={6} />
        <div className="nav-block">
          <div className="explore-courses-btn">
            <NavButton id={2} />
          </div>
          <div className="about-us-link">
            <Link>About us</Link>
          </div>
        </div>
      </div>
      <div className="presentation-course">
        <PresentationCourse />
      </div>
      <div className="contact-info">
        <div className="location">
          <div>
            <HiOutlineMapPin />
          </div>
          <p>
            Sunset Boulevard 124,
            <br></br>
            Miami, FL 33101
          </p>
        </div>
        <div className="gmail">
          <div>
            <BsEnvelope />
          </div>
          <p>
            oceanstars@gmail.com
            <br></br>
            courses@gmail.com
          </p>
        </div>
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
    </div>
  );
};

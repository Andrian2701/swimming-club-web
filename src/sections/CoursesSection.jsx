import { Link } from "react-router-dom";
import { TextHeading } from "../components/TextHeading";
import { CoursesSwiper } from "../components/CoursesSwiper";
import "../styles/sections/CoursesSection.scss";

export const CoursesSection = () => {
  return (
    <section className="courses-section">
      <div className="header">
        <TextHeading id={5} />
      </div>
      <div className="courses">
        <CoursesSwiper />
        <div className="full-list-link">
          <p>
            See more. Go to the <Link to="#">full list</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

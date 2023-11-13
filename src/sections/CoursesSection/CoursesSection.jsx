import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import CoursesSwiper from "../../components/CoursesSwiper";
import "../../styles/sections/CoursesSection.scss";

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <div className="header">
        <SectionHeader id={5} />
      </div>
      <div className="courses">
        <CoursesSwiper />
        <div className="full-list-link">
          <p>
            See more. Go to the <Link>full list</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import CoursesSlider from "../../components/CoursesSlider";
import "../../styles/sections/CoursesSection.scss";

const CoursesSection = () => {
  return (
    <section className="our-courses">
      <div className="header">
        <SectionHeader id={5} />
      </div>
      <div className="courses">
        <CoursesSlider />
        <div className="full-list">
          <p>
            See more. Go to the <Link>full list</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

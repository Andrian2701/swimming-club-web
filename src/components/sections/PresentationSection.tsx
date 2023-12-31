import { useMemo } from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";
import { SectionHeading } from "../features/SectionHeading";
import { NavButton } from "../ui/NavButton";
import { NavLink } from "../ui/NavLink";
import { Courses } from "../features/Courses";
import { COURSES } from "../../const/courses";

export const PresentationSection = () => {
  const memoizedCourses = useMemo(
    () => COURSES.filter((course) => course.id === 4 || course.id === 5),
    []
  );

  return (
    <section className="presentation">
      <div className="presentation-header">
        <SectionHeading id={6} />
        <div className="nav-block">
          <div className="explore-courses-btn">
            <NavButton destination="/our-courses" text="Explore Courses" />
          </div>
          <div className="about-us-link">
            <NavLink destination={"#"} link={"About Us"} />
          </div>
        </div>
      </div>
      <div className="presentation-course">
        <Courses memoizedCourses={memoizedCourses} />
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
    </section>
  );
};

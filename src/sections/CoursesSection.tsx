import { useLocation } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { PageHeading } from "../components/PageHeading";
import { CoursesSwiper } from "../components/CoursesSwiper";
import { Courses } from "../components/Courses";
import { NavLink } from "../components/NavLink";
import courses from "../const/courses";
import "../styles/sections/CoursesSection.scss";

export const CoursesSection: React.FC<{ headingId: number }> = ({
  headingId,
}) => {
  const location = useLocation();
  const path: string = location.pathname;

  return (
    <section className="courses-section">
      <div className="header">
        {path === "/" ? <SectionHeading id={headingId} /> : <PageHeading />}
      </div>
      <div className="courses">
        {path === "/" ? (
          <>
            <CoursesSwiper />
            <div className="full-list-link">
              <NavLink
                paragraph={"See more classes. Go to the"}
                destination={"/our-courses"}
                link={"full list"}
              />
            </div>
          </>
        ) : (
          <div className="all-courses-list">
            <Courses memoizedCourses={courses} />
          </div>
        )}
      </div>
    </section>
  );
};

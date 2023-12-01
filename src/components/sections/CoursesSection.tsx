import { useLocation } from "react-router-dom";
import { SectionHeading } from "../SectionHeading";
import { PageTitleBar } from "../PageTitleBar";
import { CoursesSwiper } from "../CoursesSwiper";
import { Courses } from "../Courses";
import { NavLink } from "../ui/NavLink";
import courses from "../../const/courses";
import "../../styles/components/sections/CoursesSection.scss";

export const CoursesSection: React.FC<{ headingId: number }> = ({
  headingId,
}) => {
  const location = useLocation();
  const path: string = location.pathname;

  return (
    <section className="courses-section">
      <div className="header">
        {path !== "/our-courses" ? (
          <SectionHeading id={headingId} />
        ) : (
          <PageTitleBar text={"Our Courses"} />
        )}
      </div>
      <div className="courses">
        {path !== "/our-courses" ? (
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

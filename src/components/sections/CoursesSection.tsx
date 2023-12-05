import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { lazily } from "react-lazily";
import { COURSES } from "../../const/courses";
import "../../styles/components/sections/CoursesSection.scss";

const { SectionHeading } = lazily(() => import("../features/SectionHeading"));
const { PageTitleBar } = lazily(() => import("../features/PageTitleBar"));
const { CoursesSwiper } = lazily(() => import("../features/CoursesSwiper"));
const { NavLink } = lazily(() => import("../ui/NavLink"));
const { Courses } = lazily(() => import("../features/Courses"));

interface SectionHeading {
  headingId: number;
}

export const CoursesSection = ({ headingId }: SectionHeading) => {
  const location = useLocation();
  const path: string = location.pathname;

  return (
    <section className="our-courses">
      {path !== "/our-courses" ? (
        <div className="header">
          <Suspense>
            <SectionHeading id={headingId} />
          </Suspense>
        </div>
      ) : (
        <div className="page-title-bar">
          <Suspense>
            <PageTitleBar text={"Our Courses"} />
          </Suspense>
        </div>
      )}
      <div className="courses">
        {path !== "/our-courses" ? (
          <>
            <Suspense>
              <CoursesSwiper />
            </Suspense>
            <div className="full-list-link">
              <Suspense>
                <NavLink
                  paragraph={"See more classes. Go to the"}
                  destination={"/our-courses"}
                  link={"full list"}
                />
              </Suspense>
            </div>
          </>
        ) : (
          <div className="all-courses-list">
            <Suspense>
              <Courses memoizedCourses={COURSES} />
            </Suspense>
          </div>
        )}
      </div>
    </section>
  );
};

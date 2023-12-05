import { CoursesProps } from "../../const/courses";
import { IoMdPeople } from "react-icons/io";
import { AiFillFolder } from "react-icons/ai";
import { MdPlayLesson } from "react-icons/md";
import "../../styles/components/sections/PresentationSection.scss";

export const Courses: React.FC<{ memoizedCourses: CoursesProps[] }> = ({
  memoizedCourses,
}) => {
  return (
    <>
      {memoizedCourses.map((course) => (
        <div className={`course${course.id}`} key={course.courseTitle}>
          <div className="img-container">
            <img src={course.img} alt="course" />
            <div className="price-tag">
              <span>${course.price}</span>
              <p>/ person</p>
            </div>
          </div>
          <div className="course-content">
            <div className="details">
              <div className="title">
                <i>
                  <AiFillFolder />
                </i>
                <span>{course.courseType}</span>
              </div>
              <h2>{course.courseTitle}</h2>
              <p>{course.description}</p>
            </div>
            <div className="addition">
              <div>
                <i>
                  <IoMdPeople />
                </i>
                <span>{course.entrolled} entrolled</span>
              </div>
              <div>
                <i>
                  <MdPlayLesson />
                </i>
                <span>27x classes</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

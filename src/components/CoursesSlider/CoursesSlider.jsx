import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdPeople } from "react-icons/io";
import { AiFillFolder } from "react-icons/ai";
import { MdPlayLesson } from "react-icons/md";
import courses from "../../data/courses";
import SwiperButtons from "../SwiperButtons";
import "swiper/css";
import "../../styles/components/CoursesSlider.scss";

const CoursesSlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      breakpoints={{
        280: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1100: {
          slidesPerView: 3,
        },
      }}
      className="courses-slider"
    >
      {courses.map((course) => (
        <SwiperSlide key={course.id}>
          <div className="img-container">
            <img src={course.img} alt="course-img" />
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
                <span>{course.classType}</span>
              </div>
              <h2>{course.classTitle}</h2>
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
        </SwiperSlide>
      ))}
      <div className="slider-btns">
        <SwiperButtons />
      </div>
    </Swiper>
  );
};

export default CoursesSlider;

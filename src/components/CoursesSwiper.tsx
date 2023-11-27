import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { IoMdPeople } from "react-icons/io";
import { AiFillFolder } from "react-icons/ai";
import { MdPlayLesson } from "react-icons/md";
import { SwipeButtons } from "./ui/SwipeButtons";
import courses from "../const/courses";
import "swiper/css";
import "../styles/components/CoursesSwiper.scss";

export const CoursesSwiper = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      modules={[Pagination, Navigation]}
      loop={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
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
      className="courses-swiper"
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
        </SwiperSlide>
      ))}
      <div className="swipe-buttons">
        <SwipeButtons />
      </div>
    </Swiper>
  );
};

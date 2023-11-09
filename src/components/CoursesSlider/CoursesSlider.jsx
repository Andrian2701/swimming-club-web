import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { IoMdPeople } from "react-icons/io";
import { AiFillFolder } from "react-icons/ai";
import { MdPlayLesson } from "react-icons/md";
import Img5 from "../../assests/imgs/sections/Img5.jpeg";
import "../../styles/components/CoursesSlider.scss";

import { FreeMode, Navigation, Pagination } from "swiper/modules";
import Swiper from "swiper";
import SwiperSlide from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";

const CoursesSlider = () => {
  return (
    <>
      <div className="courses-slider">
        <div className="course">
          <div className="img-container">
            <img src={Img5} alt="course-img" />
            <div className="price-tag">
              <span>$200.00</span>
              <p>/ person</p>
            </div>
          </div>
          <div className="course-content">
            <div className="details">
              <div className="title">
                <i>
                  <AiFillFolder />
                </i>
                <span>Swimming Course</span>
              </div>
              <h2>Pro Swimmers: 12-20 Years</h2>
              <p>
                Mastering the technique in four swimming styles: freestyle,
                backstorke, breastroke and butterfy. Constantly on the move.
              </p>
            </div>
            <div className="addition">
              <div>
                <i>
                  <IoMdPeople />
                </i>
                <span>2 entrolled</span>
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
      </div>
      <div className="slider-btns">
        <div className="go-left">
          <PiCaretLeftBold />
        </div>
        <div className="go-right">
          <PiCaretRightBold />
        </div>
      </div>
    </>
  );
};

export default CoursesSlider;

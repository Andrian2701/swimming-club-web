import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const SwiperButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <div className="go-left" onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </div>
      <div className="go-right" onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </div>
    </>
  );
};

export default SwiperButtons;

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import "../../styles/components/SwipeButtons.scss";

const SwipeButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <div className="swipe-left" onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </div>
      <div className="swipe-right" onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </div>
    </>
  );
};

export default SwipeButtons;

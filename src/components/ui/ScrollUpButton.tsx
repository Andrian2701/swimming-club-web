import { MdOutlineKeyboardArrowUp } from "react-icons/md";

interface ScrollUpButtonProps {
  footerVisible: boolean;
}

export const ScrollUpButton = ({ footerVisible }: ScrollUpButtonProps) => {
  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {footerVisible && (
        <div className="scroll-up-btn" onClick={handleScrollUp}>
          <MdOutlineKeyboardArrowUp />
        </div>
      )}
    </>
  );
};

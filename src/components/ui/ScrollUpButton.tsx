import { MdOutlineKeyboardArrowUp } from "react-icons/md";

interface ScrollUpButtonProps {
  footerVisible: boolean;
}

export const ScrollUpButton = ({ footerVisible }: ScrollUpButtonProps) => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

import React from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export const ScrollUpButton: React.FC<{ footerVisible: boolean }> = ({
  footerVisible,
}) => {
  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {footerVisible ? (
        <div className="scroll-up-btn" onClick={handleScrollUp}>
          <MdOutlineKeyboardArrowUp />
        </div>
      ) : null}
    </>
  );
};

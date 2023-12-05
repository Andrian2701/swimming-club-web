import { Link } from "react-router-dom";
import { MOBILE_MENU_LINKS } from "../../const/navLinks";
import { IoMdClose } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import "../../styles/components/ui/MobileMenu.scss";

interface MobileMenu {
  mobileMenu: boolean;
  handleSetMobileMenu: (val: boolean) => void;
}

export const MobileMenu = ({ mobileMenu, handleSetMobileMenu }: MobileMenu) => {
  return (
    <div className={`mobile-menu ${mobileMenu ? "open" : ""}`}>
      <i>
        <IoMdClose onClick={() => handleSetMobileMenu(!mobileMenu)} />
      </i>
      <div className="links">
        <ul>
          {MOBILE_MENU_LINKS.map((link) => (
            <li
              key={link.text}
              onClick={() => handleSetMobileMenu(!mobileMenu)}
            >
              <Link to={link.to}>
                {link.text} <FaAngleRight />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

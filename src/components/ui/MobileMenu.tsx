import { Link } from "react-router-dom";
import { mobileMenuNavLinks } from "../../const/mobileMenuNavLinks";
import { IoMdClose } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import "../../styles/components/ui/MobileMenu.scss";

interface IMobileMenuProps {
  mobileMenu: boolean;
  handleSetMobileMenu: (val: boolean) => void;
}

export const MobileMenu: React.FC<IMobileMenuProps> = ({
  mobileMenu,
  handleSetMobileMenu,
}) => {
  return (
    <div className={`mobile-menu ${mobileMenu ? "open" : "closed"}`}>
      <i>
        <IoMdClose onClick={() => handleSetMobileMenu(!mobileMenu)} />
      </i>
      <div className="links">
        <ul>
          {mobileMenuNavLinks.map((link) => (
            <li key={link.text}>
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

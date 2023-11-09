import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import { mobileMenuLinks } from "../../data/mobileMenuLinks";
import "../../styles/components/MobileMenu.scss";

const MobileMenu = ({ hamburgerMenu, setHamburgerMenuHandler }) => {
  return (
    <div className={`mobile-menu ${hamburgerMenu ? "open" : "closed"}`}>
      <i>
        <RiCloseFill onClick={() => setHamburgerMenuHandler(!hamburgerMenu)} />
      </i>
      <div className="links">
        <ul>
          {mobileMenuLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

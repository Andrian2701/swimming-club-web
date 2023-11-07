import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import "../styles/components/MobileMenu.scss";

export const MobileMenu = ({ hamburgerMenu, setHamburgerMenuHandler }) => {
  return (
    <div className={`mobile-menu ${hamburgerMenu ? "open" : ""}`}>
      <i>
        <RiCloseFill onClick={() => setHamburgerMenuHandler(!hamburgerMenu)} />
      </i>
      <div className="mobile-menu-links">
        <ul>
          <li>
            <Link to="/">Team</Link>
          </li>
          <li>
            <Link to="/">Courses</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import "../styles/Header.scss";

export default function MobileNav({ hamburgerMenu, setHamburgerMenuHandler }) {
  return (
    <div className={`mob-nav ${hamburgerMenu ? "open" : ""}`}>
      <i>
        <RiCloseFill onClick={() => setHamburgerMenuHandler(!hamburgerMenu)} />
      </i>
      <div className="mob-nav-links">
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
}

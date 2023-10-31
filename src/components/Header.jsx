import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import MobileNav from "./MobileNav";
import logoImg from "../img/logo/logo.png";
import "../styles/Header.scss";

export default function Header() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [mobLayout, setMobLayout] = useState(window.innerWidth <= 992);

  window.addEventListener("resize", () => {
    setMobLayout(window.innerWidth <= 992);
  });

  const setHamburgerMenuHandler = (val) => {
    setHamburgerMenu(val);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logoImg} alt="logo-img" />
          </Link>
        </div>
        <div className="nav-links">
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
          </ul>
        </div>
        <div className="sign-up-btn">
          <Link to="/">Sign up</Link>
        </div>
        {mobLayout && (
          <div className="hamburger-menu">
            <i>
              <RiMenu3Fill onClick={() => setHamburgerMenu(!hamburgerMenu)} />
            </i>
          </div>
        )}
      </nav>
      <MobileNav
        hamburgerMenu={hamburgerMenu}
        setHamburgerMenuHandler={setHamburgerMenuHandler}
      />
    </header>
  );
}

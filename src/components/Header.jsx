import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";
import { CgMenuRightAlt } from "react-icons/cg";
import logoImg from "../img/logo/logo.png";
import "../styles/components/Header.scss";

export const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [mobLayout, setMobLayout] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setMobLayout(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <div className="cta-container">
          {mobLayout ? (
            <div className="hamburger-menu">
              <CgMenuRightAlt
                onClick={() => setHamburgerMenu(!hamburgerMenu)}
              />
            </div>
          ) : null}
          <Link to="/">Sign up</Link>
        </div>
      </nav>
      <MobileMenu
        hamburgerMenu={hamburgerMenu}
        setHamburgerMenuHandler={setHamburgerMenuHandler}
      />
    </header>
  );
};

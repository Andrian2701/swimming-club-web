import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { headerLinks } from "../../data/headerLinks";
import MobileMenu from "../MobileMenu";
import logoImg from "../../assests/imgs/logo/logo.png";
import "../../styles/components/Header.scss";

const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [mobileLayout, setMobileLayout] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setMobileLayout(window.innerWidth <= 992);
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
            <img src={logoImg} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <ul>
            {headerLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="cta-container">
          {mobileLayout ? (
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

export default Header;

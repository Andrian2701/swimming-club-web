import { useState } from "react";
import { Link } from "react-router-dom";
import { headerNavLinks } from "../const/headerNavLinks";
import { CgMenuRightAlt } from "react-icons/cg";
import { NavButton } from "../components/NavButton";
import { MobileMenu } from "../components/MobileMenu";
import { Presentation } from "../components/Presentation";
import logo from "../assests/img/logo/logo.png";
import "../styles/components/Header.scss";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleSetMobileMenu = (val) => {
    setMobileMenu(val);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <ul>
            {headerNavLinks.map((link) => (
              <li key={link.text}>
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="cta-container">
          <div className="hamburger-menu">
            <CgMenuRightAlt onClick={() => handleSetMobileMenu(!mobileMenu)} />
          </div>
          <div className="sign-up-btn">
            <NavButton id={1} />
          </div>
        </div>
      </nav>
      <MobileMenu
        mobileMenu={mobileMenu}
        handleSetMobileMenu={handleSetMobileMenu}
      />
      <Presentation />
    </header>
  );
};

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { headerNavLinks } from "../../const/headerNavLinks";
import { CgMenuRightAlt } from "react-icons/cg";
import { NavButton } from "../ui/NavButton";
import { MobileMenu } from "../ui/MobileMenu";
import { Presentation } from "../Presentation";
import "../../styles/components/layout/Header.scss";

const logo = require("../../assests/img/logo/logo.png") as string;

export const Header: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const location = useLocation();
  const path: string = location.pathname;

  const handleSetMobileMenu = (val: boolean) => {
    setMobileMenu(val);
  };

  return (
    <header id="home-page-header">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <ul>
            {headerNavLinks
              ? headerNavLinks.map((link) => (
                  <li key={link.text}>
                    <Link to={link.to}>{link.text}</Link>
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="cta-container">
          <div className="hamburger-menu">
            <CgMenuRightAlt onClick={() => handleSetMobileMenu(!mobileMenu)} />
          </div>
          <div className="sign-up-btn">
            <NavButton destination="#" text="Sign up" />
          </div>
        </div>
      </nav>
      <MobileMenu
        mobileMenu={mobileMenu}
        handleSetMobileMenu={handleSetMobileMenu}
      />
      {path === "/" ? <Presentation /> : null}
    </header>
  );
};

import { useState } from "react";
import { Link } from "react-router-dom";
import { headerNavLinks } from "../const/headerNavLinks";
import { CgMenuRightAlt } from "react-icons/cg";
import { NavButton } from "../components/NavButton";
import { MobileMenu } from "../components/MobileMenu";
import "../styles/layout/OtherPagesHeader.scss";

const whiteLogo = require("../assests/img/logo/white-logo.png") as string;

export const OtherPageHeader: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const handleSetMobileMenu = (val: boolean) => {
    setMobileMenu(val);
  };

  return (
    <header id="other-page-header">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={whiteLogo} alt="logo" />
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
      <div className="header-insc">
        <p>Meet Our Team</p>
      </div>
    </header>
  );
};

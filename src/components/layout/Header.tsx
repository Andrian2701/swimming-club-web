import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { NavButton } from "../ui/NavButton";
import { MobileMenu } from "../ui/MobileMenu";
import { HEADER_LINKS } from "../../const/navLinks";
import "../../styles/components/layout/Header.scss";

export const Header = () => {
  const logo = require("../../assests/img/logo/logo.png") as string;
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const handleSetMobileMenu = (val: boolean) => {
    setMobileMenu(val);
  };

  return (
    <header id="header">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <ul>
            {HEADER_LINKS.map((link) => (
              <li key={link.text}>
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="cta-container">
          <div className="hamburger-menu">
            <IoMdMenu onClick={() => handleSetMobileMenu(!mobileMenu)} />
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
    </header>
  );
};

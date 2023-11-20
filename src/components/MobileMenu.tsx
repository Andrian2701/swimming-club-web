import React from "react";
import { Link } from "react-router-dom";
import { mobileMenuNavLinks } from "../const/mobileMenuNavLinks";
import { RiCloseFill } from "react-icons/ri";
import { HiOutlineMapPin } from "react-icons/hi2";
import { BsEnvelope } from "react-icons/bs";
import "../styles/components/MobileMenu.scss";

interface IMobileMenuProps {
  mobileMenu: boolean;
  handleSetMobileMenu: (val: boolean) => void;
}

export const MobileMenu: React.FC<IMobileMenuProps> = ({
  mobileMenu,
  handleSetMobileMenu,
}) => {
  return (
    <div className={`mobile-menu ${mobileMenu ? "open" : "closed"}`}>
      <i>
        <RiCloseFill onClick={() => handleSetMobileMenu(!mobileMenu)} />
      </i>
      <div className="links">
        <ul>
          {mobileMenuNavLinks.map((link) => (
            <li key={link.text}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="contact-info">
        <div className="location">
          <div>
            <HiOutlineMapPin />
          </div>
          <p>
            Sunset Boulevard 124,
            <br></br>
            Miami, FL 33101
          </p>
        </div>
        <div className="gmail">
          <p>
            oceanstars@gmail.com
            <br></br>
            courses@gmail.com
          </p>
          <div>
            <BsEnvelope />
          </div>
        </div>
      </div>
    </div>
  );
};

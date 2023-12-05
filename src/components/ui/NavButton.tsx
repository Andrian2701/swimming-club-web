import { Link } from "react-router-dom";

interface NavButton {
  destination: string;
  text: string;
}

export const NavButton = ({ destination, text }: NavButton) => {
  return <Link to={destination}>{text}</Link>;
};

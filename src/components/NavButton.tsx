import { Link } from "react-router-dom";

interface INavButton {
  destination: string;
  text: string;
}

export const NavButton: React.FC<INavButton> = ({ destination, text }) => {
  return <Link to={destination}>{text}</Link>;
};

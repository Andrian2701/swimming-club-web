import { Link } from "react-router-dom";

interface INavLinkProps {
  paragraph?: string;
  destination: string;
  link: string;
}

export const NavLink = ({ paragraph, destination, link }: INavLinkProps) => {
  return (
    <p>
      {paragraph ? <span>{paragraph}</span> : null}{" "}
      <Link to={destination}>{link}</Link>
    </p>
  );
};

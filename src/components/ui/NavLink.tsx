import { Link } from "react-router-dom";

interface INavLinkProps {
  paragraph?: string;
  destination: string;
  link: string;
}

export const NavLink: React.FC<INavLinkProps> = ({
  paragraph,
  destination,
  link,
}) => {
  return (
    <p>
      {paragraph ? <span>{paragraph}</span> : null}{" "}
      <Link to={destination}>{link}</Link>
    </p>
  );
};

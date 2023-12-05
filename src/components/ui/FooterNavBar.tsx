import { Link } from "react-router-dom";
import { EXPLORE_LINKS } from "../../const/navLinks";
import { RESOURCES_LINKS } from "../../const/navLinks";
import { BLOG_LINKS } from "../../const/navLinks";

export const FooterNavBar = () => {
  return (
    <>
      <div className="explore-links">
        <h3>Explore</h3>
        <ul>
          {EXPLORE_LINKS.map((link) => (
            <li key={link.text}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="resources-links">
        <h3>Resources</h3>
        <ul>
          {RESOURCES_LINKS.map((link) => (
            <li key={link.text}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="blog-links">
        <h3>Latest From Blog</h3>
        <ul>
          {BLOG_LINKS.map((link) => (
            <li key={link.text}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

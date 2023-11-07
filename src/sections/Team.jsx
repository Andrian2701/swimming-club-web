import { Link } from "react-router-dom";
import TeamMembers from "../components/TeamMembers";
import "../styles/sections/Team.scss";

const Team = () => {
  return (
    <section className="our-team">
      <div className="header">
        <span>PASSION & SKILLS</span>
        <h2>Meet the Team</h2>
        <p>
          At our institution, we're home to a dozen experienced physical
          education educators. What ties us together is our unwavering
          enthusiasm for athletics and a distinct approach to working with kids.
        </p>
      </div>
      <div className="team-members">
        <TeamMembers />
      </div>
      <div className="meet-team-btn">
        <Link>Meet the team</Link>
      </div>
    </section>
  );
};

export default Team;

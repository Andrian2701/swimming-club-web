import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import TeamMember from "../../components/TeamMember/TeamMember";
import "../../styles/sections/TeamSection.scss";

const TeamSection = () => {
  return (
    <section className="our-team">
      <div className="header">
        <SectionHeader id={3} />
      </div>
      <div className="team-members">
        <TeamMember />
      </div>
      <div className="meet-team-btn">
        <Link>Meet the team</Link>
      </div>
    </section>
  );
};

export default TeamSection;

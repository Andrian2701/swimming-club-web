import { TextHeading } from "../components/TextHeading";
import { TeamMember } from "../components/TeamMember";
import { NavButton } from "../components/NavButton";
import "../styles/sections/TeamSection.scss";

export const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="header">
        <TextHeading id={3} />
      </div>
      <div className="team-members">
        <TeamMember />
      </div>
      <div className="meet-team-btn">
        <NavButton id={4} />
      </div>
    </section>
  );
};

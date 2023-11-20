import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { teamMembers } from "../const/teamMembers";
import { TextHeading } from "../components/TextHeading";
import { TeamMember } from "../components/TeamMember";
import { NavButton } from "../components/NavButton";
import "../styles/sections/TeamSection.scss";

interface TeamSectionProps {
  headingId: number;
  memberId: number;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  headingId,
  memberId,
}) => {
  const location = useLocation();
  const path: string = location.pathname;

  const memoizedTeamMember = useMemo(
    () => teamMembers.filter((member) => member.id <= memberId),
    []
  );

  return (
    <section className="team-section">
      <div className={`header ${path === "/" ? "home-page" : "team-page"}`}>
        <TextHeading id={headingId} />
      </div>
      <div className="team-members">
        <TeamMember memoizedTeamMember={memoizedTeamMember} />
      </div>
      {path === "/" ? (
        <div className="meet-team-btn">
          <NavButton id={4} />
        </div>
      ) : null}
    </section>
  );
};

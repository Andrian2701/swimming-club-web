import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { teamMembers } from "../const/teamMembers";
import { SectionHeading } from "../components/SectionHeading";
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
        <SectionHeading id={headingId} />
      </div>
      <div className="team-members">
        <TeamMember memoizedTeamMember={memoizedTeamMember} />
      </div>
      {path === "/" ? (
        <div className="meet-team-btn">
          <NavButton destination="/our-team" text="Meet the team" />
        </div>
      ) : null}
    </section>
  );
};

import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { teamMembers } from "../../const/teamMembers";
import { SectionHeading } from "../SectionHeading";
import { TeamMember } from "../TeamMember";
import { NavButton } from "../ui/NavButton";
import { PageTitleBar } from "../PageTitleBar";
import "../../styles/components/sections/TeamSection.scss";

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
    [memberId]
  );

  return (
    <section className={`team-section ${path === "/" ? "white" : "grey"}`}>
      <div className="header">
        {path === "/" ? (
          <SectionHeading id={headingId} />
        ) : (
          <PageTitleBar text={"Our Team"} />
        )}
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

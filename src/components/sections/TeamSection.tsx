import { Suspense, useMemo } from "react";
import { lazily } from "react-lazily";
import { useLocation } from "react-router-dom";
import { TeamMember } from "../features/TeamMember";
import { TEAM_MEMBERS } from "../../const/teamMembers";
import "../../styles/components/sections/TeamSection.scss";

const { SectionHeading } = lazily(() => import("../features/SectionHeading"));
const { PageTitleBar } = lazily(() => import("../features/PageTitleBar"));
const { NavButton } = lazily(() => import("../ui/NavButton"));

interface TeamSectionProps {
  headingId: number;
  memberId: number;
}

export const TeamSection = ({ headingId, memberId }: TeamSectionProps) => {
  const location = useLocation();
  const path: string = location.pathname;

  const memoizedTeamMember = useMemo(
    () => TEAM_MEMBERS.filter((member) => member.id <= memberId),
    [memberId]
  );

  return (
    <section className={`our-team ${path === "/" ? "white" : "grey"}`}>
      {path === "/" ? (
        <div className="header">
          <Suspense>
            <SectionHeading id={headingId} />
          </Suspense>
        </div>
      ) : (
        <div className="page-title-bar">
          <Suspense>
            <PageTitleBar text={"Our Team"} />
          </Suspense>
        </div>
      )}
      <div className="team-members">
        <TeamMember memoizedTeamMember={memoizedTeamMember} />
      </div>
      {path === "/" && (
        <div className="meet-team-btn">
          <Suspense>
            <NavButton destination="/our-team" text="Meet the team" />
          </Suspense>
        </div>
      )}
    </section>
  );
};

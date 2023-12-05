import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { TEAM_MEMBERS } from "../const/teamMembers";
import { MemberProfileSection } from "../components/sections/MemberProfileSection";
import { MemberSkillsSection } from "../components/sections/MemberSkillsSection";

export const TeamMemberPage = () => {
  const { surname } = useParams();

  const memoizedTeamMember = useMemo(
    () => TEAM_MEMBERS.filter((member) => member.surname === surname),
    [surname]
  );

  return (
    <main id="main">
      <MemberProfileSection memoizedTeamMember={memoizedTeamMember} />
      <MemberSkillsSection memoizedTeamMember={memoizedTeamMember} />
    </main>
  );
};

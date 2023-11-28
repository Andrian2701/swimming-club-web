import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { teamMembers } from "../const/teamMembers";
import { MemberProfileSection } from "../components/sections/MemberProfileSection";
import { MemberSkillsSection } from "../components/sections/MemberSkillsSection";
import { Footer } from "../components/layout/Footer";

export const TeamMemberPage = () => {
  const { surname } = useParams();

  const memoizedTeamMember = useMemo(
    () => teamMembers.filter((member) => member.surname === surname),
    [surname]
  );

  return (
    <>
      <Header />
      <main>
        <MemberProfileSection memoizedTeamMember={memoizedTeamMember} />
        <MemberSkillsSection memoizedTeamMember={memoizedTeamMember} />
      </main>
      <Footer />
    </>
  );
};

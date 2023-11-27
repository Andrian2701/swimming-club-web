import { Header } from "../components/layout/Header";
import { SingleMemberSection } from "../components/sections/SingleMemberSection";
import { MemberSkillsSection } from "../components/sections/MemberSkillsSection";
import { Footer } from "../components/layout/Footer";

export const TeamMemberPage = () => {
  return (
    <>
      <Header />
      <main>
        <SingleMemberSection />
        <MemberSkillsSection />
      </main>
      <Footer />
    </>
  );
};

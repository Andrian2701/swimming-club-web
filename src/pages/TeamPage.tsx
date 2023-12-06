import { useScrollTop } from "../hooks/useScrollTop";
import { TeamSection } from "../components/sections/TeamSection";

export const TeamPage = () => {
  useScrollTop();

  return (
    <main id="main">
      <TeamSection headingId={7} memberId={8} />
    </main>
  );
};

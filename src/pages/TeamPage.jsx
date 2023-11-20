import { OtherPageHeader } from "../layout/OtherPageHeader";
import { TeamSection } from "../sections/TeamSection";
import { Footer } from "../layout/Footer";

export const TeamPage = () => {
  return (
    <>
      <OtherPageHeader />
      <main>
        <TeamSection headingId={7} memberId={8} />
      </main>
      <Footer />
    </>
  );
};

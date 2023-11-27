import { Header } from "../components/layout/Header";
import { TeamSection } from "../components/sections/TeamSection";
import { Footer } from "../components/layout/Footer";
import { WhyChooseUsSection } from "../components/sections/WhyChooseUsSection";

export const TeamPage = () => {
  return (
    <>
      <Header />
      <main>
        <TeamSection headingId={7} memberId={8} />
      </main>
      <Footer />
    </>
  );
};

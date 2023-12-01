import { Header } from "../components/layout/Header";
import { TeamSection } from "../components/sections/TeamSection";
import { Footer } from "../components/layout/Footer";

export const TeamPage = () => {
  return (
    <>
      <Header />
      <main id="main">
        <TeamSection headingId={7} memberId={8} />
      </main>
      <Footer />
    </>
  );
};

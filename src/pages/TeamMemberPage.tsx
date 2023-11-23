import { Header } from "../layout/Header";
import { SingleMemberSection } from "../sections/SingleMemberSection";
import { Footer } from "../layout/Footer";

export const TeamMemberPage = () => {
  return (
    <>
      <Header />
      <main>
        <SingleMemberSection />
      </main>
      <Footer />
    </>
  );
};

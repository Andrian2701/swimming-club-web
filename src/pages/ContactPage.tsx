import { Header } from "../components/layout/Header";
import { ClubLocationSection } from "../components/sections/ClubLocationSection";
import { CoursesSection } from "../components/sections/CoursesSection";
import { Footer } from "../components/layout/Footer";

export const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <ClubLocationSection />
        <CoursesSection headingId={5} />
      </main>
      <Footer />
    </>
  );
};

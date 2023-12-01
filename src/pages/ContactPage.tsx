import { Header } from "../components/layout/Header";
import { ClubLocationSection } from "../components/sections/ClubLocationSection";
import { ContactFieldSection } from "../components/sections/ContactFieldSection";
import { CoursesSection } from "../components/sections/CoursesSection";
import { Footer } from "../components/layout/Footer";

export const ContactPage = () => {
  return (
    <>
      <Header />
      <main id="main">
        <ClubLocationSection />
        <ContactFieldSection />
        <CoursesSection headingId={5} />
      </main>
      <Footer />
    </>
  );
};

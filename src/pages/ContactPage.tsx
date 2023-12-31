import { useScrollTop } from "../hooks/useScrollTop";
import { ClubLocationSection } from "../components/sections/ClubLocationSection";
import { ContactFieldSection } from "../components/sections/ContactFieldSection";
import { CoursesSection } from "../components/sections/CoursesSection";

export const ContactPage = () => {
  useScrollTop();

  return (
    <main id="main">
      <ClubLocationSection />
      <ContactFieldSection />
      <CoursesSection headingId={5} />
    </main>
  );
};

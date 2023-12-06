import { useScrollTop } from "../hooks/useScrollTop";
import { CoursesSection } from "../components/sections/CoursesSection";

export const CoursesPage = () => {
  useScrollTop();

  return (
    <main id="main">
      <CoursesSection headingId={8} />
    </main>
  );
};

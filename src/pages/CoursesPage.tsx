import { Header } from "../layout/Header";
import { CoursesSection } from "../sections/CoursesSection";
import { Footer } from "../layout/Footer";

export const CoursesPage = () => {
  return (
    <>
      <Header />
      <main>
        <CoursesSection headingId={8} />
      </main>
      <Footer />
    </>
  );
};

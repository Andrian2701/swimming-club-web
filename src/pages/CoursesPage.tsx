import { Header } from "../components/layout/Header";
import { CoursesSection } from "../components/sections/CoursesSection";
import { Footer } from "../components/layout/Footer";

export const CoursesPage = () => {
  return (
    <>
      <Header />
      <main id="main">
        <CoursesSection headingId={8} />
      </main>
      <Footer />
    </>
  );
};

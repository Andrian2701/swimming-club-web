import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TeamPage } from "./pages/TeamPage";
import { CoursesPage } from "./pages/CoursesPage";
import { TeamMemberPage } from "./pages/TeamMemberPage";
import { ContactPage } from "./pages/ContactPage";
import "../src/styles/global/_boilerplate.scss";

export const App = () => {
  return (
    <div id="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-team" element={<TeamPage />} />
        <Route path="/our-courses" element={<CoursesPage />} />
        <Route
          path="/our-team/team-member/:surname"
          element={<TeamMemberPage />}
        />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

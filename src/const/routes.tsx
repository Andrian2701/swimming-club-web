import { TeamPage } from "../pages/TeamPage";
import { CoursesPage } from "../pages/CoursesPage";
import { TeamMemberPage } from "../pages/TeamMemberPage";
import { ContactPage } from "../pages/ContactPage";

interface Routes {
  path: string;
  element: React.ReactNode;
}

export const ROUTES: Routes[] = [
  {
    path: "our-team",
    element: <TeamPage />,
  },
  {
    path: "our-courses",
    element: <CoursesPage />,
  },
  {
    path: "our-team/team-member/:surname",
    element: <TeamMemberPage />,
  },
  {
    path: "contact-us",
    element: <ContactPage />,
  },
];

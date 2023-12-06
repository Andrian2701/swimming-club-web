import { useLocation } from "react-router-dom";
import { useScrollTop } from "../hooks/useScrollTop";
import { PresentationSection } from "../components/sections/PresentationSection";
import { WhatSetsUsApartSection } from "../components/sections/WhatSetsUsApartSection";
import { WhyChooseUsSection } from "../components/sections/WhyChooseUsSection";
import { TeamSection } from "../components/sections/TeamSection";
import { TrainingOverviewSection } from "../components/sections/TrainingOverviewSection";
import { CoursesSection } from "../components/sections/CoursesSection";

export const HomePage = () => {
  const location = useLocation();
  const path: string = location.pathname;

  useScrollTop();

  return (
    <main id="main">
      {path === "/" && <PresentationSection />}
      <WhatSetsUsApartSection />
      <WhyChooseUsSection />
      <TeamSection headingId={3} memberId={4} />
      <TrainingOverviewSection />
      <CoursesSection headingId={5} />
    </main>
  );
};

import { Header } from "../components/layout/Header";
import { WhatSetsUsApartSection } from "../components/sections/WhatSetsUsApartSection";
import { WhyChooseUsSection } from "../components/sections/WhyChooseUsSection";
import { TeamSection } from "../components/sections/TeamSection";
import { TrainingOverviewSection } from "../components/sections/TrainingOverviewSection";
import { CoursesSection } from "../components/sections/CoursesSection";
import { Footer } from "../components/layout/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main id="main">
        <WhatSetsUsApartSection />
        <WhyChooseUsSection />
        <TeamSection headingId={3} memberId={4} />
        <TrainingOverviewSection />
        <CoursesSection headingId={5} />
      </main>
      <Footer />
    </>
  );
};

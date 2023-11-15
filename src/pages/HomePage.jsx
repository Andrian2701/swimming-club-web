import { Header } from "../layout/Header";
import { WhatSetsUsApartSection } from "../sections/WhatSetsUsApartSection";
import { WhyChooseUsSection } from "../sections/WhyChooseUsSection";
import { TeamSection } from "../sections/TeamSection";
import { TrainingOverviewSection } from "../sections/TrainingOverviewSection";
import { CoursesSection } from "../sections/CoursesSection";
import { Footer } from "../layout/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <WhatSetsUsApartSection />
        <WhyChooseUsSection />
        <TeamSection />
        <TrainingOverviewSection />
        <CoursesSection />
      </main>
      <Footer />
    </>
  );
};

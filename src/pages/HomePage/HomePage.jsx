import Header from "../../components/Header";
import WhatSetsUsApartSection from "../../sections/WhatSetsUsApartSection";
import WhyChooseUsSection from "../../sections/WhyChooseUsSection";
import TeamSection from "../../sections/TeamSection";
import TrainingOverviewSection from "../../sections/TrainingOverviewSection";
import CoursesSection from "../../sections/CoursesSection";

const HomePage = () => {
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
    </>
  );
};

export default HomePage;

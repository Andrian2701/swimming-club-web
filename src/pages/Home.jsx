import { Header } from "../components/Header";
import WhyChooseUs from "../sections/WhyChooseUs";
import WhatSetsUsApart from "../sections/WhatSetsUsApart";
import Team from "../sections/Team";
import TrainingOverview from "../sections/TrainingOverview";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <WhatSetsUsApart />
        <WhyChooseUs />
        <Team />
        <TrainingOverview />
      </main>
    </>
  );
};

export default Home;

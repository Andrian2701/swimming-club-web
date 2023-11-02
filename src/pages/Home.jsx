import Header from "../components/Header";
import WhyChooseUs from "../components/WhyChooseUs";
import WhatSetsUsApart from "../components/WhatSetsUsApart";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <WhatSetsUsApart />
        <WhyChooseUs />
        <Team />
      </main>
    </>
  );
}

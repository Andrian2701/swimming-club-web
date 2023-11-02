import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import TabbedContent from "../components/TabbedContent";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TabbedContent />
        <Benefits />
        <Team />
      </main>
    </>
  );
}

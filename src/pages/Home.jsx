import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import TabbedContent from "../components/TabbedContent";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <TabbedContent />
      </main>
    </>
  );
}

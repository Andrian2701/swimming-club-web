import { Header } from "../components/layout/Header";
import { ContactInfoSection } from "../components/sections/ContactInfoSection";
import { Footer } from "../components/layout/Footer";

export const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <ContactInfoSection />
      </main>
      <Footer />
    </>
  );
};

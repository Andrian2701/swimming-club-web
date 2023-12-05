import { SectionHeading } from "../features/SectionHeading";
import { ContactForm } from "../ui/ContactForm";
import { ImagesContainer } from "../features/ImagesContainer";
import "../../styles/components/sections/ContactFieldSection.scss";

const img4 = require("../../assests/img/sections/Img4.webp") as string;
const img2 = require("../../assests/img/sections/Img2.jpeg") as string;

export const ContactFieldSection = () => {
  return (
    <section className="contact-field">
      <div className="form-container">
        <div className="header">
          <SectionHeading id={8} />
        </div>
        <search>
          <ContactForm />
        </search>
      </div>
      <div className="img-container">
        <ImagesContainer img1={img2} img2={img4} />
      </div>
    </section>
  );
};

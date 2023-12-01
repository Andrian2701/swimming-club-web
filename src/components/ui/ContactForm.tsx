import { NavButton } from "./NavButton";
import "../../styles/components/ui/ContactForm.scss";

export const ContactForm = () => {
  return (
    <form>
      <div className="form-inputs">
        <div className="user-data-inputs">
          <div>
            <label>YOUR NAME *</label>
            <span>
              <input type="text" />
            </span>
          </div>
          <div>
            <label>EMAIL-ADDRESS *</label>
            <span>
              <input type="email" />
            </span>
          </div>
          <div>
            <label>PHONE NUMBER (OPTIONAL)</label>
            <span>
              <input type="tel" />
            </span>
          </div>
        </div>
        <div className="message-textarea">
          <div>
            <label>MESSAGE</label>
            <span>
              <textarea />
            </span>
          </div>
        </div>
      </div>
      <div className="send-form-btn">
        <NavButton destination="#" text="Send form" />
      </div>
    </form>
  );
};

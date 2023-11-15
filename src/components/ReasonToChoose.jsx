import { reasonsToChoose } from "../const/reasonsToChoose";
import "../styles/components/ReasonsToChoose.scss";

export const ReasonToChoose = () => {
  return (
    <>
      {reasonsToChoose.map((item, idx) => (
        <div
          key={item.id}
          className={`reason ${
            idx % 4 === 0 ? "white" : idx % 2 === 0 ? "purple" : "green"
          }`}
        >
          <h4>{item.heading}</h4>
          <div>{item.description}</div>
        </div>
      ))}
    </>
  );
};

import { REASONS_TO_CHOOSE } from "../../const/textContent";
import "../../styles/components/features/ReasonsToChoose.scss";

export const ReasonToChoose = () => {
  return (
    <>
      {REASONS_TO_CHOOSE.map((item, idx) => (
        <div
          key={item.id}
          className={`reason ${
            idx % 4 === 0 ? "white" : idx % 2 === 0 ? "purple" : "green"
          }`}
        >
          <h4>{item.order}</h4>
          <div>{item.desc}</div>
        </div>
      ))}
    </>
  );
};

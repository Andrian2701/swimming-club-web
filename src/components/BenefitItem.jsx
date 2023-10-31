import { benefitsData } from "../const/contentData";

export default function BanefitItem() {
  return (
    <>
      {benefitsData.map((item) => (
        <div
          key={item.id}
          className={`benefit-item ${item.id % 2 !== 0 ? "purple" : "green"}`}
        >
          <span>{item.icon}</span>
          <h4>{item.heading}</h4>
          <div>{item.description}</div>
        </div>
      ))}
    </>
  );
}

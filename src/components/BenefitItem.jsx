import { benefitsData } from "../const/contentData";

export default function BanefitItem() {
  return (
    <>
      {benefitsData.map((item, index) => (
        <div
          key={item.id}
          className={`benefit-item ${
            index % 4 === 0 ? "test" : index % 2 === 0 ? "purple" : "green"
          }`}
        >
          <h4>{item.heading}</h4>
          <div>{item.description}</div>
        </div>
      ))}
    </>
  );
}

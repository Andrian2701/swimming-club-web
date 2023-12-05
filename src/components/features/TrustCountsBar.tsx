import { TrustCount } from "./TrustCount";
import { TRUST_COUNTS } from "../../const/trustCounts";
import "../../styles/components/features/TrustCountsBar.scss";

export const TrustCountsBar = () => {
  return (
    <>
      {TRUST_COUNTS.map((count) => (
        <TrustCount
          key={count.title}
          title={count.title}
          maxVal={count.maxVal}
          time={count.time}
          className={count.className}
          char={count.char}
        />
      ))}
    </>
  );
};

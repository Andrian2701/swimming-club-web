import { useMemo } from "react";
import { sectionHeadings } from "../const/sectionHeadings";

export const SectionHeading: React.FC<{ id: number }> = ({ id }) => {
  const memoizedCorrespondingHeading = useMemo(
    () => sectionHeadings.filter((header) => header.id === id),
    [id]
  );

  return (
    <>
      {memoizedCorrespondingHeading.map((heading) => (
        <div className="text" key={heading.id}>
          <div className="header">
            <span>{heading.span}</span>
            <h2>{heading.h2}</h2>
          </div>
          <div className="desc">
            <p>{heading.p}</p>
          </div>
        </div>
      ))}
    </>
  );
};

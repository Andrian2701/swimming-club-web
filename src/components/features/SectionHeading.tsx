import { useMemo } from "react";
import { SECTION_HEADINGS } from "../../const/textContent";

interface SectionHeading {
  id: number;
}

export const SectionHeading = ({ id }: SectionHeading) => {
  const memoizedCorrespondingHeading = useMemo(
    () => SECTION_HEADINGS.filter((header) => header.id === id),
    [id]
  );

  return (
    <>
      {memoizedCorrespondingHeading.map((heading) => (
        <div className="text" key={heading.id}>
          <div className="header">
            <span>{heading.title}</span>
            <h2>{heading.heading}</h2>
          </div>
          <div className="desc">
            <p>{heading.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

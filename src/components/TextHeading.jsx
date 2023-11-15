import { useMemo } from "react";
import { textHeadings } from "../const/textHeadings";

export const TextHeading = ({ id }) => {
  const correspondingHeader = useMemo(
    () => textHeadings.filter((header) => header.id === id),
    [id]
  );

  return (
    <>
      {correspondingHeader.map((header) => (
        <div className="text" key={header.id}>
          <span>{header.span}</span>
          <h2>{header.h2}</h2>
          <p>{header.p}</p>
        </div>
      ))}
    </>
  );
};

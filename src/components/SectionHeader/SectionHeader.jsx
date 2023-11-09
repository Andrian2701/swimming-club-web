import { useMemo } from "react";
import { sectionHeaders } from "../../data/sectionHeaders";

const SectionHeader = ({ id }) => {
  const correspondingHeader = useMemo(
    () => sectionHeaders.filter((header) => header.id === id),
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

export default SectionHeader;

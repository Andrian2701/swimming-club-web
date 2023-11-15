import { useMemo } from "react";
import { Link } from "react-router-dom";
import { navButtons } from "../const/navButtons";

export const NavButton = ({ id }) => {
  const memoizedCorrespondingButton = useMemo(
    () => navButtons.filter((button) => button.id === id),
    [id]
  );

  return (
    <>
      {memoizedCorrespondingButton.map((button) => (
        <Link to={button.to} key={button.id}>
          {button.text}
        </Link>
      ))}
    </>
  );
};

import { useMemo } from "react";
import { teamMembers } from "../../data/teamMembers";
import { PiCaretRightBold } from "react-icons/pi";
import "../../styles/components/TeamMembers.scss";

const TeamMember = () => {
  const singleMember = useMemo(
    () => teamMembers.filter((member) => member.id < 5),
    []
  );

  return (
    <>
      {singleMember.map((member) => (
        <div className="member" key={member.id}>
          <span>{member.position}</span>
          <div className="img-container">
            <img src={member.img} alt="member" />
          </div>
          <div>
            <span>
              {member.name}
              <br></br>
              {member.surname}
            </span>
            <div className="go-right-icon">
              <PiCaretRightBold />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamMember;

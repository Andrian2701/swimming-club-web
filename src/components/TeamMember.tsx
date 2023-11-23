import { Link, useLocation } from "react-router-dom";
import { PiCaretRightBold } from "react-icons/pi";
import { ITeamMember } from "../const/teamMembers";
import "../styles/components/TeamMembers.scss";

export const TeamMember: React.FC<{
  memoizedTeamMember: ITeamMember[];
}> = ({ memoizedTeamMember }) => {
  const location = useLocation();
  const path: string = location.pathname;

  return (
    <>
      {memoizedTeamMember.map((member) => (
        <Link
          to={`/our-team/team-member/${member.surname}`}
          className={`member ${
            path === `/our-team/team-member/${member.surname}`
              ? "background-white"
              : "background-grey"
          }`}
          key={member.id}
        >
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
        </Link>
      ))}
    </>
  );
};

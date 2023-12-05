import { Link, useLocation } from "react-router-dom";
import { PiCaretRightBold } from "react-icons/pi";
import { TeamMemberProps } from "../../const/teamMembers";
import "../../styles/components/features/TeamMembers.scss";

export const TeamMember: React.FC<{
  memoizedTeamMember: TeamMemberProps[];
}> = ({ memoizedTeamMember }) => {
  const location = useLocation();
  const path: string = location.pathname;

  return (
    <>
      {memoizedTeamMember.map((member) => (
        <Link
          key={member.id}
          to={`/our-team/team-member/${member.surname}`}
          className={`member ${
            path === "/" ? "background-grey" : "background-white"
          }`}
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

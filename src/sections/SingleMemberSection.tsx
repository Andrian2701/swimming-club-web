import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { PageTitleBar } from "../components/PageTitleBar";
import { TeamMember } from "../components/TeamMember";
import { teamMembers } from "../const/teamMembers";
import "../styles/sections/SingleMemberSection.scss";

export const SingleMemberSection = () => {
  const { surname } = useParams();

  const memoizedTeamMember = useMemo(
    () => teamMembers.filter((member) => member.surname === surname),
    [surname]
  );

  return (
    <section className="team-member-section">
      <div className="header">
        <PageTitleBar text={memoizedTeamMember[0].fullName} />
      </div>
      <div className="profile">
        <div className="team-member">
          <TeamMember memoizedTeamMember={memoizedTeamMember} />
        </div>
        <div className="portfolio">
          <div className="about">
            <h2>About</h2>
            <p>{memoizedTeamMember[0].about}</p>
          </div>
          <div className="achievements">
            <h2>Achievements</h2>
            <ul>
              {memoizedTeamMember[0].achievements.map((achievement) => (
                <li key={achievement}>
                  <div className="check-icon">
                    <FaCheck />
                  </div>
                  <p>{achievement}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

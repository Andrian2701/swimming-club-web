import { ITeamMember } from "../../const/teamMembers";
import { PageTitleBar } from "../PageTitleBar";
import { TeamMember } from "../TeamMember";
import { Achievements } from "../Achievements";
import "../../styles/components/sections/MemberProfile.scss";

export const MemberProfileSection: React.FC<{
  memoizedTeamMember: ITeamMember[];
}> = ({ memoizedTeamMember }) => {
  return (
    <section className="member-profile">
      <div className="header">
        <PageTitleBar text={memoizedTeamMember[0].fullName} />
      </div>
      <div className="profile-content">
        <div className="team-member">
          <TeamMember memoizedTeamMember={memoizedTeamMember} />
        </div>
        <div className="profile-text">
          <div className="about">
            <h2>About</h2>
            <p>{memoizedTeamMember[0].about}</p>
          </div>
          <div className="achievements">
            <h2>Achievements</h2>
            <Achievements achievements={memoizedTeamMember[0].achievements} />
          </div>
        </div>
      </div>
    </section>
  );
};

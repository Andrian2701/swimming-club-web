import { TeamMemberProps } from "../../const/teamMembers";
import { ProgressBar } from "../features/ProgressBar";
import { ImagesContainer } from "../features/ImagesContainer";
import "../../styles/components/sections/MemberSkillsSection.scss";

const img6 = require("../../assests/img/sections/img6.webp") as string;

export const MemberSkillsSection: React.FC<{
  memoizedTeamMember: TeamMemberProps[];
}> = ({ memoizedTeamMember }) => {
  return (
    <section className="member-skills">
      <div className="skills">
        <div className="header">
          <h2>My Skills</h2>
          <p>
            It is the result of my talents and efforts. Every single day I
            improve. I am truly engaged in finding each kid's motivation to
            achieve progress.
          </p>
        </div>
        <div className="progress-bar">
          <ProgressBar skills={memoizedTeamMember[0].skills} />
        </div>
      </div>
      <div className="img-container">
        <ImagesContainer img1={img6} />
      </div>
    </section>
  );
};

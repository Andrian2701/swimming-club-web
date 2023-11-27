import { ProgressLine } from "../ProgressLine";
import img6 from "../../assests/img/sections/img6.webp";
import "../../styles/components/sections/MemberSkillsSection.scss";

// const img6 = require("../../assests/img/sections/img6.webp") as string;

export const MemberSkillsSection = () => {
  return (
    <div className="member-skills-section">
      <div className="skills-container">
        <div className="header">
          <h2>My Skills</h2>
          <p>
            It is the result of my talents and efforts. Every single day I
            improve. I am truly engaged in finding each kid's motivation to
            achieve progress.
          </p>
        </div>
        <div className="progress-bar">
          <div className="progress">
            <ProgressLine
              maxVal={100}
              time={2}
              label="Experience"
              visualParts={[
                {
                  percentage: "100%",
                  color: "#4f2EC9",
                },
              ]}
            />
          </div>
          <div className="progress">
            <ProgressLine
              maxVal={100}
              time={2}
              label="Competition success"
              visualParts={[
                {
                  percentage: "98%",
                  color: "#4f2EC9",
                },
              ]}
            />
          </div>
          <div className="progress">
            <ProgressLine
              maxVal={100}
              time={2}
              label="Positive feedbacks"
              visualParts={[
                {
                  percentage: "78%",
                  color: "#4f2EC9",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src={img6} alt="section-img" />
      </div>
    </div>
  );
};

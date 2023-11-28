import { ISkills } from "../const/teamMembers";
import { ProgressLine } from "./ProgressLine";
import "../styles/components/ProgressBar.scss";

export const ProgressBar: React.FC<{ skills: ISkills[] }> = ({ skills }) => {
  return (
    <>
      {skills.map((line) => (
        <ProgressLine
          key={line.label}
          maxVal={line.maxVal}
          time={line.time}
          label={line.label}
          visualParts={line.visualParts}
        />
      ))}
    </>
  );
};

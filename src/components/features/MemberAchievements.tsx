import { FaCheck } from "react-icons/fa6";
import "../../styles/components/features/MemberAchievements.scss";

export const MemberAchievements: React.FC<{
  achievements: string[];
}> = ({ achievements }) => {
  return (
    <ul>
      {achievements.map((achievement) => (
        <li key={achievement}>
          <div className="check-icon">
            <FaCheck />
          </div>
          <p>{achievement}</p>
        </li>
      ))}
    </ul>
  );
};

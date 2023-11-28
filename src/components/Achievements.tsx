import { FaCheck } from "react-icons/fa6";
import "../styles/components/Achievements.scss";

export const Achievements: React.FC<{
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

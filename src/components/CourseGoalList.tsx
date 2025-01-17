import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
            <p>{goal.title}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

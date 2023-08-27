import { selectTaskList } from "features/tasks/selectors/TaskSelectors";
import TaskGridItem from "./TaskGridItem";
import { useSelector } from "react-redux";

export const TaskGrid = () => {
  const taskList = useSelector(selectTaskList);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 gap-2  overflow-y-auto  max-h-[55rem]">
      {taskList.map((taskItem, index) => {
        return <TaskGridItem taskItem={taskItem} index={index} />;
      })}
    </div>
  );
};

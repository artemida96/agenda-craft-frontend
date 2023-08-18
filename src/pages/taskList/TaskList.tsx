import TaskListItem from "./TaskListItem"; // Import your TaskListItem component
import Task from "features/tasks/domain/dto/Task";
import { useSelector } from "react-redux";
import { selectTaskList } from "features/tasks/selectors/TaskSelectors";

export const TaskList = () => {
  const taskList = useSelector(selectTaskList);
  return (
    <>
      <div className="p-8 overflow-y-auto max-h-[55rem]">
        {taskList?.map((taskItem: Task) => (
          <TaskListItem key={taskItem.id} taskItem={taskItem} />
        ))}
      </div>
    </>
  );
};

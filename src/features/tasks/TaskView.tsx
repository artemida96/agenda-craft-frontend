import GridIcon from "shared/icons/GridIcon";
import TaskGrid from "./components/taskGrid/TaskGrid";
import { useState } from "react";
import TaskList from "./components/taskList/TaskList";
import ListIcon from "shared/icons/ListIcon";
import { format } from "date-fns";

const TaskView = () => {
  const [isGridTaskViewClicked, setIsGridTaskView] = useState(false);

  const handleGridTaskViewClick = () => {
    setIsGridTaskView(true);
  };
  const handleListTaskViewClick = () => {
    setIsGridTaskView(false);
  };
  return (
    <div className="ml-4 mt-4">
      <button className="button mr-2" onClick={handleListTaskViewClick}>
        <ListIcon
          width={24}
          height={24}
          color={!isGridTaskViewClicked ? "#cc9f13" : ""}
        />
      </button>
      <button className="button " onClick={handleGridTaskViewClick}>
        <GridIcon
          width={24}
          height={24}
          color={isGridTaskViewClicked ? "#cc9f13" : ""}
        />
      </button>

      <span className="ml-8">{format(new Date(), "dd/MM/yyyy")}</span>
      {isGridTaskViewClicked ? <TaskGrid /> : <TaskList />}
    </div>
  );
};
export default TaskView;

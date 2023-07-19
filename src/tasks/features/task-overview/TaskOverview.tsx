import GridIcon from "shared/icons/GridIcon";
import { useState } from "react";
import ListIcon from "shared/icons/ListIcon";
import { format } from "date-fns";
import { TaskGrid } from "./components/taskGrid/TaskGrid";
import { TaskList } from "./components/taskList/TaskList";
import { TaskFormDialog } from "tasks/ui/task-form-dialog/TaskFormDialog";
import Dialog from "shared/dialog/Dialog";

export const TaskOverview = () => {
  const [isGridTaskViewClicked, setIsGridTaskView] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const handleGridTaskViewClick = () => {
    setIsGridTaskView(true);
  };
  const handleListTaskViewClick = () => {
    setIsGridTaskView(false);
  };
  const onAddTask = (action: boolean) => {
    setAddTask(action);
  };
  return (
    <>
      <div className="flex items-center justify-between ml-4 mt-4 pb-2">
        <div className="flex">
          <button className="button mr-2" onClick={handleListTaskViewClick}>
            <ListIcon
              width={24}
              height={24}
              color={!isGridTaskViewClicked ? "#cc9f13" : ""}
            />
          </button>
          <button className="button" onClick={handleGridTaskViewClick}>
            <GridIcon
              width={24}
              height={24}
              color={isGridTaskViewClicked ? "#cc9f13" : ""}
            />
          </button>
        </div>
        <div className="flex ">
          <span className="ml-8">{format(new Date(), "dd/MM/yyyy")}</span>
        </div>
        <div>
          <button
            className="bg-primary p-2 w-24 mr-8 "
            onClick={() => onAddTask(true)}
          >
            Add a task
          </button>
        </div>
      </div>

      <Dialog
        dialogIsOpen={addTask}
        header={"Add Task"}
        onUpdate={() => onAddTask(false)}
        content={<TaskFormDialog />}
      ></Dialog>
      {isGridTaskViewClicked ? <TaskGrid /> : <TaskList />}
    </>
  );
};

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { TaskGrid } from "../taskGrid/TaskGrid";
import { TaskList } from "../taskList/TaskList";
import GridIcon from "components/shared/icons/GridIcon";
import ListIcon from "components/shared/icons/ListIcon";
import { TaskForm } from "features/tasks/components/TaskForm";
import Dialog from "components/shared/dialog/Dialog";
import { fetch } from "features/tasks/domain/services/TaskApiService";
import { useDispatch } from "react-redux";
import { fetchTasksSuccess } from "features/tasks/reducers/TasksReducer";

interface TaskOverviewProps {
  queryParams?: Record<string, string>;
}

export const TaskOverview = (queryParams: TaskOverviewProps) => {
  const dispatchTask = useDispatch();

  const fetchTasks = async (filters?: Record<string, string>) => {
    try {
      const tasks = await fetch(filters);
      dispatchTask(fetchTasksSuccess(tasks));
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

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

  const onSubmit = async (e: any) => {
    setAddTask(false);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const filters = Object.fromEntries(urlParams.entries());
    fetchTasks(filters);
  }, [window.location.search]);

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
        content={<TaskForm onSubmit={onSubmit} />}
      ></Dialog>
      {isGridTaskViewClicked ? <TaskGrid /> : <TaskList />}
    </>
  );
};

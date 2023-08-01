import Dialog from "components/shared/dialog/Dialog";
import EditSVG from "components/shared/icons/EditSVG";
import FavoriteSVG from "components/shared/icons/FavoriteSVG";
import TrashSVG from "components/shared/icons/TrashSVG";
import WarningDialog from "components/shared/warning-dialog/WarningDialog";
import { format } from "date-fns";
import { TaskForm } from "features/tasks/components/TaskForm";
import Task from "features/tasks/domain/dto/Task";
import { useState } from "react";

interface TaskListItemType {
  taskItem: Task;
}
const TaskListItem = ({ taskItem }: TaskListItemType) => {
  const [editTask, setEditTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);

  const onEditTask = (action: boolean) => {
    setEditTask(action);
  };

  const onDeleteTask = (action: boolean) => {
    setDeleteTask(action);
  };

  return (
    <div>
      <div className="mt-4 p-2 bg-white rounded-lg drop-shadow-xl   hover:bg-primary delay-75">
        <div className="flex flex-col gap-2 p-4" key={taskItem.id}>
          <span>Title: {taskItem.title}</span>
          <span>Description: {taskItem.description}</span>
          <span>Date: {format(taskItem.date, "yyyy-MM-dd")}</span>

          <div className="flex self-end gap-x-2">
            <button>
              <FavoriteSVG
                width={24}
                height={24}
                color={taskItem.isFavorite ? "#cc9f13" : "#6c757d"}
              />
            </button>
            <button onClick={() => onDeleteTask(true)}>
              <TrashSVG width={24} height={24} />
            </button>
            <button onClick={() => onEditTask(true)}>
              <EditSVG width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
      {editTask && (
        <Dialog
          dialogIsOpen={editTask}
          header={"Edit Task"}
          onUpdate={() => onEditTask(false)}
          content={<TaskForm {...taskItem} />}
        />
      )}
      <WarningDialog
        warningDialogIsOpen={deleteTask}
        itemTitle={taskItem.title}
        onUpdate={() => onDeleteTask(false)}
      />
    </div>
  );
};
export default TaskListItem;

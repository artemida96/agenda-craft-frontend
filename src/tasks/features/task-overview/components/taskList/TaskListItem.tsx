import { format } from "date-fns";
import FavoriteSVG from "shared/icons/FavoriteSVG";
import TrashSVG from "shared/icons/TrashSVG";
import EditSVG from "shared/icons/EditSVG";
import TaskDto from "tasks/domain/dto/TaskDto";
import Dialog from "shared/dialog/Dialog";
import { useState } from "react";
import { TaskFormDialog } from "tasks/ui/task-form-dialog/TaskFormDialog";
import WarningDialog from "shared/warning-dialog/WarningDialog";
interface TaskListItemType {
  taskItem: TaskDto;
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
            <FavoriteSVG width={24} height={24} />
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
          content={<TaskFormDialog {...taskItem} />}
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

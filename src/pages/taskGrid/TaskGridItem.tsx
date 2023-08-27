import Dialog from "components/shared/dialog/Dialog";
import EditSVG from "components/shared/icons/EditSVG";
import FavoriteSVG from "components/shared/icons/FavoriteSVG";
import TrashSVG from "components/shared/icons/TrashSVG";
import WarningDialog from "components/shared/warning-dialog/WarningDialog";
import { format } from "date-fns";
import { TaskForm } from "features/tasks/components/TaskForm";
import StatusEnum from "features/tasks/domain/dto/StatusEnum";
import statusEnum from "features/tasks/domain/dto/StatusEnum";
import Task from "features/tasks/domain/dto/Task";
import { remove } from "features/tasks/domain/services/TaskApiService";
import { deleteTaskItem } from "features/tasks/reducers/TasksReducer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import formatDate from "utils/formatDate";

interface TaskGridItemType {
  taskItem: Task;
  index: number;
}
const TaskGridItem = ({ taskItem, index }: TaskGridItemType) => {
  const [editTask, setEditTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);

  const dispatchTask = useDispatch();

  const onEditTask = (action: boolean) => {
    setEditTask(action);
  };

  const onDeleteTask = (action: boolean) => {
    setDeleteTask(action);
    if (!action) {
      removeTask();
    }
  };

  const removeTask = async () => {
    const response = await remove(taskItem.id);
    if (response) {
      dispatchTask(deleteTaskItem(taskItem));
    }
  };
  const onSubmit = async (e: any) => {
    setEditTask(false);
  };
  const statusValue = (StatusEnum as any)[taskItem.status as unknown as string];

  return (
    <div className="mt-4 p-2 bg-white rounded-lg w-64 h-64 flex flex-col gap-2 drop-shadow-xl   hover:bg-primary delay-75">
      <div className="flex-1 flex flex-col gap-2 p-4 ">
        <div className="flex">
          <div className="font-semibold">Title:</div>
          <div className="text-gray-600  ml-2">{taskItem.title}</div>
        </div>
        <div className="flex">
          <div className="font-semibold">Description:</div>
          <div className="text-gray-600 ml-2">{taskItem.description}</div>
        </div>
        <div className="flex">
          <div className="font-semibold">Status:</div>
          <div className="text-gray-600 ml-2">{statusValue}</div>
        </div>
        <div className="flex">
          <div className="font-semibold">Date created:</div>
          <div className="text-gray-600 ml-2">
            {formatDate(taskItem.dateCreated)}
          </div>
        </div>
        <div className="flex">
          <div className="font-semibold">Due Date:</div>
          <div className="text-gray-600 ml-2">
            {formatDate(taskItem.dueDate)}
          </div>
        </div>
      </div>

      <div className="flex self-end">
        <div className="flex-1 flex gap-x-2 ">
          <FavoriteSVG width={24} height={24} />
          <button onClick={() => onDeleteTask(true)}>
            <TrashSVG width={24} height={24} />
          </button>
          <button onClick={() => onEditTask(true)}>
            <EditSVG width={24} height={24} />
          </button>
        </div>
      </div>
      {editTask && (
        <Dialog
          dialogIsOpen={editTask}
          header={"Edit Task"}
          onUpdate={() => onEditTask(false)}
          content={<TaskForm task={taskItem} onSubmit={onSubmit} />}
        />
      )}
      {deleteTask && (
        <WarningDialog
          warningDialogIsOpen={deleteTask}
          itemTitle={taskItem.title}
          onUpdate={() => onDeleteTask(false)}
        />
      )}
    </div>
  );
};
export default TaskGridItem;

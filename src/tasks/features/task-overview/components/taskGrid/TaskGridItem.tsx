import { format } from "date-fns";
import FavoriteSVG from "shared/icons/FavoriteSVG";
import TrashSVG from "shared/icons/TrashSVG";
import EditSVG from "shared/icons/EditSVG";
import TaskDto from "tasks/domain/dto/TaskDto";
interface TaskGridItemType {
  taskItem: TaskDto;
  index: number;
}
const TaskGridItem = ({ taskItem, index }: TaskGridItemType) => {
  return (
    <div
      className={
        index === 0
          ? "mt-4 p-4  w-64 h-64 flex flex-col gap-2   bg-primary rounded-lg drop-shadow-xl"
          : "mt-4 p-4 w-64 h-64 flex flex-col gap-2 bg-white rounded-lg drop-shadow-xl"
      }
    >
      <div className="flex-1 flex flex-col">
        <span>Title: {taskItem.title}</span>
        <span>Description: {taskItem.description}</span>
        <span>Date: {format(taskItem.date, "yyyy-MM-dd")}</span>
      </div>

      <div className="flex self-end">
        <div className="flex-1 flex gap-x-2 ">
          <FavoriteSVG width={24} height={24} />
          <TrashSVG width={24} height={24} />
          <EditSVG width={24} height={24} />
        </div>
      </div>
    </div>
  );
};
export default TaskGridItem;

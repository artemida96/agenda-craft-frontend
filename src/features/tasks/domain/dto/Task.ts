import ItemWithSlug from "components/shared/types/ItemWithSlug";
import StatusEnum from "./StatusEnum";

interface Task extends ItemWithSlug {
  dueDate: Date;
  dateCrated: Date;
  status: StatusEnum;
  description?: string;
  isFavorite?: boolean;
  isCompleted?: boolean;
}
export default Task;

import ItemWithSlug from "components/shared/types/ItemWithSlug";

interface Task extends ItemWithSlug {
  date: Date;
  description?: string;
  isFavorite?: boolean;
  isCompleted?: boolean;
}
export default Task;

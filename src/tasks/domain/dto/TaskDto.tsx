import ItemWithSlug from "shared/types/ItemWithSlug";
interface TaskDto extends ItemWithSlug{
    date:Date;
    description?:string;
    isFavorite?:boolean;
    isCompleted?:boolean;
}
export  default TaskDto;

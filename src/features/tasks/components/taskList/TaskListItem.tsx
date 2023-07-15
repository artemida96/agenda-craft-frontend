import { format } from "date-fns"
import FavoriteSVG from "shared/icons/FavoriteSVG"
import TrashSVG from "shared/icons/TrashSVG"
import EditSVG from "shared/icons/EditSVG"
import TaskDto from "features/tasks/dto/TaskDto";
interface TaskListItemType{
    taskItem:TaskDto;
    index:number;
}
const TaskListItem = ({taskItem, index}: TaskListItemType) =>{

    return <div className={index===0? "mt-4 p-2 bg-primary rounded-lg drop-shadow-xl":"mt-4 p-2 bg-white rounded-lg drop-shadow-xl"}>
    <div className="flex flex-col gap-2 p-4" key={taskItem.id}>
        <span >Title: {taskItem.title}</span>
        <span>
            Description: {taskItem.description}
        </span>
        <span>
            Date: {format(taskItem.date,'yyyy-MM-dd')}
        </span>

        <div className="flex self-end gap-x-2">
            <FavoriteSVG width={24} height={24}/>
            <TrashSVG  width={24} height={24}/>
            <EditSVG width={24} height={24}/>
        </div>
    </div>
</div>
}
export default TaskListItem;
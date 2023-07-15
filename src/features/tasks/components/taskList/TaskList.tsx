import TaskDto from "../../dto/TaskDto";
import TaskListItem from "./TaskListItem";


const TaskList = () =>{
    const taskList =[{
        id:"1",
        slug:'slug-1',
        title: 'first Task',
        date: new Date(),
        description: 'my first task',
        isFavorite: true,
        isCompleted: false
    },
    {
        id:"2",
        slug:'slug-2',
        title: 'second Task',
        date: new Date(),
        description: 'second task',
        isFavorite: true,
        isCompleted: false
    },
    {
        id:"3",
        slug:'slug-3',
        title: 'third Task',
        date:new Date(),
        description: 'third task',
        isFavorite: true,
        isCompleted: false
    },
    {
        id:"4",
        slug:'slug-4',
        title: 'fourth Task',
        date: new Date(),
        description: 'fourth task',
        isFavorite: true,
        isCompleted: false
    },

    {
        id:"5",
        slug:'slug-5',
        title: 'fifth Task',
        date: new Date(),
        description: 'fifth task',
        isFavorite: true,
        isCompleted: false
    },
    {
        id:"6",
        slug:'slug-6',
        title: 'sixth Task',
        date: new Date(),
        description: 'sixth task',
        isFavorite: true,
        isCompleted: false
    },
    ] as unknown as TaskDto[];
    return <div className="p-8  overflow-y-auto  max-h-[55rem]">
        {taskList.map((taskItem,index) => {
            return <TaskListItem taskItem={taskItem} index={index}/>
    })}</div>
}
export default TaskList;
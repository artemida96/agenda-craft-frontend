import TaskDto from "../../features/tasks/domain/dto/Task";
import TaskGridItem from "./TaskGridItem";

export const TaskGrid = () => {
  const taskList = [
    {
      id: "1",
      slug: "slug-1",
      title: "first Task",
      dueDate: new Date(),
      description: "my first task",
      isFavorite: true,
      isCompleted: false,
    },
    {
      id: "2",
      slug: "slug-2",
      title: "second Task",
      dueDate: new Date(),
      description: "second task",
      isFavorite: true,
      isCompleted: false,
    },
    {
      id: "3",
      slug: "slug-3",
      title: "third Task",
      dueDate: new Date(),
      description: "third task",
      isFavorite: true,
      isCompleted: false,
    },
    {
      id: "4",
      slug: "slug-4",
      title: "fourth Task",
      dueDate: new Date(),
      description: "fourth task",
      isFavorite: true,
      isCompleted: false,
    },

    {
      id: "5",
      slug: "slug-5",
      title: "fifth Task",
      dueDate: new Date(),
      description: "fifth task",
      isFavorite: true,
      isCompleted: false,
    },
    {
      id: "6",
      slug: "slug-6",
      title: "sixth Task",
      dueDate: new Date(),
      description: "sixth task",
      isFavorite: true,
      isCompleted: false,
    },
  ] as unknown as TaskDto[];
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 gap-2  overflow-y-auto  max-h-[55rem]">
      {taskList.map((taskItem, index) => {
        return <TaskGridItem taskItem={taskItem} index={index} />;
      })}
    </div>
  );
};
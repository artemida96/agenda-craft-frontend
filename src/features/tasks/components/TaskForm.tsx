import Task from "../domain/dto/Task";
import { create, edit } from "../domain/services/TaskApiService";
import StatusEnum from "../domain/dto/StatusEnum";
import { useReducer } from "react";
import { CreateTask } from "../domain/dto/CreateTask";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../reducers/TasksReducer";
import DateSelect from "components/shared/datePicker/DateSelect";

interface TaskFormProps {
  task?: Task;
  onSubmit: (task: CreateTask | Task) => void;
}

export const TaskForm = (props: TaskFormProps) => {
  const initTaskForm = {
    title: props.task?.id ? props.task.title : "",
    dueDate: props.task?.id ? new Date(props.task.dueDate) : new Date(),
    description: props.task?.id ? props.task.description : "",
    status: props.task?.id ? props.task.status : StatusEnum.PENDING,
    isFavorite: props.task?.id ? props.task.isFavorite : false,
  };

  const dispatchTask = useDispatch();
  const [taskFormValue, dispatch] = useReducer(
    (currentValue: any, newValue: any) => ({ ...currentValue, ...newValue }),
    initTaskForm
  );

  const onValChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      dispatch({ [name]: checked });
    } else {
      dispatch({ [name]: value });
    }
  };

  const onDateChange = (newDate: Date) => {
    dispatch({ dueDate: newDate });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let task;
    if (props.task?.id) {
      task = await edit({ id: props.task.id, ...taskFormValue });
    } else {
      task = await create(taskFormValue);
    }
    props.onSubmit(taskFormValue);
    props.task?.id ? dispatchTask(editTask(task)) : dispatchTask(addTask(task));
  };

  return (
    <form
      className="bg-gray-200 px-8 pt-6 pb-2 flex flex-col flex-1" // Using flex flex-col for column layout
      onSubmit={handleSubmit}
    >
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Title
      </label>
      <input
        className="w-full py-2 px-6 mb-2 border border-gray-300"
        id="titleTaskId"
        type="text"
        placeholder="title of your todo task"
        name="title"
        value={taskFormValue.title}
        onChange={onValChange}
      />

      <label className="block text-gray-700 text-sm font-bold mb-2">
        Description
      </label>
      <textarea
        className="w-full h-32 px-2 py-2 border border-gray-300 rounded-lg resize-none mb-2"
        placeholder="Enter description"
        name="description"
        value={taskFormValue.description}
        onChange={onValChange}
      ></textarea>

      <label className="block text-gray-700 text-sm font-bold mb-2">
        Due Date
      </label>

      <DateSelect
        selectedDate={taskFormValue.dueDate}
        onDateSelect={onDateChange} // Corrected this line
      />
      <div className="mb-2" />

      <label className="block text-gray-700 text-sm font-bold mb-2">
        Status
      </label>
      <select
        className="w-48 py-2 px-6 mb-2 rounded-lg border border-gray-300 bg-light"
        name="status"
        value={taskFormValue.status}
        onChange={onValChange}
      >
        {Object.values(StatusEnum).map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>

      <div className="flex flex-wrap">
        <label className="block text-gray-700 text-sm font-bold ">
          Favorite
        </label>
        <input
          className="accent-yellow-300 ml-2"
          type="checkbox"
          name="isFavorite"
          checked={taskFormValue.isFavorite}
          onChange={onValChange}
        />
      </div>
      <div className="flex justify-center mt-4">
        <button className="btn-primary text-white py-2 px-4" type="submit">
          {props.task?.id ? `Edit` : "Add"} task
        </button>
      </div>
    </form>
  );
};

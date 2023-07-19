import DateSelect from "shared/datePicker/DateSelect";
import TaskDto from "tasks/domain/dto/TaskDto";

export const TaskFormDialog = (props: Partial<TaskDto>) => {
  return (
    <>
      <form className="bg-gray-200 px-8 py-6  flex flex-col flex-1">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          className="w-full py-2 px-6"
          id="titleTaskId"
          type="text"
          placeholder="title of your todo task"
          value={props.title}
        />

        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date
          </label>

          <DateSelect></DateSelect>
        </div>
        <div className="mt-4 ">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            className="w-full h-32 px-2 py-2 border border-gray-300 rounded-lg resize-none"
            placeholder="Enter description"
            value={props.description}
          ></textarea>
        </div>
        <div className="flex flex-1 self-center	">
          <div className=" mt-4 self-end">
            <button
              className="btn-primary text-white py-2 px-4 mb-2 "
              type="button"
            >
              {props?.id ? `Edit` : "Add"} task
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

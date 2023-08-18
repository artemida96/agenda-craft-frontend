import { TaskState } from "../reducers/TasksReducer";

export const selectTaskList = (state: { tasks: TaskState }) =>
  state.tasks.taskList;

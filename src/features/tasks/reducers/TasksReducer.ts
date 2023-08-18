import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from "../domain/dto/Task";

export interface TaskState {
  taskList: Task[];
}

const initialState: TaskState = {
  taskList: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    fetchTasksSuccess(state, action: PayloadAction<Task[]>) {
      state.taskList = action.payload
      console.log(state.taskList);

    },
    addTask(state, action: PayloadAction<Task>) {
      state.taskList.push(action.payload);
    },
    editTask(state, action: PayloadAction<Task>) {
      const index = state.taskList.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.taskList[index] = action.payload;
      }
    },
  },
});

export const { fetchTasksSuccess, addTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;

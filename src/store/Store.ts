import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "features/tasks/reducers/TasksReducer";

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    // Add other reducers here
  },
});

export default store;

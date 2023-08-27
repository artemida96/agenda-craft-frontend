import { CreateTask } from "../dto/CreateTask";
import Task from "../dto/Task";
import { axiosInstance } from "http/axiosConfig";

const API_BASE_URL = "/api/tasks";

const create = async (task: CreateTask) => {
  console.log(task);
  try {
    const response = await axiosInstance.post(`${API_BASE_URL}/task`, task);
    return response.data as Task;
  } catch (error) {
    throw new Error("Failed to create a task");
  }
};
const edit = async (task: Task) => {
  try {
    const response = await axiosInstance.put(
      `${API_BASE_URL}/task/${task.id}`,
      task
    );
    return response.data as Task;
  } catch (error) {
    throw new Error("Failed to edit a task");
  }
};

const fetch = async (queryParams?: Record<string, string>) => {
  try {
    const response = await axiosInstance.get(`${API_BASE_URL}`, {
      params: queryParams,
    });
    return response.data as Task[];
  } catch (error) {
    throw new Error("Failed to get tasks");
  }
};

const remove = async (taskId: string) => {
  try {
    const response = await axiosInstance.delete(
      `${API_BASE_URL}/task/${taskId}`
    );
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    throw new Error("Failed to get tasks");
  }
};
export { create, edit, fetch, remove };

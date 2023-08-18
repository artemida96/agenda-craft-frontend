import { CreateTask } from "../domain/dto/CreateTask";
import Task from "../domain/dto/Task";

export type TaskPayload = Task | CreateTask;

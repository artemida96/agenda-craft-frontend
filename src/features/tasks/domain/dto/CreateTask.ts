import StatusEnum from "./StatusEnum";

export interface CreateTask {
  title: string;
  dueDate: Date;
  status: StatusEnum;
  description?: string;
  isFavorite?: boolean;
}

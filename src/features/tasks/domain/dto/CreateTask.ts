export interface CreateTask {
  title: string;
  date: Date;
  description?: string;
  isFavorite?: boolean;
  isCompleted?: boolean;
}

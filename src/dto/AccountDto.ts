import Task from "features/tasks/domain/dto/Task";

export interface AccountDto {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  birthDate: Date;
  roles?: string[];
  tasks?: Task[];
}

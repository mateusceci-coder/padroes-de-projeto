import { Task } from "../entities/task";

export interface DeleteTaskModel {
  id: string;
}

export interface DeleteTask {
  delete(taskId: DeleteTaskModel): Promise<Error | void>;
}

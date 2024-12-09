import { Task } from "../../entities/task";
import { DeleteTaskModel } from "../../usecases/deleteTask";
import { DeleteTaskRepository } from "../../usecases/repository/deleteTaskRepository";

export class DbDeleteTask {
  constructor(private readonly deleteTaskRepository: DeleteTaskRepository) {}

  async delete(taskData: DeleteTaskModel): Promise<Error | void> {
    return await this.deleteTaskRepository.delete(taskData);
  }
}

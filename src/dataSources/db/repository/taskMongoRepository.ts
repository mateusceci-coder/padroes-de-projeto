import { ObjectId } from "mongodb";
import { Task } from "../../../entities/task";
import { AddATaskModel } from "../../../usecases/addTask";
import { DeleteTaskModel } from "../../../usecases/deleteTask";
import { AddTaskRepository } from "../../../usecases/repository/addTaskRepository";
import { MongoManager } from "../../config/mongoManager";
import { InvalidParamError } from "../../../adapters/presentations/api/errors/invalid-param-error";
import { NotFoundError } from "../../../adapters/presentations/api/errors/not-found-error";
import { DeleteTaskRepository } from "../../../usecases/repository/deleteTaskRepository";

export class TaskMongoRepository
  implements AddTaskRepository, DeleteTaskRepository
{
  async add(taskData: AddATaskModel): Promise<Task> {
    const taskCollection = MongoManager.getInstance().getCollection("tasks");
    const { insertedId } = await taskCollection.insertOne(taskData);
    const taskById = await taskCollection.findOne({ _id: insertedId });
    if (!taskById) throw new Error("Task not found");

    const task: Task = {
      id: taskById._id.toHexString(),
      title: taskById.title,
      description: taskById.description,
      date: taskById.date,
    };
    return task;
  }

  async delete(taskData: DeleteTaskModel): Promise<void | Error> {
    const taskCollection = MongoManager.getInstance().getCollection("tasks");

    if (!ObjectId.isValid(taskData.id)) {
      return new InvalidParamError(taskData.id);
    }
    const { deletedCount } = await taskCollection.deleteOne({
      _id: new ObjectId(taskData.id),
    });
    if (!deletedCount) return new NotFoundError("task");
  }
}

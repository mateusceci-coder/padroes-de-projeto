import { MongoManager } from "../../config/mongoManager";
import { LogErrorRepository } from "../../../usecases/repository/logErrorRepository";

export class LogErrorMongoRepository implements LogErrorRepository {
  async log(stack: string): Promise<void> {
    const logErrorColletion =
      MongoManager.getInstance().getCollection("errors");
    await logErrorColletion.insertOne({ stack, date: new Date() });
  }
}

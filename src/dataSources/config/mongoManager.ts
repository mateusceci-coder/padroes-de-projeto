import { MongoClient } from "mongodb";

export class MongoManager {
  public static instance: MongoManager;
  private client: MongoClient | null = null;
  private constructor() {}

  public static getInstance(): MongoManager {
    if (!MongoManager.instance) {
      MongoManager.instance = new MongoManager();
    }
    return MongoManager.instance;
  }
  public async connect(url: string): Promise<void> {
    if (!this.client) {
      this.client = await MongoClient.connect(url);
    }
  }
}

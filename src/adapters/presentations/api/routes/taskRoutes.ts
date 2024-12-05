import { Request, Response, Router } from "express";
import { AddTaskController } from "../../../controllers/task/addTask";
import { expressRouterAdapter } from "../../../expressRouterAdapter";
import { DateValidatorAdapter } from "../../../dateValidatorAdapter";

export default (router: Router): void => {
  const dateValidatorAdapter = new DateValidatorAdapter();
  const addTaskController = new AddTaskController(dateValidatorAdapter);
  router.post("/tasks", expressRouterAdapter(addTaskController));
};

import { Router } from "express";
import { expressRouterAdapter } from "../../../expressRouterAdapter";
import { taskControllerFactory } from "../../../factories/taskControllerFactory";

export default (router: Router): void => {
  router.post("/tasks", expressRouterAdapter(taskControllerFactory()));
};

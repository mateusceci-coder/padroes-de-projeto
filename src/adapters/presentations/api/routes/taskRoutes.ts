import { Router } from "express";
import { expressRouterAdapter } from "../../../expressRouterAdapter";
import { taskControllerFactory } from "../../../factories/taskControllerFactory";
import { deleteTaskControllerFactory } from "../../../factories/deleteTaskControllerFactory";

export default (router: Router): void => {
  router.post("/tasks", expressRouterAdapter(taskControllerFactory()));
  router.delete(
    "/tasks/:id",
    expressRouterAdapter(deleteTaskControllerFactory())
  );
};

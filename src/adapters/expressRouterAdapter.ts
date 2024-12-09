import { Controller } from "./interfaces/controller";
import { Request, Response } from "express";

export const expressRouterAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest = {
      body: req.body,
      params: req.params,
    };

    const httpResponse = await controller.handle(httpRequest);

    if (httpResponse.statusCode === 201 || httpResponse.statusCode === 204) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      });
    }
  };
};

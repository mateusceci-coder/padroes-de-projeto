import { Controller } from "./interfaces/controller";
import { Request, Response } from "express";

export const expressRouterAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest = {
      body: req.body,
    };

    const httpResponse = await controller.handle(httpRequest);

    if (httpResponse.statusCode === 201) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      });
    }
  };
};

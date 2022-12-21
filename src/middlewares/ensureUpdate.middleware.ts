import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

const ensureUpdateMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataUser = req.body;

  for (let notData in dataUser) {
    if (notData === "isAdm" || notData === "isActive" || notData === "id") {
      throw new AppError("Não autorizado", 401);
    }
  }

  return next();
};

export default ensureUpdateMiddlewares;

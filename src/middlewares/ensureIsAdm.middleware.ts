import { Request, Response, NextFunction } from "express";

const ensureIsAdmMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let isAdm = req.user.isAdm;

  if (!isAdm) {
    return res.status(403).json({ message: "Missing admin permission" });
  }

  return next();
};

export default ensureIsAdmMiddleware;

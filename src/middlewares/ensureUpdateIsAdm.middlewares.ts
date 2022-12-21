import { Request, Response, NextFunction } from "express";

const ensureUpdateIsAdmMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;
  const { isAdm, id } = req.user;

  if (!isAdm && id !== userId) {
    return res.status(403).json({ message: "Missing admin permission" });
  }

  return next();
};

export default ensureUpdateIsAdmMiddleware;

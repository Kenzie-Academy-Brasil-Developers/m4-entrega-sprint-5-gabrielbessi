import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entities";
import { Categories } from "../../entities/categories.entites";
import { Properties } from "../../entities/properties.entities";
import { AppError } from "../../errors/AppError";

const validatePropertiesMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const addressesRepository = AppDataSource.getRepository(Addresses);
  const { address, categoryId } = req.body;

  const existCategory = await categoryRepository.findOneBy({
    id: categoryId,
  });

  if (!existCategory) {
    throw new AppError("Not found category", 404);
  }

  if (address.zipCode.length > 8) {
    throw new AppError("length zipCode invalid", 400);
  }

  if (address.state.length > 2) {
    throw new AppError("length state invalid", 400);
  }

  const existAddress = await addressesRepository.findOneBy({
    zipCode: address.zipCode,
  });

  if (existAddress) {
    throw new AppError("Address already exists", 409);
  }

  return next();
};

export default validatePropertiesMiddleware;

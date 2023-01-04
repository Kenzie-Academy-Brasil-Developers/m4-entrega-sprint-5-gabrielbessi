import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entities";
import { AppError } from "../../errors/AppError";
import { IScheduleRequest } from "../../interfaces/schedules/index";

const validatedSchedulesMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataSchedule: IScheduleRequest = req.body;

  const propertiesRepository = AppDataSource.getRepository(Properties);

  const property = await propertiesRepository.findOneBy({
    id: dataSchedule.propertyId,
  });

  if (!property) {
    throw new AppError("This property exists", 404);
  }

  const hour = new Date(
    dataSchedule.date + ", " + dataSchedule.hour
  ).getHours();

  if (hour < 8 || hour >= 18) {
    throw new AppError("Scheduling outside business hours", 400);
  }

  const date = new Date(dataSchedule.date + ", " + dataSchedule.hour).getDay();

  if (date === 0 || date === 6) {
    throw new AppError("Day off", 400);
  }

  return next();
};

export default validatedSchedulesMiddleware;

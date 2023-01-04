import { NextFunction, Request, Response } from "express";
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

  if (dataSchedule.hour > "18:00" || dataSchedule.hour < "8:00") {
    throw new AppError("Scheduling outside business hours", 400);
  }

  //   const day = new Date(dataSchedule.date);
  //   const dayWeek = day.getDay();

  //   if (dayWeek === 0 || dayWeek === 6) {
  //     throw new AppError("Opening days from Monday to Friday", 400);
  //   }

  return next();
};

export default validatedSchedulesMiddleware;

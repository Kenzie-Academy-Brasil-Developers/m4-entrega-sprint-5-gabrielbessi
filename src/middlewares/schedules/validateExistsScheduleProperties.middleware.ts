import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Schedules_users_properties } from "../../entities/schedules_users_properties.entites";
import { AppError } from "../../errors/AppError";
import { IScheduleRequest } from "../../interfaces/schedules/index";

const validateExistsSchedulesProperties = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataSchedule: IScheduleRequest = req.body;

  const firstUser = await AppDataSource.getRepository(
    Schedules_users_properties
  )
    .createQueryBuilder("schedules_users_properties")
    .where("schedules_users_properties.date = :date", {
      date: dataSchedule.date,
    })
    .andWhere("schedules_users_properties.hour = :hour", {
      hour: dataSchedule.hour,
    })
    .getOne();

  if (firstUser) {
    throw new AppError("Time or date unavailable", 409);
  }

  return next();
};

export default validateExistsSchedulesProperties;

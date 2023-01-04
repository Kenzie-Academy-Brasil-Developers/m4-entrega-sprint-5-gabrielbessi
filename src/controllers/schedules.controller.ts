import { Request, Response } from "express";
import createSchedulesService from "../services/schedules/createSchedules.services";
import { IScheduleRequest } from "../interfaces/schedules/index";

const createSchedulesController = async (req: Request, res: Response) => {
  const dataSchedule: IScheduleRequest = req.body;

  const schedule = await createSchedulesService(dataSchedule);

  return res.status(201).json(schedule);
};

export { createSchedulesController };

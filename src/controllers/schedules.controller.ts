import { Request, Response } from "express";
import createSchedulesService from "../services/schedules/createSchedules.services";
import { IScheduleRequest } from "../interfaces/schedules/index";
import listSchedulesOfPropertyService from "../services/schedules/listSchedulesOfProperty.schedules";

const createSchedulesController = async (req: Request, res: Response) => {
  const dataSchedule: IScheduleRequest = req.body;
  const { id } = req.user;

  const schedule = await createSchedulesService(dataSchedule, id);

  return res.status(201).json(schedule);
};

const listSchedulesOfPropertyController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;

  const schedules = await listSchedulesOfPropertyService(id);

  return res.json(schedules);
};

export { createSchedulesController, listSchedulesOfPropertyController };

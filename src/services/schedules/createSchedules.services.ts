import { IScheduleRequest } from "../../interfaces/schedules/index";
import AppDataSource from "../../data-source";
import { Schedules_users_properties } from "../../entities/schedules_users_properties.entites";

const createSchedulesService = async (dataSchedule: IScheduleRequest) => {
  const schedulesRepository = AppDataSource.getRepository(
    Schedules_users_properties
  );

  const schedules = schedulesRepository.create(dataSchedule);

  await schedulesRepository.save(schedules);

  return { message: "Schedule created successfully" };
};

export default createSchedulesService;

import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entities";
import { AppError } from "../../errors/AppError";

const listSchedulesOfPropertyService = async (idProperty: string) => {
  try {
    const PropertyRepository = AppDataSource.getRepository(Properties);
    console.log(idProperty);

    const schedules = await PropertyRepository.findOne({
      where: {
        id: idProperty,
      },
      relations: {
        schedules: true,
      },
    });

    console.log(schedules?.schedules);

    if (!schedules) {
      throw new AppError("Id Invalid", 404);
    }

    //   const responseProperties = await responseScheduleSchema.validate(schedules, {
    //     stripUnknown: true,
    //   });

    return schedules;
  } catch (error) {
    throw new AppError("Not found Schedules", 404);
  }
};

export default listSchedulesOfPropertyService;

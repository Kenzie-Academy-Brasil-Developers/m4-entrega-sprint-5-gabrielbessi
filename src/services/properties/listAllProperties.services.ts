import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entities";
import { AppError } from "../../errors/AppError";

const listAllPropertiesServices = async () => {
  try {
    const propertiesRepository = AppDataSource.getRepository(Properties);

    const properties = propertiesRepository.find();

    return properties;
  } catch (error) {
    throw new AppError("Erro de requisição", 409);
  }
};

export default listAllPropertiesServices;

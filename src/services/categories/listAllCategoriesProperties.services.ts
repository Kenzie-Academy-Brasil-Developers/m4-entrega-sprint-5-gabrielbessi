import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entites";
import { AppError } from "../../errors/AppError";

const listAllCategoriesPropertiesService = async (idCategory: string) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const properties = await categoriesRepository.findOne({
    where: {
      id: idCategory,
    },
    relations: {
      properties: true,
    },
  });

  if (!properties) {
    throw new AppError("Id categories invalid", 404);
  }

  return properties;
};

export default listAllCategoriesPropertiesService;

import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entites";

const listAllCategoriesPropertiesService = async (idCategory: string) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const properties = await categoriesRepository
    .createQueryBuilder("categories")
    .leftJoinAndSelect("categories.properties", "properties")
    .where("categories.id = :id", { id: idCategory })
    .getMany();

  console.log(properties);

  return properties;
};

export default listAllCategoriesPropertiesService;

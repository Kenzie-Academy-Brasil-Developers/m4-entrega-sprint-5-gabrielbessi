import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entites";

const listCategoryService = async (): Promise<Categories[]> => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const listCategories = categoryRepository.find();

  return listCategories;
};

export default listCategoryService;

import {
  ICategoryRequest,
  ICategoryResponse,
} from "../../interfaces/categories/index";
import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entites";
import { AppError } from "../../errors/AppError";
import { responseCategorySchema } from "../../schemas/categories.schema";

const createCategoryServices = async (
  dataCategory: ICategoryRequest
): Promise<ICategoryResponse> => {
  try {
    const categoryRepository = await AppDataSource.getRepository(Categories);

    const category = categoryRepository.create(dataCategory);

    await categoryRepository.save(category);

    const responseCategory = await responseCategorySchema.validate(category, {
      stripUnknown: true,
    });

    return responseCategory;
  } catch (error) {
    throw new AppError("Exists already category", 409);
  }
};

export { createCategoryServices };

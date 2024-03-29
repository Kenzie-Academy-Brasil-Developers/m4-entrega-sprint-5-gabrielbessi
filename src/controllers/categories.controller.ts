import { Request, Response } from "express";
import { ICategoryRequest } from "../interfaces/categories/index";
import { createCategoryServices } from "../services/categories/createCategory.services";
import listCategoryService from "../services/categories/listCategory.services";
import listAllCategoriesPropertiesService from "../services/categories/listAllCategoriesProperties.services";

const createCategoryController = async (req: Request, res: Response) => {
  const dataCategory: ICategoryRequest = req.body;

  const category = await createCategoryServices(dataCategory);

  return res.status(201).json(category);
};

const listCategoryController = async (req: Request, res: Response) => {
  const listCategory = await listCategoryService();

  return res.json(listCategory);
};

const listAllCategoriesPropertiesController = async (
  req: Request,
  res: Response
) => {
  const idCategory: string = req.params.id;

  const categoriesProperties = await listAllCategoriesPropertiesService(
    idCategory
  );

  return res.json(categoriesProperties);
};

export {
  createCategoryController,
  listCategoryController,
  listAllCategoriesPropertiesController,
};

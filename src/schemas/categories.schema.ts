import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  ICategoryRequest,
  ICategoryResponse,
} from "../interfaces/categories/index";

const createCategorySchema: SchemaOf<ICategoryRequest> = yup.object().shape({
  name: yup.string().required(),
});

const responseCategorySchema: SchemaOf<ICategoryResponse> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
});

export { createCategorySchema, responseCategorySchema };

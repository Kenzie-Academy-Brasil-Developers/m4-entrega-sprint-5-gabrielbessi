import { Router } from "express";
import {
  createCategoryController,
  listCategoryController,
} from "../controllers/categories.controller";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataValidSerializer from "../serializers/ensureDataValid.serializer";
import { createCategorySchema } from "../schemas/categories.schema";

const categoryRouter = Router();

categoryRouter.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  ensureDataValidSerializer(createCategorySchema),
  createCategoryController
);

categoryRouter.get("", listCategoryController);

export default categoryRouter;

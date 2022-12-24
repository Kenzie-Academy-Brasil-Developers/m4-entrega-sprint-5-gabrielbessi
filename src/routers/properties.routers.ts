import { Router } from "express";
import { createPropertieController } from "../controllers/properties.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import { createPropertiesSchema } from "../schemas/properties.schema";
import ensureDataValidSerializer from "../serializers/ensureDataValid.serializer";

const propertiesRouter = Router();

propertiesRouter.post(
  "",
  ensureDataValidSerializer(createPropertiesSchema),
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  createPropertieController
);

export default propertiesRouter;

import { Router } from "express";
import {
  createSchedulesController,
  listSchedulesOfPropertyController,
} from "../controllers/schedules.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { schedulesSchema } from "../schemas/schedules.schema";
import ensureDataValidSerializer from "../serializers/ensureDataValid.serializer";
import validatedSchedulesMiddleware from "../middlewares/schedules/validatedSchedules.middleware";
import validateExistsSchedulesProperties from "../middlewares/schedules/validateExistsScheduleProperties.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const schedulesRouter = Router();

schedulesRouter.post(
  "",
  ensureAuthMiddleware,
  ensureDataValidSerializer(schedulesSchema),
  validatedSchedulesMiddleware,
  validateExistsSchedulesProperties,
  createSchedulesController
);

schedulesRouter.get(
  "/properties/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listSchedulesOfPropertyController
);

export default schedulesRouter;

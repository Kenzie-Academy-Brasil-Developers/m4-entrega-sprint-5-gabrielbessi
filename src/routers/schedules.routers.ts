import { Router } from "express";
import { createSchedulesController } from "../controllers/schedules.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { schedulesSchema } from "../schemas/schedules.schema";
import ensureDataValidSerializer from "../serializers/ensureDataValid.serializer";
import validatedSchedulesMiddleware from "../middlewares/schedules/validatedSchedules.middleware";

const schedulesRouter = Router();

schedulesRouter.post(
  "",
  ensureAuthMiddleware,
  ensureDataValidSerializer(schedulesSchema),
  validatedSchedulesMiddleware,
  createSchedulesController
);

export default schedulesRouter;

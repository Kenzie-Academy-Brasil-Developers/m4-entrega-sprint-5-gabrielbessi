import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updadteUserController,
} from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import ensureUpdateIsAdmMiddleware from "../middlewares/ensureUpdateIsAdm.middlewares";
import ensureUpdateMiddlewares from "../middlewares/ensureUpdate.middleware";
import ensureDataValidSerializer from "../serializers/ensureDataValid.serializer";
import { updateUserSchema } from "../schemas/update.schema";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listUserController
);
userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUpdateIsAdmMiddleware,
  ensureDataValidSerializer(updateUserSchema),
  ensureUpdateMiddlewares,
  updadteUserController
);

userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  deleteUserController
);

export default userRoutes;

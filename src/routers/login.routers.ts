import { Router } from "express";
import { logiUserController } from "../controllers/users.controllers";
import { validateLoginSchema } from "../schemas/login.schema";
import ensureDataValidSerializer from "../serializers/ensureDataValid.serializer";

const loginRouter = Router();

loginRouter.post(
  "",
  ensureDataValidSerializer(validateLoginSchema),
  logiUserController
);

export default loginRouter;

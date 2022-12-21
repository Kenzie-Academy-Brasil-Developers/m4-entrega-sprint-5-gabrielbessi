import * as yup from "yup";
import { IUserUpdate } from "../interfaces/users/index";
import { SchemaOf } from "yup";

const updateUserSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string().min(3).notRequired(),
  email: yup.string().email("E-mail inválido").notRequired(),
  password: yup.string().notRequired(),
  isActive: yup.boolean().notRequired(),
  isAdm: yup.boolean().notRequired(),
  id: yup.string().notRequired(),
});

export { updateUserSchema };

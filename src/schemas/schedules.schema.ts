import * as yup from "yup";
import { SchemaOf } from "yup";
import { IScheduleRequest } from "../interfaces/schedules/index";

const schedulesSchema: SchemaOf<IScheduleRequest> = yup.object().shape({
  date: yup.string().required(),
  hour: yup.string().required(),
  userId: yup.string().required(),
  propertyId: yup.string().required(),
});

export { schedulesSchema };

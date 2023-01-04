import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IScheduleArray,
  IScheduleRequest,
  IScheduleResponse,
} from "../interfaces/schedules/index";

const schedulesSchema: SchemaOf<IScheduleRequest> = yup.object().shape({
  date: yup.string().required(),
  hour: yup.string().required(),
  userId: yup.string().required(),
  propertyId: yup.string().required(),
});

const responseScheduleSchema: SchemaOf<IScheduleResponse> = yup.object().shape({
  id: yup.string().notRequired(),
  sold: yup.boolean().notRequired(),
  size: yup.number().notRequired(),
  value: yup.number().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
  schedules: yup.object().shape({
    id: yup.string().notRequired(),
    date: yup.string().notRequired(),
    hour: yup.string().notRequired(),
    user: yup.string().notRequired(),
  }),
});

const responseSchedule: SchemaOf<IScheduleArray> = yup.object().shape({
  id: yup.string().notRequired(),
  date: yup.string().notRequired(),
  hour: yup.string().notRequired(),
  user: yup.string().notRequired(),
});

export { schedulesSchema, responseScheduleSchema, responseSchedule };

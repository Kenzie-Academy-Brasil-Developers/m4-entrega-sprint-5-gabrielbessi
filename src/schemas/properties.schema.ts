import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPropertyRequest, IPropertyResponse } from "../interfaces/properties";

const createPropertiesSchema: SchemaOf<IPropertyRequest> = yup.object().shape({
  value: yup.number().required(),
  size: yup.number().required(),
  address: yup.object().shape({
    district: yup.string().required(),
    zipCode: yup.string().required(),
    number: yup.string().notRequired(),
    city: yup.string().required(),
    state: yup.string().required(),
  }),
  categoryId: yup.string().required(),
});

const responsePropertiesSchema: SchemaOf<IPropertyResponse> = yup
  .object()
  .shape({
    id: yup.string().notRequired(),
    size: yup.number().notRequired(),
    value: yup.number().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
    address: yup.object().shape({
      district: yup.string().notRequired(),
      zipCode: yup.string().notRequired(),
      number: yup.string().notRequired(),
      city: yup.string().notRequired(),
      state: yup.string().notRequired(),
    }),
    categoryId: yup.string().notRequired(),
  });

export { createPropertiesSchema, responsePropertiesSchema };

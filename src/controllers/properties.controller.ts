import { Request, Response } from "express";
import { IPropertyRequest } from "../interfaces/properties";
import createPropertieService from "../services/properties/createProperties.services";
import listAllPropertiesServices from "../services/properties/listAllProperties.services";

const createPropertieController = async (req: Request, res: Response) => {
  const dataProperties: IPropertyRequest = req.body;
  const createProperties = await createPropertieService(dataProperties);

  return res.status(201).json(createProperties);
};

const listAllPropertiesController = async (req: Request, res: Response) => {
  const listProperties = await listAllPropertiesServices();

  return res.json(listProperties);
};

export { createPropertieController, listAllPropertiesController };

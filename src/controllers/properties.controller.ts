import { Request, Response } from "express";
import { IPropertyRequest } from "../interfaces/properties";
import createPropertieService from "../services/properties/createProperties.services";

const createPropertieController = async (req: Request, res: Response) => {
  const dataProperties: IPropertyRequest = req.body;
  const createProperties = await createPropertieService(dataProperties);

  return res.json(createProperties);
};

export { createPropertieController };

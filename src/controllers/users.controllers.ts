import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IUserUpdate } from "../interfaces/users";
import { createUserService } from "../services/user/createUser.services";
import listuserService from "../services/user/listUser.services";
import loginUserService from "../services/login/loginUser.services";
import updateUserService from "../services/user/updateUser.services";
import deleteUserServices from "../services/user/deleteUser.services";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(instanceToPlain(newUser));
};

const listUserController = async (req: Request, res: Response) => {
  const users = await listuserService();

  return res.json(instanceToPlain(users));
};

const logiUserController = async (req: Request, res: Response) => {
  const token = await loginUserService(req.body);

  return res.status(200).json({ token });
};

const updadteUserController = async (req: Request, res: Response) => {
  const userData: IUserUpdate = req.body;
  const userId = req.params.id;
  const newUser = await updateUserService(userData, userId);

  return res.json(newUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const deleteUser = await deleteUserServices(userId);

  return res.status(204).json(deleteUser);
};

export {
  createUserController,
  listUserController,
  logiUserController,
  updadteUserController,
  deleteUserController,
};

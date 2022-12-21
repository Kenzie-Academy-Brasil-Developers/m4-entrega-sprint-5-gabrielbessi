import { IUserRequest } from "../../interfaces/users/index";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";

const createUserService = async (data: IUserRequest): Promise<User> => {
  try {
    const userRepository = AppDataSource.getRepository(User);

    const user = userRepository.create(data);

    await userRepository.save(user);

    return user;
  } catch (error) {
    throw new AppError("existing user", 400);
  }
};

export { createUserService };

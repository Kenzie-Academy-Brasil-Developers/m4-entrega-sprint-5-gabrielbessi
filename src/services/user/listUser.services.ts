import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";

const listuserService = async (): Promise<User[]> => {
  try {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    return users;
  } catch (error) {
    throw new AppError("Erro de requisição", 409);
  }
};

export default listuserService;

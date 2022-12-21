import { User } from "../../entities/user.entities";
import { IUserUpdate } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";

const updateUserService = async (
  userData: IUserUpdate,
  userId: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  if (!findUser) {
    throw new AppError("Not found", 404);
  }

  const updateUser = userRepository.create({
    ...findUser,
    ...userData,
  });

  await userRepository.save(updateUser);

  return updateUser;
};

export default updateUserService;

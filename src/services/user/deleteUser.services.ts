import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";

const deleteUserServices = async (userId: string): Promise<boolean> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (!user.isActive) {
    throw new AppError("User not Active", 400);
  }

  user.isActive = false;
  await userRepository.save(user);

  return true;
};

export default deleteUserServices;

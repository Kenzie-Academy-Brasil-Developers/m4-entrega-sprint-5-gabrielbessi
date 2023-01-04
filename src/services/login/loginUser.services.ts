import "dotenv/config";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { IUserLogin } from "../../interfaces/users/index";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { compare } from "bcryptjs";

const loginUserService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("User or password invalid", 403);
  }

  if (user.isActive === false) {
    throw new AppError("User not Active", 400);
  }

  const passwordVerify = await compare(password, user.password);

  if (!passwordVerify) {
    throw new AppError("User or password invalid", 403);
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY!,
    {
      subject: user.id,
      expiresIn: "1h",
    }
  );

  return token;
};

export default loginUserService;

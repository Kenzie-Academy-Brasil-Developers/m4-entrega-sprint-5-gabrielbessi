import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entities";
import { Categories } from "../../entities/categories.entites";
import { Properties } from "../../entities/properties.entities";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import {
  IPropertyRequest,
  IPropertyResponse,
} from "../../interfaces/properties";
import { responsePropertiesSchema } from "../../schemas/properties.schema";

const createPropertieService = async ({
  address,
  categoryId,
  size,
  value,
}: IPropertyRequest) => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const categoryRepository = AppDataSource.getRepository(Categories);
  const addressesRepository = AppDataSource.getRepository(Addresses);

  const existCategory = await categoryRepository.findOneBy({
    id: categoryId,
  });

  if (!existCategory) {
    throw new AppError("Not found category", 404);
  }

  if (address.zipCode.length > 8) {
    throw new AppError("length zipCode invalid", 400);
  }

  if (address.state.length > 2) {
    throw new AppError("length state invalid", 400);
  }

  const existAddress = await addressesRepository.find({
    where: {
      zipCode: address.zipCode,
    },
  });

  if (existAddress) {
    throw new AppError("Address already exists", 409);
  }

  const addressCreate = addressesRepository.create(address);
  await addressesRepository.save(addressCreate);

  const properties = propertiesRepository.create({
    size,
    value,
    address: existAddress,
    category: existCategory,
  });

  await propertiesRepository.save(properties);

  // const responseProperties = await responsePropertiesSchema.validate(
  //   properties,
  //   {
  //     stripUnknown: true,
  //   }
  // );

  return properties;
};

export default createPropertieService;

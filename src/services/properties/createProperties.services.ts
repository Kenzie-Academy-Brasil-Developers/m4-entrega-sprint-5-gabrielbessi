import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entities";
import { Properties } from "../../entities/properties.entities";
import { IPropertyRequest } from "../../interfaces/properties";
import { ICategoryResponse } from "../../interfaces/categories/index";

const createPropertieService = async ({
  address,
  categoryId,
  size,
  value,
}: IPropertyRequest) => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const addressesRepository = AppDataSource.getRepository(Addresses);

  const addressCreate = addressesRepository.create(address);
  await addressesRepository.save(addressCreate);

  const properties = propertiesRepository.create({
    size,
    value,
    address: addressCreate,
    category: categoryId as ICategoryResponse,
  });

  await propertiesRepository.save(properties);

  return properties;
};

export default createPropertieService;

import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entities";
import { Properties } from "../../entities/properties.entities";
import { IPropertyRequest } from "../../interfaces/properties";
import { responsePropertiesSchema } from "../../schemas/properties.schema";
import { ICategoryResponse } from "../../interfaces/categories/index";
import { IAddressResponse } from "../../interfaces/properties/index";

const createPropertieService = async ({
  address,
  categoryId,
  size,
  value,
}: IPropertyRequest) => {
  console.log("criando addres: ", address);
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const addressesRepository = AppDataSource.getRepository(Addresses);

  const addressCreate = addressesRepository.create(address);
  await addressesRepository.save(addressCreate);

  console.log("Retorno addressCreate", addressCreate);

  const properties = propertiesRepository.create({
    size,
    value,
    address: addressCreate,
    category: categoryId as ICategoryResponse,
  });

  console.log("Resposta da properties:", properties);

  await propertiesRepository.save(properties);
  console.log("Resposta da properties após save:", properties);

  const responseProperties = await responsePropertiesSchema.validate(
    properties,
    {
      stripUnknown: true,
    }
  );

  return responseProperties;
};

export default createPropertieService;

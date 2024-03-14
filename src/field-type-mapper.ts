import { faker } from "@faker-js/faker";
import { DataType } from "./models/data-type.type";
import { FieldType } from "./models/field.type";

export const fieldTypeMapper = (fieldType: FieldType): (() => DataType) => {
  if (fieldType === "string") {
    return faker.string.sample;
  } else if (fieldType === "number") {
    return faker.number.int;
  } else if (fieldType === "id") {
    return faker.string.uuid;
  } else if (fieldType === "name") {
    return faker.commerce.product;
  } else if (fieldType === "description") {
    return faker.commerce.productDescription;
  } else if (fieldType === "amount") {
    return faker.finance.amount;
  } else if (fieldType === "date") {
    return faker.date.anytime;
  } else {
    throw new Error("Type is invalid");
  }
};

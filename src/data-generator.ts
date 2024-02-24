import { fieldTypeMapper } from "./field-type-mapper";
import { FieldType } from "./models/field.type";

export class DataGenerator {
  public generate(fieldType: FieldType): string | Date {
    return fieldTypeMapper(fieldType)();
  }
}

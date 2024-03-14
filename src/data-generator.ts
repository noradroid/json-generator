import { fieldTypeMapper } from "./field-type-mapper";
import { DataType } from "./models/data-type.type";
import { FieldType } from "./models/field.type";

export class DataGenerator {
  public generate(fieldType: FieldType): DataType {
    return fieldTypeMapper(fieldType)();
  }
}

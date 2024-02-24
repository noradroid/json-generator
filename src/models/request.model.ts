import { FieldDefinition } from "./field-definition.model";

export type Request = {
  size: number;
  fields: FieldDefinition[];
};

const fieldTypes = [
  "string",
  "number",
  "name",
  "date",
  "amount",
  "description",
  "id",
] as const;

export type FieldType = (typeof fieldTypes)[number];

export const isFieldTypeType = (x: FieldType | any): x is FieldType => {
  return typeof x === "string" || x instanceof String;
};

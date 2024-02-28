import { FieldType } from "./field.type";

export type SchemaDefinition =
  | NamelessDataDefinition
  | NamelessArrayDefinition
  | NamelessObjectDefinition;

export type DataDefinition = {
  type: FieldType;
  name: string;
};

export type ArrayDefinition = {
  type: "[]";
  name: string;
  elementSchema:
    | NamelessArrayDefinition
    | NamelessObjectDefinition
    | NamelessDataDefinition;
  size: number; // positive
};

export type ObjectDefinition = {
  type: "{}";
  name: string;
  propertySchemas: (ArrayDefinition | ObjectDefinition | DataDefinition)[];
};

type NamelessDataDefinition = Omit<DataDefinition, "name">;
type NamelessArrayDefinition = Omit<ArrayDefinition, "name">;
type NamelessObjectDefinition = Omit<ObjectDefinition, "name">;

const SAMPLE_SCHEMA: SchemaDefinition = {
  type: "[]",
  size: 3,
  elementSchema: {
    type: "{}",
    propertySchemas: [
      {
        type: "date",
        name: "date",
      },
      {
        type: "[]",
        name: "expenses",
        size: 3,
        elementSchema: {
          type: "{}",
          propertySchemas: [
            {
              type: "id",
              name: "id",
            },
            {
              type: "name",
              name: "name",
            },
            {
              type: "description",
              name: "description",
            },
            {
              type: "amount",
              name: "amountDefault",
            },
            {
              type: "amount",
              name: "amountOther",
            },
          ],
        },
      },
    ],
  },
};

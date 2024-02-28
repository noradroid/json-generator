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

export type Definition =
  | NamelessDataDefinition
  | NamelessArrayDefinition
  | NamelessObjectDefinition;

const def: Definition = {
  type: "[]",
  size: 5,
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
        type: "{}",
        name: "information",
        propertySchemas: [
          {
            type: "name",
            name: "otherName",
          },
        ],
      },
      {
        type: "[]",
        name: "expenses",
        elementSchema: {
          type: "amount",
        },
        size: 40,
      },
    ],
  },
};

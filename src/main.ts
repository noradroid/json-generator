import type { Request } from "express";
import * as express from "express";
import { DataGenerator } from "./data-generator";
import { Obj } from "./models/obj.model";
import { SchemaDefinition } from "./models/schema-definition.model";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log("Listening on port " + port);
});

const dg: DataGenerator = new DataGenerator();

app.post(
  "/generate",
  (request: Request<{}, {}, SchemaDefinition, {}>, response) => {
    const schema: SchemaDefinition = request.body;
    const results = buildObj(schema);

    response.send(results);
  }
);

const buildObj = (schema: SchemaDefinition): Obj => {
  switch (schema.type) {
    case "{}": {
      const intermediate: Obj = {};
      schema.propertySchemas.forEach((field) => {
        intermediate[field.name] = buildObj(field);
      });
      return intermediate;
    }
    case "[]": {
      const intermediate: Obj = [];
      for (let i = 0; i < schema.size; ++i) {
        intermediate.push(buildObj(schema.elementSchema));
      }
      return intermediate;
    }
    default: {
      return dg.generate(schema.type);
    }
  }
};

import type { Request } from "express";
import * as express from "express";
import { DataGenerator } from "./data-generator";
import { Obj } from "./models/obj.model";
import { Request as Request_ } from "./models/request.model";
import { ObjBuilder } from "./obj-builder";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log("Listening on port " + port);
});

const dg: DataGenerator = new DataGenerator();

app.post("/generate", (request: Request<{}, {}, Request_, {}>, response) => {
  const { size, fields } = request.body;
  const results: Obj[] = [];
  for (let i = 0; i < size; ++i) {
    const objBuilder: ObjBuilder = new ObjBuilder(dg);
    fields.forEach((field) => {
      objBuilder.addProperty(field);
    });
    results.push(objBuilder.build());
  }

  response.send(results);
});

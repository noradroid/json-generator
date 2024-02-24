import { DataGenerator } from "./data-generator";
import { FieldDefinition } from "./models/field-definition.model";
import { Obj } from "./models/obj.model";

export class ObjBuilder {
  private obj: Obj = {};

  constructor(private dg: DataGenerator) {}

  public addProperty(def: FieldDefinition): ObjBuilder {
    this.obj[def.name] = this.dg.generate(def.type);
    return this;
  }

  public build(): Obj {
    return { ...this.obj };
  }
}

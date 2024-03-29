import { DataType } from "./data-type.type";

export type Obj =
  | {
      [name: string]: Obj;
    }
  | Obj[]
  | DataType;

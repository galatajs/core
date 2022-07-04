import { IError } from "./error";
import { DataResult } from "../results";

export abstract class IErrorData<T> extends IError {
  abstract data: T;
  abstract serialize(): DataResult<T>;
}

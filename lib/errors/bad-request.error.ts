import { IError } from "./error";
import { ErrorResult, Result } from "../results";

export class BadRequestError extends IError {
  status = 400;

  constructor(message: string) {
    super(message);
  }

  serialize(): Result {
    return new ErrorResult(this.message, this.status);
  }
}

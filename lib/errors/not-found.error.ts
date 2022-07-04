import { IError } from "./error";
import { ErrorResult, Result } from "../results";

export class NotFoundError extends IError {
  status = 404;
  constructor(message: string) {
    super(message);
  }

  serialize(): Result {
    return new ErrorResult(this.message, this.status);
  }
}

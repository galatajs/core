import { IError } from "./error";
import { ErrorResult, Result } from "../results";

export class NotAuthorizedError extends IError {
  status = 401;

  constructor(message: string = "Not authorized") {
    super(message);
  }

  serialize(): Result {
    return new ErrorResult(this.message, this.status);
  }
}

import { DataResult } from "./data.result";

export class SuccessDataResult<T> extends DataResult<T> {
  constructor(message: string, data: T) {
    super(true, message, data);
  }
}

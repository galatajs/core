import { DataResult } from "./data.result";

export class ErrorDataResult<T> extends DataResult<T> {
  code: number;
  constructor(message: string, data: T, code: number = 400) {
    super(false, message, data);
    this.code = code;
  }
}

import { Result } from "./result";

export class ErrorResult extends Result {
  code: number;
  constructor(message: string, code: number = 400) {
    super(false, message);
    this.code = code;
  }
}

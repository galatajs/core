import { Result } from "../results";

export abstract class IError extends Error {
  abstract status: number;

  protected constructor(message: string) {
    super(message);
  }

  abstract serialize(): Result;
}

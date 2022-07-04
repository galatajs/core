import { IError } from "../lib";
import { BadRequestError } from "../lib/errors/bad-request.error";
import { NotFoundError } from "../lib/errors/not-found.error";
import { NotAuthorizedError } from "../lib/errors/not-authorized.error";

it("IError should be a class", () => {
  expect(IError).toBeInstanceOf(Function);
});

it("create BadRequestError", () => {
  const error = new BadRequestError("test");
  expect(error).toBeInstanceOf(IError);
  expect(error.message).toBe("test");
});

it("create BadRequestError and serialize", () => {
  const error = new BadRequestError("test");
  expect(error.serialize()).toEqual({
    code: 400,
    message: "test",
    success: false,
  });
});

it("create NotFoundError", () => {
  const error = new NotFoundError("test");
  expect(error).toBeInstanceOf(IError);
  expect(error.message).toBe("test");
});

it("create NotFoundError and serialize", () => {
  const error = new NotFoundError("test");
  expect(error.serialize()).toEqual({
    code: 404,
    message: "test",
    success: false,
  });
});

it("create NotAuthorizedError", () => {
  const error = new NotAuthorizedError("test");
  expect(error).toBeInstanceOf(IError);
  expect(error.message).toBe("test");
});

it("create NotAuthorizedError and serialize", () => {
  const error = new NotAuthorizedError("test");
  expect(error.serialize()).toEqual({
    code: 401,
    message: "test",
    success: false,
  });
});

import {
  ErrorDataResult,
  ErrorResult,
  Result,
  SuccessDataResult,
  SuccessResult,
} from "../lib";

it("create Result", () => {
  const result = new Result(true, "test");
  expect(result).toBeInstanceOf(Result);
});

it("create SuccessResult", () => {
  const result = new SuccessResult("test");
  expect(result).toBeInstanceOf(Result);
  expect(result.success).toBe(true);
  expect(result.message).toBe("test");
});

it("create ErrorResult", () => {
  const result = new ErrorResult("test");
  expect(result).toBeInstanceOf(Result);
  expect(result.success).toBe(false);
  expect(result.message).toBe("test");
});

it("create SuccessDataResult", () => {
  const result = new SuccessDataResult<{ data: string }>("test", {
    data: "test",
  });
  expect(result).toBeInstanceOf(Result);
  expect(result.success).toBe(true);
  expect(result.message).toBe("test");
  expect(result.data).toEqual({ data: "test" });
});

it("create ErrorDataResult", () => {
  const result = new ErrorDataResult<{ data: string }>("test", {
    data: "test",
  });
  expect(result).toBeInstanceOf(Result);
  expect(result.success).toBe(false);
  expect(result.message).toBe("test");
  expect(result.data).toEqual({ data: "test" });
});

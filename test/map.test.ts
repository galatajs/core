import { ReadonlyMap } from "../lib";

describe("ReadonlyMap tests", () => {
  it("create readonly map", () => {
    const map = new ReadonlyMap<string, string>();
    expect(map).toBeInstanceOf(ReadonlyMap);
  });

  it("handle error on readonly map set method called", () => {
    const map = new ReadonlyMap<string, string>();
    expect(() => map.set("a", "b")).toThrowError(
      /Cannot add to a readonly map/
    );
  });
});

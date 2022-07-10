import { UniqueSet } from "../lib";

describe("UniqueSet tests", () => {
  it("should add a value to the set if it does not already exist", () => {
    const set = new UniqueSet<string>();
    set.add("a");
    set.add("b");
    set.add("c");
    expect(set.has("a")).toBe(true);
    expect(set.has("b")).toBe(true);
    expect(set.has("c")).toBe(true);
    expect(set.has("d")).toBe(false);
  });

  it("should throw an error if the value already exists", () => {
    const set = new UniqueSet<string>();
    set.add("a");
    expect(() => set.add("a")).toThrowError(/Value a already exists/);
  });
});

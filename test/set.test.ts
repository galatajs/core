import { ReadonlySet, UniqueSet } from "../lib";

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
    expect(() => set.add("a")).toThrowError(/Value 'a' already exists/);
  });

  it("should throw an error if the value already exists", () => {
    type Product = {
      name: string;
      price: number;
    };
    const set = new UniqueSet<Product>();
    const product = { name: "a", price: 3 };
    set.add(product);
    expect(() => set.add(product)).toThrowError(
      'Value \'{"name":"a","price":3}\' already exists'
    );
  });
});

describe("ReadonlySet tests", () => {
  it("create readonly set", () => {
    const set = new ReadonlySet<string>();
    expect(set).toBeInstanceOf(ReadonlySet);
  });

  it("handle error on readonly set add method called", () => {
    const map = new ReadonlySet<string>();
    expect(() => map.add("a")).toThrowError(/Cannot add to a readonly set/);
  });
});

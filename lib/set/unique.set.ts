export class UniqueSet<T> extends Set<T> {
  constructor(iterable: Iterable<T> = []) {
    super(iterable);
  }

  /**
   * @param {T} value
   * @return {UniqueSet<T>}
   * @memberof UniqueSet
   * @description Adds a value to the set if it does not already exist.
   * @since 0.0.5
   * @author Sami Salih İBRAHİMBAŞ
   */
  add(value: T): this {
    if (this.has(value)) {
      throw new Error(
        `Value '${
          typeof value === "object" ? JSON.stringify(value) : value
        }' already exists`
      );
    }
    super.add(value);
    return this;
  }
}

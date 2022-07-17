export class ReadonlySet<T> extends Set<T> {
  constructor(iterable: Iterable<T> = [], private quiet: boolean = false) {
    super(iterable);
  }
  add(value: T): this {
    if (this.quiet) return this;
    throw new Error("Cannot add to a readonly set");
  }
}

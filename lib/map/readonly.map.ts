export class ReadonlyMap<K, V> extends Map<K, V> {
  constructor(map?: Map<K, V>, private quiet: boolean = false) {
    super(map);
  }
  set(key: K, value: V): this {
    if (this.quiet) return this;
    throw new Error("Cannot add to a readonly map");
  }
}

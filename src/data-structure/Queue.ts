interface NodeItem<T> {
  value: T;
  next: NodeItem<T> | null;
}
interface SetQueue<T> {
  [key: symbol]: NodeItem<T> | null;
}

export default class Queue<T = Number> {
  start: symbol;

  end: symbol;

  set: SetQueue<T>;

  constructor() {
    this.start = Symbol('start');
    this.end = Symbol('end');
    this.set = {};
    this.set[this.start] = null;
    this.set[this.end] = null;
  }

  isEmpty(): boolean {
    return this.set[this.start] === null;
  }

  enqueue(item: T): void {
    if (this.isEmpty()) {
      this.set[this.start] = {
        value: item,
        next: null,
      };
      this.set[this.end] = this.set[this.start];
    } else {
      this.set[this.end].next = {
        value: item,
        next: null,
      };
      this.set[this.end] = this.set[this.end].next;
    }
  }

  length(): number {
    let current = this.set[this.start];
    let count = 0;
    while (current !== null) {
      current = current.next;
      count++;
    }
    return count;
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.set[this.start].value;
    this.set[this.start] = this.set[this.start].next;
    if (this.set[this.start] === null) {
      this.set[this.end] = null;
    }
    return item;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.set[this.start].value;
  }

  // eslint-disable-next-line no-unused-vars
  print(printFn?: (item: T) => void): void {
    let current = this.set[this.start];
    while (current !== null) {
      if (printFn) {
        printFn(current.value);
      } else {
        console.log(current.value);
      }
      current = current.next;
    }
  }
}

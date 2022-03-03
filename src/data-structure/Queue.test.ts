import Queue from './Queue';

describe('Queue', () => {
  it('should create an object of type Queue', () => {
    const queue = new Queue();

    expect(queue).toBeInstanceOf(Queue);
  });

  it('should enqueue an item', () => {
    const queue = new Queue();

    queue.enqueue(1);

    expect(queue.length()).toBe(1);
  });

  it('should enqueue two items', () => {
    const queue = new Queue();

    queue.enqueue(1);

    queue.enqueue(2);

    expect(queue.length()).toBe(2);
  });

  it('should dequeue a two items queue', () => {
    const queue = new Queue();

    queue.enqueue(1);

    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);

    expect(queue.length()).toBe(1);
  });

  it('should dequeue a one item queue', () => {
    const queue = new Queue();

    queue.enqueue(1);

    expect(queue.dequeue()).toBe(1);

    expect(queue.length()).toBe(0);
  });

  it('should dequeue a no item queue', () => {
    const queue = new Queue();

    expect(queue.dequeue()).toBe(null);

    expect(queue.length()).toBe(0);
  });

  it('should get the correct peek of no item queue', () => {
    const queue = new Queue();

    expect(queue.peek()).toBe(null);
  });

  it('should get the correct peek of a queue', () => {
    const queue = new Queue();

    queue.enqueue(1);

    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
  });

  it('should print the queue', () => {
    const printQueue = jest.fn();
    const queue = new Queue();

    queue.enqueue(1);

    queue.enqueue(2);

    queue.print(printQueue);

    expect(printQueue).toHaveBeenCalledTimes(2);

    expect(printQueue).toHaveBeenCalledWith(1);

    expect(printQueue).toHaveBeenCalledWith(2);
  });

  it('should print the queue with console.log', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const queue = new Queue();

    queue.enqueue(1);

    queue.enqueue(2);

    queue.print();

    expect(consoleSpy).toHaveBeenCalledTimes(2);

    expect(consoleSpy).toHaveBeenCalledWith(1);

    expect(consoleSpy).toHaveBeenCalledWith(2);
  });
});

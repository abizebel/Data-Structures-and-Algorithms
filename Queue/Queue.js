//Array Implementation
class Queue1 {
  constructor() {
    this.storage = [];
  }

  //enqueues a new value at the end of queue
  enqueue(item) {
    this.storage.push(item);
  }

  //dqueues value form a beginning of the queue and return it
  dequeue() {
    if (this.storage.length > 0) {
      return this.storage.shift();
    }
  }

  // returns the value at the beginning the queue without removing it from the queue
  peek() {
    if (this.storage.length > 0) {
      return this.storage[this.storage.length - 1];
    }
  }
}

//Object Implementation
class Queue2 {
  constructor() {
    this.storage = [];
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  //enqueues a new value at the end of queue
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  //dqueues value form a beginning of the queue and return it
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  // returns the value at the beginning the queue without removing it from the queue
  peek() {
    return this.items[this.headIndex];
  }
}

// const queue = new Queue();
// queue.enqueue(7);
// queue.enqueue(2);
// queue.enqueue(6);
// queue.enqueue(4);
// queue.dequeue(); // => 7

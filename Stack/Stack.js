//Array Implementation
class Stack1 {
  constructor() {
    this.storage = [];
  }

  //returns the last added item without removing it from the stack
  peek() {
    return this.storage[this.storage.length - 1];
  }

  //adds an item to the stack
  push(item) {
    this.storage.push(item);
  }

  //returns the last added item and remove it from the stack
  pop() {
    return this.storage.pop();
  }
}

//Object Implementation
class Stack2 {
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  //returns the last added item without removing it from the stack
  peek() {
    return this.storage[this.length - 1];
  }

  //adds an item to the stack
  push(item) {
    this.storage[this.length] = item;
    this.length++;
  }

  //returns the last added item and remove it from the stack
  pop() {
    const lastItem = this.storage[this.length - 1];
    this.storage[this.length - 1] = undefined;
    this.length--;
    return lastItem;
  }
}

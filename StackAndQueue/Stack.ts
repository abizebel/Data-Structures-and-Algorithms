class Stack<T> {
  private storage: T[] = [];

  //returns the last added item without removing it from the stack
  peek() {
    return this.storage[this.storage.length - 1];
  }

  //adds an item to the stack
  push(item: T) {
    this.storage.push(item);
  }

  //returns the last added item and remove it from the stack
  pop() {
    return this.storage.pop();
  }
}

const stack = new Stack<string>();
stack.push("A");
stack.push("B");

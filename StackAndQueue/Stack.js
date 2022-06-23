class Stack {
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
const stack = new Stack();
stack.push("A");
stack.push("B");

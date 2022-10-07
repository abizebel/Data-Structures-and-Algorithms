//Singly linked list => it can be traversed in only one direction from head to the last node (tail)
//head = first item
//tail = last item
//comparing object with the saem refrence is possible
//var x = {val:1} var y ={child:x}   y.child ===x

class LinkedList {
  constructor(value) {
    //head & tail is the first node when we have just one node
    this.head = { value, next: null };
    this.tail = this.head;
  }

  //inset new value to end of the linked list
  insertAtEnd(val) {
    const node = { value: val, next: null };
    //new node is tail and head point to it
    this.tail.next = node;
    this.tail = node;
  }

  //remove a node
  remove() {}

  //remove the value at the end of the linked list
  removeTail() {
    //loop and find node before tail node.next === this.tail
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    //then new tail is node before previous tail and new not disconnected form it
    currentNode.next = null;
    this.tail = currentNode;
  }

  //search if value contains in linked list
  contains(searchedValue) {
    //loop untill node value is not equal to searchedValue
    let currentNode = this.head;
    while (currentNode.value !== searchedValue) {
      currentNode = currentNode.next;
    }

    return currentNode.value === searchedValues;
  }

  //check if a node is head of linked list
  isHead(node) {
    return node === this.head;
  }

  //check if a node is tail of linked list
  isTail(node) {
    return node === this.tail;
  }
}

// const linkedList = new LinkedList(1);
// linkedList.insertAtEnd(2);
// linkedList.insertAtEnd(3);
// const constainsThree = linkedList.contains(3)
// console.log(constainsThree)
// linkedList.removeTail()
// console.log(linkedList)

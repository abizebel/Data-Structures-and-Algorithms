class NodeItem<T> {
  public next: NodeItem<T> | null = null;
  public prev: NodeItem<T> | null = null;
  constructor(public data: T) {}
}

interface ILinkedList<T> {
  insertInBegin(data: T): NodeItem<T>;
  insertAtEnd(data: T): NodeItem<T>;
  deleteNode(node: NodeItem<T>): void;
  traverse(): T[];
  size(): number;
  search(comparator: (data: T) => boolean): NodeItem<T> | null;
}

class LinkedList<T> implements ILinkedList<T> {
  private head: NodeItem<T> | null = null;

  insertInBegin(data: T): NodeItem<T> {
    const node = new NodeItem(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    return node;
  }

  insertAtEnd(data: T): NodeItem<T> {
    const node = new NodeItem(data);
    if (!this.head) {
      this.head = node;
    } else {
      const getLast = (node: NodeItem<T>): NodeItem<T> => {
        return node.next ? getLast(node.next) : node;
      };

      const lastNode = getLast(this.head);
      node.prev = lastNode;
      lastNode.next = node;
    }
    return node;
  }

  deleteNode(node: NodeItem<T>): void {
    if (!node.prev) {
      this.head = node.next;
    } else {
      const prevNode = node.prev;
      prevNode.next = node.next;
    }
  }

  public search(comparator: (data: T) => boolean): NodeItem<T> | null {
    const checkNext = (node: NodeItem<T>): NodeItem<T> | null => {
      if (comparator(node.data)) {
        return node;
      }
      return node.next ? checkNext(node.next) : null;
    };

    return this.head ? checkNext(this.head) : null;
  }

  public traverse(): T[] {
    const array: T[] = [];
    if (!this.head) {
      return array;
    }

    const addToArray = (node: NodeItem<T>): T[] => {
      array.push(node.data);
      return node.next ? addToArray(node.next) : array;
    };
    return addToArray(this.head);
  }

  public size(): number {
    return this.traverse().length;
  }
}

interface Post {
  title: string;
}
const linkedList = new LinkedList<Post>();

linkedList.traverse(); // [];

linkedList.insertAtEnd({ title: "Post A" });
linkedList.insertAtEnd({ title: "Post B" });
linkedList.insertInBegin({ title: "Post C" });
linkedList.insertInBegin({ title: "Post D" });

linkedList.traverse(); // [{ title : "Post D" }, { title : "Post C" }, { title : "Post A" }, { title : "Post B" }];
linkedList.search(({ title }) => title === "Post A"); // Node { data: { title: "Post A" }, prev: Node, next: Node};

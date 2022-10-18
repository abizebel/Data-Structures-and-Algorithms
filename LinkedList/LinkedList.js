/*
    Singly linked list => it can be traversed in only one direction from head to the last node (tail)
    If we have just one node in liked list head=tail and they are same
    comparing object with the saem refrence is possible
    var x = {val:1} var y ={child:x}   y.child ===x
*/

class LinkedList {
    constructor() {
        this.head = null; //First element of the list
        this.tail = null; //Last element of the list
    }

    //inset new value to end of the linked list
    append(val) {
        const newNode = { value: val, next: null };
        //newNode is stored in next property of the previously last node
        //If we have just one node in liked list head=tail and they are same
        if (this.tail) {
            this.tail.next = newNode;
        }

        //[IMPORTANT DESCRIPTION] 
        // there is a ambiguous code "this.tail = newNode" this not means we replace the old tail
        // in memory, so the old tail still exist in memory becuase when run "this.head = newNode" other newNodes 
        // continuesly liked together by refrence the Key is head for holding refrences
        //we cant acces to old tail but this.head can access by refrence
        this.tail = newNode;

        //If we have just one node in liked list head=tail and they are same
        //This just happen one time

        if (!this.head) {
            this.head = newNode;
        }
        //1- this.head={value : 1, next : null} / this.tail={value : 1, next : null}
        //2- this.tail={value : 1, next : {value:2, next : null}} / this.tail={value : 2, next : null}

    }

    //inset new value to start of the linked list
    prepend(val) {
        const newNode = { value: val, next: this.head };

        //this not means we replace the old head in memory, so the old tail still exist in memory
        this.head = newNode;

        //If we have just one node in liked list head=tail and they are same
        if (!this.tail) {
            this.tail = newNode
        }
    }

    //convert linked list to array
    toArray() {
        const elements = [];
        const currentNode = this.head;

        while (currentNode) {
            elements.push(currentNode)
            currentNode = currentNode.next;
        }

        return elements;
    }

    //delete a node
    delete(val) {

        //it means liked list is empty
        if (!this.head) {
            return;
        }

        //if value found in head
        while (this.head && this.head.value === val) {
            this.head = this.head.next
        }

        //if value found after head
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === val) {
                currentNode.next = currentNode.next.next
            } else {
                currentNode = currentNode.next
            }
        }
    }

    //find a node
    find(val) {
        //it means liked list is empty
        if (!this.head) {
            return;
        }

        //if value found after head
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === val) {
                return currentNode
            }
            currentNode = currentNode.next
        }

        return null
    }

    insertAfter(val, afterValue) {

        const existingValue = this.find(afterValue);
        if (existingValue) {
            const newNode = { value: val, next: existingValue };
            //play play with refrences
            existingValue.next = newNode
        }
    }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);
linkedList.delete(0);
linkedList.insertAfter(5, 2);
console.log(linkedList)
console.log(linkedList.find(1))
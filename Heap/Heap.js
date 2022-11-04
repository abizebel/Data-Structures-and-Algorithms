class Heap {
    constructor() {
        this.heapElements = [];
    }

    insert(value) {
        this.heapElements.push(value);
        let currentElementIndex = this.heapElements.length - 1;
        let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
        while (
            parentElementIndex >= 0 &&
            this.heapElements[currentElementIndex] >
            this.heapElements[parentElementIndex]
        ) {
            const parentElement = this.heapElements[parentElementIndex];
            this.heapElements[parentElementIndex] = value;
            this.heapElements[currentElementIndex] = parentElement;
            currentElementIndex = parentElementIndex;
            parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
        }
    }
}

const heap = new Heap();

heap.insert(40);
heap.insert(101);
heap.insert(197);
heap.insert(12);
heap.insert(15);
heap.insert(85);
heap.insert(250);

console.log(heap);
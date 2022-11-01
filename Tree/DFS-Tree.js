class Node {
    constructor(value, parentNode = null) {
        this.children = [];
        this.value = value;
        this.parent = parentNode;
    }

    addNode(value) {
        const node = new Node(value, this);
        this.children.push(node);
        return node;
    }

    removeNode(index) {
        this.children.splice(index, 1);
    }

    //Depth-Firtst Search Algorithm
    find(value) {
        for (const child of this.children) {
            if (child.value === value) {
                return child
            }

            const nestedChildNode = child.find(value);
            if (nestedChildNode) {
                return nestedChildNode
            }
        }
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }


    addNode(value) {
        return this.root.addNode(value)
    }


    find(value) {
        if (this.root.value === value) {
            return this.root
        }

        //Depth-Firtst Algorithm
        return this.root.find(value)
    }

}

const rootNode = new Tree({ value: 'abbas' });
const firstChildNode = rootNode.addNode('mohammad')
const secondChildNode = rootNode.addNode('ali')
console.log(rootNode.find('ali'))
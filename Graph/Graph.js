//Using adjacency list
class Graph {
    constructor() {
        this.nodes = {};
        this.edges = {};
    }

    addNode(identifier, value) {
        if (this.nodes[identifier]) {
            throw new Error('Node exists already!');
        }
        this.nodes[identifier] = value;
    }

    addEdge(startNode, endNode) {
        if (!this.edges[startNode] || !this.edges[endNode]) {
            throw new Error('Start or end node does not exist!');
        }
        //if already has array for key
        if (this.edges[startNode] && this.edges[startNode].indexOf(endNode) === -1) {
            this.edges[startNode].push(endNode);
        } else {
            this.edges[startNode] = [endNode];
        }
    }

    hasEdge(startNode, endNode) {
        if (!this.edges[startNode]) {
            return false;
        }
        return this.edges[startNode].indexOf(endNode) > -1;
    }

    getAllEdges(node) {
        return this.edges[node];
    }

    removeNode(nodeIdentifier) {
        this.nodes[nodeIdentifier] = undefined;
        Reflect.deleteProperty(this.edges, nodeIdentifier);
        for (const edgeIdentifier in this.edges) {
            let i = 0;
            for (const endNode of this.edges[edgeIdentifier]) {
                if (endNode === nodeIdentifier) {
                    this.edges[edgeIdentifier].splice(i, 1);
                    break;
                }
                i++;
            }
        }
    }

    removeEdge(startNode, endNode) {
        if (!this.edges[startNode]) {
            throw new Error('Edge does not exist!');
        }
        const nodeIndex = this.edges[startNode].indexOf(endNode);
        if (nodeIndex === -1) {
            throw new Error('Edge does not exist!');
        }
        this.edges[startNode].splice(nodeIndex, 1);
    }

}

const graph = new Graph();

graph.addNode(1, 'Max');
graph.addNode(2, 'Manuel');
graph.addNode(3, 'Jules');

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(3, 2);

console.log(graph.hasEdge(3, 2));
console.log(graph.hasEdge(2, 1));

console.log(graph.getAllEdges(1));
console.log(graph.getAllEdges(2));
console.log(graph.getAllEdges(3));

// graph.removeNode(2);

// graph.removeEdge(2, 1);
graph.removeEdge(1, 3);

console.log(graph);
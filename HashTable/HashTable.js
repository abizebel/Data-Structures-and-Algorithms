//Array Implementation
class HashTable {
    constructor() {
        this.storage = [];
        this.tableSize = 24;
    }

    //insert a new key-value pair
    insert(key, value) {
        const index = this.hash(key, this.tableSize);
        if (!this.storage[index]) {
            this.storage[index] = [];
        }

        //TODO : check already key was inserted
        this.storage[index].push([key, value]);
    }

    //insdeleteert a new key-value pair
    remove() {}

    //returns a value associated with a key
    retrieve(key) {
        const index = this.hash(key, this.tableSize);
        const arrayAtIndex = this.storage[index];

        if (arrayAtIndex) {
            for (let i = 0; i < this.storage[index].length; i++) {
                const keyValueArray = arrayAtIndex[i];
                //[0,0,[['a',1]],0] => if key === 'a'
                if (keyValueArray[0] === key) {
                    return keyValueArray[1];
                }
            }
        }
    }

    //hash strinbg into a integer can be merged to an array index
    hash(str, size) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            //A simple way to create the hash would be to sum the ASCII code of the 
            //in the key using the charCodeAt() method as follow
            sum += str.charCodeAt(i) * 3;
            //This means that any id we generate, will be a number from 0 to our specified size value (n)
            return sum % size;
        }
    }
}

const hashTable = new HashTable();
hashTable.insert("a", 1);
hashTable.insert("b", 2);
hashTable.retrieve("b");
//Array Implementation
class HashTable {
  constructor() {
    this.storage = [];
    this.tableSize = 24;
  }

  //insert a new key-value pair
  insert(item) {
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
  hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3;
      return sum % n;
    }
  }
}

const hashTable = new HashTable();
hashTable.insert("a", 1);
hashTable.insert("b", 2);

class HashTable {
    constructor() {
        this.size = 16;
        this.buckets = Array(16)
            .fill(null)
            //fot solving collisions we store multiple values per hash so assume any item as another array
            .map(() => []);
    }

    hash(key) {
        let hash = 0;
        for (const char of key) {
            //A simple way to create the hash would be to sum the ASCII code of the 
            //in the key using the charCodeAt() method as  - example :Ab => 1 + 2 =3
            hash += char.charCodeAt(0);
        }
        //This means that any we generate a number from 0 to our specified siz value(n)
        return hash % this.size;
    }

    set(key, value) {
        const keyHash = this.hash(key);
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find((element) => {
            return element.key === key;
        });

        //check hash already has a value by checking bucketArray
        // if the nested array already has a value we add the new value there after
        // or if it has no value yet we add the new value as the first value in that nested array
        if (storedElement) {
            storedElement.val = value;
        } else {
            bucketArray.push({ key: key, val: value });
        }
    }

    get(key) {
        const keyHash = this.hash(key);
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find(element => {
            return element.key === key;
        });
        return storedElement;
    }

    showInfo() {
        for (const key in this.buckets) {
            if (this.buckets[key] !== null) {
                console.log(key, this.buckets[key]);
            }
        }
    }
}

const table1 = new HashTable();
for (const char of 'academind') {
    table1.set(char, char);
}

for (const char of 'hello') {
    table1.set(char, char);
}

for (const char of 'does this work') {
    table1.set(char, char);
}

console.log(table1.showInfo());
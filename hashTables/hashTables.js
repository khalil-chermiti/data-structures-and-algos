class HashTable {
  table = new Array(2);
  numItems = 0;

  // to decide if we need to resize the table size
  loadFactor = () => this.numItems / this.table.length;

  // resizing the table size
  resize = () => {
    const newTable = new Array(this.table.length * 2);

    // if we don't handle collisions well
    // in worst case this will be a O(n²)
    // we are doing this because of the table
    //lenght used to compute the hash
    this.table.forEach(item => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = this.hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });

    this.table = newTable;
  };

  // returns an integer < this.table.lenght to be used as an index
  hashStringToInt(string, arrayLength) {
    let hash = 17;
    for (let i = 0; i < string.length; i++) {
      hash = (251 * hash * string.charCodeAt(i)) % arrayLength;
    }

    return hash;
  }

  // O(1)
  // in case of resizing this may end up o(n²)
  setItem = (key, value) => {
    this.numItems++;

    if (this.loadFactor() > 0.8) {
      this.resize();
    }

    // hashing and saving the key , value pair
    const idx = this.hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  // returns the value of a provided key
  getItem = key => {
    const idx = this.hashStringToInt(key, this.table.length);

    if (!this.table[idx]) return null;

    // O(n)
    return this.table[idx].find(x => x[0] === key)[1];
  };
}

const myTable = new HashTable();

myTable.setItem("name", "khalil");
myTable.setItem("age", 17);
myTable.setItem("power", 1000);

console.log(myTable.getItem("name"));
console.log(myTable.getItem("age"));
console.log(myTable.getItem("power"));

/*
hash table are all about how to minimize collisions
how mush good is your hash function at doing that
because with a lot of collisions the time complexity 
of getting items will increase

the implementations of hash tables in the programming languages 
world are pretty solid and we don't have to worry about 
time complexity when using them 

so in most cases hash tables are just arrays under the hood 
access : O(1)
insertion : o(1)
deletion : o(1)
*/

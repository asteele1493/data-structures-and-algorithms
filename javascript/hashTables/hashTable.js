"use strict";

//hash table class

class HashTable {
  constructor() {
    this.table = new Array(15);
    this.tableSize = 0;
  }

  hash(key) {
    //This method will turn inputted keys into indices
    const HASH_CONSTANT = 7;
    //dunno what table size is, just wanted to write this down.
    function HASHER(str) {
      let hash = HASH_CONSTANT;
      for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        hash = (hash + c) * HASH_CONSTANT;
      }
      return hash % this.tableSize;
      //return hash;
    }
  }

  set(key, value) {
    //returns nothing
    //TODO: hash the key and set the key and value pair in the table, handling collision as needed
    //Should a given key already exist, replace its value from the value argument given to this method
    const idx = this.hash(key);
    this.table[idx] = [key, value];
    this.tableSize ++;
  }

  get(key) {
    //TODO: return value associated with that key in the table
    const idx = this.hash(key);
    return this.table[idx];
  }

  has(key) {
    //TODO: return a boolean, indicating if the key exists in the table
    //hasOwnProperty returns a boolean indicating whether the object has the specified property as its own property
    return this.table.hasOwnProperty(key);
  }

  keys() {
    //TODO: returns collection of keys
  }
}

module.exports =  HashTable ;

const  HashTable  = require('./hashTable');

describe('Hash table implementation', () => {
  test('can initialize a new hash table', () => {
    let hashTable = new HashTable();
  })
  test('can set a key/value to hashtable results in the value being in the data structure', () => {
    hashTable.set('Paloma', 3);
    hashTable.set('Foxy', 8);
    expect(hashTable.tableSize).toEqual(2);
  });
  test('can retrieve based on a key returns the value stored', () => {

  });
  test('can successfully return null for a key that does not exist in the hashtable', () => {

  });
  test('can successfully return a list of all unique keys that exist in the hashtable', () => {

  });
  test('can successfully handle a collision within the hashtable', () => {

  });
  test('can successfully retrieve a value from a bucket within the hashtable that has a collision', () => {

  });
  test('can successfully hash a key to an in-range value', () => {

  });
})

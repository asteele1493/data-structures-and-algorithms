# Code Challenge: Hash Tables

Challenge type: new implementation

## Features

This challenge will have the following methods:

- set

  - Arguments: key, value
  - Returns: nothing
  - Should hash the key and set the key and value pair in the table, handling collision as needed
  - Should a given key already exist, replace its value from the ```value``` argument given to this method

- get

  - Arguments: key
  - Returns: value associated with that key in the table

- has

  - Arguments: key
  - Returns: boolean, indicating if the key exists in the table already.

- keys

  - Returns: collection of keys

- hash

  - Arguments: key
  - Returns: Index in the collection for that key

### Testing

The hashTable.test.js file will run tests to prove the following functionality:

- Setting a key/value to your hashtable results in the value being in the data structure
- Retrieving based on a key returns the value stored
- Successfully returns null for a key that does not exist in the hashtable
- Successfully returns a list of all unique keys that exist in the hashtable
- Successfully handle a collision within the hashtable
- Successfully retrieve a value from a bucket within the hashtable that has a collision
- Successfully hash a key to an in-range value

[WIP whiteboard process](https://www.figma.com/file/pUGvCmgiC2CiZMq3FjHi1v/Hash-Tables?node-id=3-111&t=gSVU6LINVVvxGK5R-0)

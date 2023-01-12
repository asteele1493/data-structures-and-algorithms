class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //Method: append, arguments: new value, adds a new node with the given value to the end of the list

  appendNode(data) {
    let current = this.head;
    while(current){
      current = current.next;
    }
    current = new Node(data);
  }

  //Method: insert before, arguments: value, a new value, adds a new node with the given new value immediately before the first node that has the value specified
  insertBefore(cVal, nVal) {
    if (this.head.data == cVal) {
      let newNode = new Node(nVal);
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
  } else {
    let current = this.head;
    while(current.next){
      if (current.next.data == cVal){
        newNode.next = current.next;
        current.next = newNode;
      }else {
        current = current.next;
      }
    }
    return this.head;
  }
}

  //Method: insert after, arugments: value, a new value, adds a new node with the given new value immediately after the first node that has the value specified
  insertAfter(cVal, nVal){
    let current = this.head;
    while(current){
      if (current.data == cVal){
        newNode.next = current.next;
        current = newNode;
        return this.head;
      }else {
        current = current.next;
      }
    }
    return this.head;
  }
  }



module.exports = { LinkedList };

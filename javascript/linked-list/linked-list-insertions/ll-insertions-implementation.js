class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //Method: append, arguments: new value, adds a new node with the given value to the end of the list

  appendNode(value) {
    // let current = this.head;
    // while(current){
    //   current = current.next;
    // }
    // current = new Node(value);
    if (!this.head){
      this.head = new Node(value);
      return this.head;
    } else {
      let current = this.head;
      while (current.next){
        current = current.next;
      }
      current.next = new Node(value);
      return this.head;
    }
  }

  //Method: insert before, arguments: value, a new value, adds a new node with the given new value immediately before the first node that has the value specified
  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
  } else {
    let current = this.head;
    while(current.next){
      if (current.next.value === value){
        newNode.next = current.next;
        current.next = newNode;
        return this.head;
      }else {
        current = current.next;
      }
    }
    return this.head;
  }
}

  //Method: insert after, arugments: value, a new value, adds a new node with the given new value immediately after the first node that has the value specified
  insertAfter(value, newValue){
    let newNode = new Node(newValue);
    let current = this.head;
    while(current){
      if (current.value === value){
        newNode.next = current.next;
        current.next = newNode;
        return this.head;
      }else {
        current = current.next;
      }
    }
    return this.head;
  }
  }



module.exports = { LinkedList };

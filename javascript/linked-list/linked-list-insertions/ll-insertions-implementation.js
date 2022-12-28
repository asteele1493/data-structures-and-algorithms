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

  appendNode(nVal) {
    //We are declaring a variable and setting it to a new node instance with our new value argument
    let newNode = new Node(nVal);
    //making the head our new value if there is no value present
    if (head == null) {
      head = new Node(nVal);
      return;
    }
    newNode.next = null;
    let final = head;
    while (final.next != null) {
      final = final.next;
      final.next = newNode;
      return;
    }
  }

  //Method: insert before, arguments: value, a new value, adds a new node with the given new value immediately before the first node that has the value specified
  insertBefore(cVal, nVal) {
    if (head == null) {
      head = new Node(nVal);
      return;
    }
    if (head == cVal) {
      let newNode = new Node(nVal);
      newNode.next = head;
      head = newNode;
      return newNode;
  }
}

  //Method: insert after, arugments: value, a new value, adds a new node with the given new value immediately after the first node that has the value specified
  insertAfter(cVal, nVal){
    if (head == null) {
      head = new Node(nVal);
      return;
    }
    if (head == cVal) {
      let newNode = new Node(nVal);
      newNode.next = cVal.next;
      cVal.next = newNode;
    }
  }
}


module.exports = LinkedList;

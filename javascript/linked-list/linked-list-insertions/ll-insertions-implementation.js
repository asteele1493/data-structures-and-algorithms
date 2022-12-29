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
        // This is the code I had initially worked with, but I ended up liking the code Sara did in class. Very clean, and way more concise.
         //We are declaring a variable and setting it to a new node instance with our new value argument
    // let newNode = new Node(nVal);
          //making the head our new value if there is no value present
    // if (head == null) {
    //   head = new Node(nVal);
    //   return;
    // }
    // newNode.next = null;
    // let final = head;
    // while (final.next != null) {
    //   final = final.next;
    //   final.next = newNode;
    //   return;
    // }

    let current = this.head;
    while(current){
      current = current.next;
    }
    current = new Node(value);
  }

  //Method: insert before, arguments: value, a new value, adds a new node with the given new value immediately before the first node that has the value specified
  insertBefore(cVal, nVal) {
    if (this.head.value == cVal) {
      let newNode = new Node(nVal);
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
  } else {
    let current = this.head;
    while(current.next){
      if (current.next.value == cVal){
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
      if (current.value == cVal){
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

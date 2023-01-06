//Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//Create a linked list class that includes a head property.

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //Method: insert, INPUT: value, OUTPUT: nothing
  insertNode(data) {
    //created new node with data we want to store
    const newNode = new Node(data, this.head);
    //assigned head to the node we want to create
    this.head = newNode;
    //extends length of linked list by 1 to account for the addition
    this.length ++;
  }

  zipLists(lla, llb) {
  let llo = new LinkedList();
  let currentA = lla.head;
  let currentB = llb.head;
  while (currentA || currentB) {
    if (currentA) {
      llo.append(currentA.value);
      currentA = currentA.next;
    }
    if (currentB) {
      llo.append(currentB.value);
      currentB = currentB.next;
    }
  }
return llo;
}
}


module.exports = LinkedList

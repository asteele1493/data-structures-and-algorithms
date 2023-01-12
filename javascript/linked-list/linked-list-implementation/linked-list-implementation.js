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
    if (this.head === null){
    //created new node with data we want to store
    this.head = new Node(data, this.head);
    } else {
      let current = new Node(data);
      current.next = this.head;
      this.head = current;
    }

  }
  //Method: includes, INPUT: value, OUTPUT: boolean
  includesNode(data) {
    let current = this.head;
    while (current != null) {
      if (data === current.data){
        return true;
      }
      current = current.next;
    }
    return false;
  }
  //Method: toString, INPUT: nothing, OUTPUT: a string representing all values in linked list. See README for formatting.
  toStringNode(){
    let string = '';
    let current = this.head;
    while (current !==null){
      string = `{${current.data}} -> `;
      current = current.next;
    }
    return string += 'NULL';
  }

}



module.exports = LinkedList

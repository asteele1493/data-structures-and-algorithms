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

  kthFromEnd(k) {
    let counter = 0;
    let current = this.head;

    //Finds total number of nodes in the linked list.
    while (current != null) {
      current = current.next;
      counter++;
    }
    //Constraints: if k is a negative integer OR if k is greater than the length of the linked list, exit.
    if (k < 0 || k > counter) {
      return;
    }
    //Using the length of the linked list as seen in first part of code, find kth value.
    current = this.head;
    for (let i = 0; i < counter - k + 1; i++) {
      current = current.next;
      return current.value;
    }
  }
}

"use strict";

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }

  //takes in no arguments, returns true if the stack is empty. Call this function upon instantiating methods before running code.
  isEmpty() {
    if (this.top == null) {
      return true;
    }
  }

  //the Stack class should contain the following methods: push, pop, peek, and isEmpty.

  push(value) {
    //always check to make sure stack isn't empty before attempting method.
    if (this.isEmpty()) {
      this.top = new Node(value);
    } else {
      let newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop() {
    if (this.isEmpty()) {
      this.top = new Node(value);
    } else {
      let top = this.top;
      let temp = top;
      top = top.next;
      temp.next = null;
      return temp.value;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return;
    } else {
      return this.top.value;
    }
  }
}

module.exports = Stack;

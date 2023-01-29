"use strict";

//specifically a node that has a .left and a .right
//different structure of node than what we've been working with
class btNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  //pre-order
  // root left right(left first is the way)
  preOrder() {
    let traversal = [];
    traversal.push(this.value); //root?

    if (this.left) {
      let leftTraversal = this.left.preOrder();
      traversal = traversal.concat(leftTraversal);
    }

    if (this.right) {
      let rightTraversal = this.right.preOrder();
      traversal = traversal.concat(rightTraversal);
    }

    return traversal;
  }

  //post-order
  //left right root
  postOrder() {

  }


  //in-order
  //left root right
  inOrder() {

  }
}

class BSTNode extends Node {
  //BST note: no replication of values

  //arguments: number
  //returns: nothing
  //Adds new node with thtat value in the correct location in the binary search tree.

  add(number) {
    if (number === this.value) {
      //86
      return;
    } else if (number > this.value) {
      //if it's greater that node value and there isn't already a value present, put to right
      if (!this.right) {
        this.right = new BSTNode(number);
      } else {
        this.right.add(number);
      }
    } else if (number < this.value) {
      if (!this.left) {
        this.left = new BSTNode(number);
      } else {
        this.left.add(number);
      }
    }
  }

  //Argument: number
  //Returns: Boolean indiciating whether or not the value is in th etree at least once.
  contains(number) {
    if (number === this.value) {
      return true;
    } else if (number > this.value) {
      if (this.right) {
        this.right.contains(number);
      } else {
        return false;
      }
    } else if (number < this.value) {
      if (this.left) {
        this.left.contains(niumber);
      } else {
        return false;
      }
    }
  }
}

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

  //in-order
  //left root right
}

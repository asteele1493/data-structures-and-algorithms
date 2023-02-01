"use strict";

//specifically a node that has a .left and a .right
//different structure of node than what we've been working with
class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  //pre-order
  // root left right(left first is the way)
  // time = O(n) traversing every node in the tree
  // space = O(h) where h is the height of the deepest part of the tree

  preOrder() {
    let traversal = [];

    let _walk = (node) => {
      // do something. returning results of the array.
      traversal.push(node.value);
      //check left side
      if (node.left) _walk(node.left);
      //check right side
      if (node.right) _walk(node.right);
      return;
    };
    _walk(this.root);
    return traversal;
  }

  //post-order
  //left right root
  postOrder() {
    let traversal = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);

      if (node.right) _walk(node.right);

      traversal.push(node.value);

      return;
    };
    _walk(this.root);
    return traversal;
  }

  //in-order
  //left root right

  inOrder() {
    let traversal = [];

    let _walk = (node) => {
      // do something. returning results of the array.
      //check left side
      if (node.left) _walk(node.left);

      traversal.push(node.value);

      if (node.right) _walk(node.right);
      //check right side
      return;
    };
    _walk(this.root);
    return traversal;
  }
}

class BSTNode extends BinaryTree {
  constructor(root) {
    super(root);
  }
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
        this.right = new Node(number);
      } else {
        this.right.add(number);
      }
    } else if (number < this.value) {
      if (!this.left) {
        this.left = new Node(number);
      } else {
        this.left.add(number);
      }
    }
  }

  //Argument: number
  //Returns: Boolean indiciating whether or not the value is in th etree at least once.

  contains(number) {
    if (!this.root) return false;
    return _walk(this.root, number);

    function _walk(current, number) {
      if (number === current.value) return true;
      else if (number > current.value) {
        if (current.right) {
          return _walk(current.right, number);
        } else {
          return false;
        }
      } else if (number < current.value) {
        if (current.left) {
          return _walk(current.left, number);
        }
        return false;
      }
    }
  }
}

module.exports = {
  BinaryTree,
  BSTNode,
  Node,
};

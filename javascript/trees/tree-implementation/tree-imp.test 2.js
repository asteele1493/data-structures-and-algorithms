const { testElement } = require('domutils');
const {BinaryTree, BST, Node, BSTNode} = require('./tree-imp');

const tree = new BinaryTree(new Node( 1, new Node(7, new Node(2), new Node(6, new Node(3), new Node(11))), new Node(9, undefined, new Node(9, new Node(5)))));

describe('Tree tests', () => {
  test('Can successfully instantiate an empty tree', () => {
    const newTree = new BinaryTree();
    expect(newTree).toEqual({root: null});
  });
  test('Can successfully instantiate a tree with a single root node', () => {
    const newTree = new BinaryTree(5);
    expect(newTree).toEqual({root: 5});

  });
  test('For a BST, can successfully add a left child and right child properly to a node', () => {
    const bsTree = new BSTNode;
    bsTree.add(12);
    bsTree.add(22);
    expect(bsTree.root).toEqual({value:12, left: null, right: {value: 22, left: null, right: null}});
  });
  test('Can successfully return a collection from a preorder traversal', () => {

  });
  test('Can successfully return a collection from an inorder traversal', () => {

  });
  test('Can successfully return a collection from a postorder traversal', () => {

  });
  test('Returns true	false for the contains method, given an existing or non-existing node value', () => {

  });
});

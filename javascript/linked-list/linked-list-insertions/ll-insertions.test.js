const { LinkedList } = require('./ll-insertions-implementation');

describe('linked list testing', () => {
  test('append: used to test for appending a node to the end of the list', () => {
    let appendLinkedList = new LinkedList()
    appendLinkedList.head = {value: 1,
      next: {value: 3, next: {value: 4, next: null}}};
      let newList = appendLinkedList.appendNode(6);
      console.log(newList);
    expect(newList).toEqual({
      value: 1,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 6,
            next: null,
          },
        },
      },
    });
  });

  test('insert before: used to test whether a node can be inserted immediately before the node with the given value', () => {
    let insertBeforeLinkedList = new LinkedList()
    //when given a value we will return a linked list with the new node with the specified value before the node with the value.
    insertBeforeLinkedList.head = {value:1,
      next: {value: 3, next: {value: 4, next: null}}};
    let newList = insertBeforeLinkedList.insertBefore(3, 2);
    expect(newList).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    });
});

test('insert after: used to test whether a node can be inserted immediately before the node with the given value', () => {
  let insertAfterLinkedList = new LinkedList()
  //when given a value we will return a linked list with the new node with the specified value before the node with the value.
  // let insertBeforeLinkedList = new LinkedList();
  insertAfterLinkedList.head = {value:1,
    next: {value: 3, next: {value: 4, next: null}}};
  let newList = insertAfterLinkedList.insertAfter(1, 2);
  expect(newList).toEqual({
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  });
});

});

const { LinkedList } = require('./ll-insertions-implementation');

describe('linked list testing', () => {
  test('append: used to test for appending a node to the end of the list', () => {
    let appendLinkedList = new LinkedList()
    appendLinkedList.head = {data:1,
      next: {data: 3, next: {data: 4, next: {data: null}}}};
    let newList = appendLinkedList.appendNode(6)
    expect(newList).toEqual({
      data: 1,
      next: {
        data: 3,
        next: {
          data: 4,
          next: {
            data: 6,
            next: null,
          },
        },
      },
    });
  });

  test('insert before: used to test whether a node can be inserted immediately before the node with the given data', () => {
    let insertBeforeLinkedList = new LinkedList()
    //when given a value we will return a linked list with the new node with the specified value before the node with the value.
    insertBeforeLinkedList.head = {data:1,
      next: {data: 3, next: {data: 4, next: {data: null}}}};
    let newList = insertBeforeLinkedList.insertBefore(3, 2);
    expect(newList).toEqual({
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: {
            data: 4,
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
  insertAfterLinkedList.head = {data:1,
    next: {data: 3, next: {data: 4, next: {data: null}}}};
  let newList = insertAfterLinkedList.insertAfter(1, 2);
  expect(newList).toEqual({
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: {
          data: 4,
          next: null,
        },
      },
    },
  });
});

});

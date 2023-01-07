const LinkedList = require('./Linked-list-implementation');

describe('The following will test methods using linked lists', () => {

  test('it will add a value to the head of a linked list ', () => {
    const ll = new LinkedList();
    ll.insertNode(7);
   expect(ll.head.data).toEqual(7);
  })
  test('it will check to see if a value is included in a linked list', () => {
    const ll = new LinkedList();
    ll.insertNode(8);
    ll.insertNode(7);

    ll.includesNode(7);

    expect(ll.includesNode(7)).toStrictEqual(true);
  })
  test('it will return a string representing all the values in the linked list', () => {
    let ll = new LinkedList();
    ll.insertNode('andra');
    expect(ll.toStringNode()).toStrictEqual('{andra} -> NULL');
  });

});

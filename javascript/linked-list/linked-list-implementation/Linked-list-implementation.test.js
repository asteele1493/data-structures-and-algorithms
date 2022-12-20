const LinkedList = require('./Linked-list-implementation')

//describe tests what we'll be testing
describe('#The following will test methods using linked lists', () => {
  test('it will add a value to the head of a linked list ', () => {
    const ll = new LinkedList();
    ll.insertNode(5);
    const prevNode = ll.head;
    ll.insertNode(7);

    expect(ll.head.value).toBe(7);
    expect(ll.head.next).toBe(prevNode);
  })
  test('it will check to see if a value is included in a linked list', () => {
    const ll = new LinkedList();
    ll.insertNode(8);
    ll.insertNode(7);

    ll.includesNode(7);

    expect(ll.value).toBe(7);
  })
  test.skip('it will return a string representing all the values in the linked list, formatted according to the README.', () => {

  })
})

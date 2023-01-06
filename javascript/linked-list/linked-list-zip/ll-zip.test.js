const { testElement } = require('domutils')
const LinkedList = require('./ll-zip')

describe('The following will zip two linked lists together', () => {
  test('it will zip the two linked lists', () => {
    const ll3 = new LinkedList();
    let ll1 = new LinkedList();
    ll1.head = {value:1,
      next: {value: 3, next: {value: 2, next: {value: null}}}};
    let ll2 = new LinkedList();
    ll2.head = {value:5,
      next: {value: 9, next: {value: null}}};
      expect(ll3).toEqual(zipLists(ll1, ll2));
  })
})

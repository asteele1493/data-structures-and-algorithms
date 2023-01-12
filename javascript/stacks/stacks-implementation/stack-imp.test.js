const Stack = require('./stack-imp');

describe('Tests for stacks', () => {
  test('Can successfully push onto a stack', () => {
    let stack = new Stack;
    stack.push(2);
    stack.push(5);
    stack.push(6);
    stack.push(8);

    expect(stack).toEqual(`('8') -> ('6') -> ('5') -> ('2') -> null`);
  });

  test('Can successfully push multiple values onto a stack', () => {

  });

  test('Can successfully pop off the stack', () => {

  });

  test('Can successfully empty a stack after multiple pops', () => {

  });

  test('Can successfully peek the next item on the stack', () => {

  });

  test('Can successfully instantiate an empty stack', () => {

  });

  test('Calling pop or peek on an empty stack will raise an exception', () => {

  });

})

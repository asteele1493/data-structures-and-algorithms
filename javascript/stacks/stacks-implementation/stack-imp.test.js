const Stack = require('./stack-imp');

describe("Tests for stacks", () => {
  test("Can successfully push onto a stack", () => {
    let stack = new Stack();
    stack.push(7);
    expect(stack.top.value).toBe(7);
  });

  test("Can successfully push multiple values onto a stack", () => {
    let stack = new Stack();
    stack.push(2);
    stack.push(5);
    stack.push(6);
    stack.push(8);

    expect(stack).toEqual({
      top: {
        value: 8,
        next: { value: 6, next: { value: 5, next: { value: 2, next: null } } },
      },
    });
  });

  test("Can successfully pop off the stack", () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(2);
    stack.push(1);
    expect(stack.pop()).toEqual(1);
  });

  test("Can successfully empty a stack after multiple pops", () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(2);
    stack.push(1);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack).toEqual({ top: { next: null, value: 1 } });
  });

  test("Can successfully peek the next item on the stack", () => {
    let stack = new Stack();
    stack.push(10);
    expect(stack.peek()).toEqual(10);
  });

  test("Can successfully instantiate an empty stack", () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  test("Calling pop or peek on an empty stack will raise an exception", () => {
    let stack = new Stack();
    expect(stack.pop()).toEqual(undefined);
  });

  test("Calling pop or peek on an empty stack will raise an exception", () => {
    let stack = new Stack();
    expect(stack.peek()).toBe();
  });
});

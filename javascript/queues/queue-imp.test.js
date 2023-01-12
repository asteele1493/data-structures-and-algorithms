'use strict';
const Queue = require('./queue-imp');

describe('Tests for queues', () => {
  test('Can successfully enqueue into a queue', () => {
    let queue = new Queue;
    queue.enqueue(9);
    expect(queue.front.value).toBe(9);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue;
    queue.enqueue(2);
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(8);
    expect(queue.front.value).toEqual(2);
  });

  test('Can successfully dequeue out of a queue the expected value', () =>{
    let queue = new Queue;
    queue.enqueue(2);
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(8);
    queue.dequeue();
    queue.dequeue();
    expect(queue.rear.value).toEqual(5);

  });

  test('Can successfully empty a queue after multiple dequeues', () => {
//Fix dequeue method
  });

  test('Can successfully instantiate an empty queue', () => {
    let queue = new Queue;
    expect(queue.isEmpty()).toBe(true);
  });

  test('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue;
    queue.peekQueue();
    expect(queue.front.value).toBe();
  });

})



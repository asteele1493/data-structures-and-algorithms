const { insertionSort } = require('./sort');

describe('Insertion Sort function', () => {
  test('Returns initial test case', () => {
    expect(insertionSort([8, 4, 23, 42, 16, 15])).toBe([4, 8, 15, 16, 23, 42]);
  });
  test('Returns nearly sorted test case', () => {
    expect(insertionSort([3, 45, 12, 14, 13])).toBe([3, 12, 13, 14, 45]);
  });
  test('Returns already sorted test case', () => {
    expect(insertionSort([1, 3, 6])).toBe([1, 3, 6]);
  });
  test('Returns most interesting test case', () => {
    expect(insertionSort([2, 1])).toBe([1, 2]);
  });
})

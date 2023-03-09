const { mergeSort } = require('./mergeSort');

describe('MergeSort function shall', () => {
  test('sort through test case array', () => {
    const arr = [8,4,23,42,16,15];
    expect(mergeSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });
  test('sort through a reverse-sorted array', () => {
    const revArr = [20,18,12,8,5,-2];
    expect(mergeSort(revArr)).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  test('sort through nearly sorted values in an array', () => {
    const nearlyArr = [2,3,5,7,13,11];
    expect(mergeSort(nearlyArr)).toEqual([2, 3, 5, 7, 11, 13]);
  });
})

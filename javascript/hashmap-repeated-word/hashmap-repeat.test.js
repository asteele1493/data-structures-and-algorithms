const { repeatedWord } = require('./hashmap-repeat');

describe('Hashmap repeated word implementation', () => {
  test('It should return the first occurrence of repeated words', () => {
    expect(repeatedWord("Once upon a time, there was a brave princess who...")).toHaveReturnedWith("a");
  });
  test('It should be able to return the first occurrence of repeated words in a doubly repeated string', () => {
    expect(repeatedWord("The squirrel liked the other squirrel.")).toHaveReturnedWith("the");
  });
  test('It should be able to return nothing when given a string with no repeated words', () => {
    expect(repeatedWord("I like to eat pizza")).toHaveReturnedWith("");
  });
})

const AnimalShelter = require('./animal-shelter');

describe('CC tests', () => {

  beforeEach(() => {
    let animalShelter = new AnimalShelter();
  })

  test('Can enqueue a dog and a cat into the queue.', () => {
    animalShelter.enqueue('dog');
    animalShelter.enqueue('dog');
    animalShelter.enqueue('dog');
    animalShelter.enqueue('dog');
    expect(animalShelter.catQueue.front.value).toBe('');
    expect(animalShelter.dogQueue.front.value).toBe('dog');
  });

  test('Can dequeue based on pref', () => {

  });

  test('Can return null if an animal other than cat or dog is entered', () => {

  });
})

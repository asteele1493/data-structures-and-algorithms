const { Queue } = require("../queues/queue-imp");

class AnimalShelter {
  constructor() {
    this.catQueue = new Queue();
    this.dogQueue = new Queue();
  }

  enqueue(animal) {
    if (animal === "dog") {
      return this.dogQueue.enqueue(animal);
    }
    if (animal === "cat") {
      return this.catQueue.enqueue(animal);
    } else {
      return null;
    }
  }

  dequeue(pref) {
    if (pref === "dog") {
      return this.dogQueue.dequeue();
    }
    if (pref === "cat") {
      return this.catQueue.dequeue();
    } else {
      return null;
    }
  }
}

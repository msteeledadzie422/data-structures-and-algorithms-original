class Animal{
  constructor(species, name) {
    this.species = species;
    this.name = name;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
  }
}

class AnimalShelter{
  constructor(){
    this.cats = new Queue;
    this.dogs = new Queue;
  }

  enqueue(animal) {
    if (animal.species !== 'cat' && animal.species !== 'dog') {
      console.log('We only take cats or dogs');
      return;
    }
    if (animal.species === 'cat') {
      if (!this.cats.front) {
        this.cats.front = animal;
        this.cats.back = animal;
      }
      this.cats.back.next = animal;
      this.cats.back = animal;
    }
    if (animal.species === 'dog') {
      if (!this.dogs.front) {
        this.dogs.front = animal;
        this.dogs.back = animal;
      } else {
        this.dogs.back.next = animal;
        this.dogs.back = animal;
      }
    }
  }

  dequeue(pref) {
    if (pref !== 'cat' && pref !== 'dog') {
      return null;
    }
    if (pref === 'dog') {
      if (this.dogs.front) {
        let output = this.dogs.front;
        this.dogs.front = this.dogs.front.next;
        if (!this.dogs.front) {
          this.dogs.back = null;
        }
        return output;
      } else {
        console.log('We don\'t have any dogs at the moment');
        return;
      }
    }

    if (pref === 'cat') {
      if (this.cats.front) {
        let output = this.cats.front;
        this.cats.front = this.cats.front.next;
        if (!this.cats.front) {
          this.cats.back = null;
        }
        return output;
      } else {
        console.log('We don\'t have any cats at the moment');
        return;
      }
    }
  }
}

let fido = new Animal('dog', 'fido');
let lassy = new Animal('dog', 'lassy');
let whiskers = new Animal('cat', 'whiskers');
console.log('Fido: ', fido);

let shelter = new AnimalShelter;

shelter.enqueue(fido);
shelter.enqueue(lassy);

console.log('shelter1', shelter);

let dog = shelter.dequeue('dog');

console.log('DOG', dog);
console.log('shelter2', shelter);

shelter.dequeue('dog');
console.log('shelter3', shelter);

let bill = new Animal('rat', 'bill');
shelter.enqueue(bill);

console.log('shelter4', shelter);

shelter.dequeue('cat');


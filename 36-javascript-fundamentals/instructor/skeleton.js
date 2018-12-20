'use strict';


// Numbers
const numHouses = 10;
console.log(numHouses);
// numHouses += 1; // ERROR!

let money = 20;
console.log(money);
money += 10;
console.log(money);




// Strings
var present = "Tickets!"; // Avoid using var!
console.log(present);

const letter = "Hello dear friend;\n\nIt's been too long! They said, \"we miss you too!\"";
console.log(letter);

const message = 'Hi \teveryone!';
console.log(message);

const name = 'Daniel';

const finalLetter = letter + "\n\n- " + name;
console.log('----');
console.log(finalLetter);

console.log(`${letter}\n\n- ${name}`);

console.log(name.length);



// Booleans (True and False)
const itsNiceOutside = false;
const lifeCanBeGreat = true;



// undefined
let myAnswer = undefined;
console.log(myAnswer);

let whatIWillSay;
console.log(whatIWillSay);

whatIWillSay = 'I agree!';
console.log(whatIWillSay);



// null
let wordsToSay = null;


// Arrays
const animals = ['dog', 'cat', 'parrot'];
console.log(animals);
console.log(animals.length);
console.log(animals[1]);
animals.push('giraffe');
console.log(animals);
console.log(animals.pop());
console.log(animals);

console.log('---');
const myAnimal = animals.pop();
console.log(myAnimal);
console.log(animals);

animals.splice(0, 1, 'purple');
console.log(animals);

console.log('\n\n\n');

// Object Literals
const person = {
  name: 'Suzanne',
  age: 51,
  height: 170,
  married: false,
  friends: ['Dave', 'Lee', 'Sarah'],
  'place-of-birth': 'London, England',
  // placeOfBirth: 'asdf',
  attribute: "TEST VALUE",
};

console.log(person);
console.log(person['name']);
console.log(person['age']);

person['hairColour'] = 'brown';
person.hairColour = 'red';
console.log(person);

// delete person['hairColour']
// console.log(person);

person.age += 1;
console.log(person.age);

// person = {} // errors - can't reassign constant!

// console.log(person[age]); // age is not defined

console.log(person.name);
person.friends[0]

console.log(person['place-of-birth']);
// console.log(person.place-of-birth);

let attribute = 'height';
console.log(person[attribute]);
console.log(person['height']);





// If Statement
if (person.age < 25) {
  console.log('Younger than 25.');
} else if (person.age < 45) {
  console.log('Between 25 and 45.');
} else {
  console.log("Older than 45.");
}

console.log(person.age);

if (person.age === 52) {
  console.log('You are 52 years old!');
}



// For Loop
for (let index = 20; index >= 10; index -= 2) {
  console.log(index);
}

const items = ['hat', 'gloves', 'cane', 'coat', 'shoes'];
console.log(items);

for (let i = 0; i < items.length; i++) {
  console.log(`- ${items[i]}`);
}

console.log('--');

for (let i = items.length - 1; i >= 0; i--) {
  console.log(`- ${items[i]}`);
}



// While Loop
while (person.age <= 60) {
  console.log(`Working hard at ${person.age}!`);
  person.age++;
}


// Do/While Loop
do {
  console.log("Still kickin'!");
} while (person.age > 100)

console.log('---');

while (person.age > 100) {
  console.log("Still kickin'!");
}



// Named function
function add(number1, number2) {
  thing = 7;
  return number1 + number2;
}
const result = add(3, 4);
console.log(result);



console.log(thing);



// Functions with parameters



// Anonymous function



// Callback



// Scope examples -------------------



// Callbacks --------------------------



// forEach callback



// objects - accessing attributes




// objects with functions - basic example




// objects with functions - basic Mars Rover implementation



// More complicated callbacks --------------------------




// asynchronous JS

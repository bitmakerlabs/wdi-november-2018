// Basics

// Write a function that takes someone's order

// Call the function



// Questions:

// Can we assign a function to a variable?

// What happens if I reference the variable that contains the function?

// Can I call the function using normal function call syntax (with round brackets)?


// function stuff() {
//
// }
//
// if () {
//
// }
//
// for () {
//
// }
//
// const person = {
//
// };
// stuff();


function doStuff() {
  console.log("Hello world!");
}

doStuff();

function getCar() {
  return {
    gas: 100,
  };
}

let number3 = 10;

function multiply(number1, number2) {
  return number1 * number2 * number3;
}

console.log(multiply(3, 4));

number3 += 1;

console.log(multiply(3, 4));

console.log(multiply(3)); // NaN
console.log(multiply(3, 4, 5));


function multiply(number1, number2) {
  return number1 * number2 * number3;
}

const multiply2 = function(number1, number2) {
  return number1 * number2 * number3;
}


console.log(multiply(3, 4));
console.log(multiply2(3, 4));
console.log(multiply2(3, 4));


console.log(multiply);
console.log(multiply2);

const myFunction = multiply;
console.log(myFunction);

console.log(myFunction(3, 4));


// breatheFire(); // works because of HOISTING
//
// function breatheFire() {
//   console.log('Firreee');
// }

function doReallyImportantThing() {
  for (let i = 0; i < 100000000; i++) {
    8 / 3
  }
}

function doImportantThing() {
  for (let i = 0; i < 2000000000; i++) {
    8 / 3
  }
  return undefined;
}

// console.time('Long loop');
// doImportantThing();
// console.timeEnd('Long loop');

function timeMe(functionToTime) {
  console.time('Long loop');
  console.log(functionToTime);
  functionToTime();
  console.timeEnd('Long loop');
}

timeMe(doImportantThing);
timeMe(doReallyImportantThing);
// timeMe(undefined);

// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const myName = (name) => {
let i = `Hi my name is ${name}`;
const printName = () => {
      console.log(i);
  }
  return printName()
}

myName(`Kwesi-Brian Torgbede`);

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count =  1;
  console.log(count);
  const newCounter = () => {
    count++;
    console.log(count);
  }
  return newCounter();
};

counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (increment, decrement) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let newCounter = 1
  console.log(newCounter);
  increment = () => {
    return ++newCounter;
  }
  console.log(increment());
  decrement = () => {
    return --newCounter;
  }
  console.log(decrement());
};

counterFactory();
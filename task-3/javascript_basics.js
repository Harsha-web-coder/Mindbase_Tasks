/*Declarations
Syntax
Statements
Comments
Variables*/
let num1 = 10; // Let
console.log("let val1:",num1)

const num2 = 5; // Const
console.log("const val2:",num2)

// Operators
let sum = num1 + num2;
console.log("sum is:",sum)

// Data Types
let message = "Hello, world!"; // Strings
console.log("string:",message)


let numbers = [1, 2, 3, 4, 5]; // Arrays
// Loop
console.log("ArrayElements:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Functions
function multiply(a, b) {
  return a * b;
}
console.log("multiply Function called:",multiply(2,2))

// Break
// Loop through numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  // If number is divisible by 3, break the loop
  if (i % 3 === 0) {
    break;
  }
  console.log(i);
}
console.log("break is used");


// Classes
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hello, " + this.name);
  }
}

let person = new Person("John");
person.sayHello();
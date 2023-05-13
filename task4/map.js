//When working with the map method in JavaScript, we can use a variety of predefined functions to perform operations on the elements of an array
//Math functions:

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(Math.sqrt);
console.log(squaredNumbers); // Output: [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]
/*
In this example, Math.sqrt is used as a callback function within the map method to compute the square root of each element in the numbers array.
*/
//String manipulation functions:

const names = ["John", "Jane", "Alice"];
const uppercasedNames = names.map((name) => name.toUpperCase());
console.log(uppercasedNames); // Output: ["JOHN", "JANE", "ALICE"]
/*
Here, the toUpperCase function is used as a callback to convert each name in the names array to uppercase.
*/
//Custom functions:

const prices = [10, 20, 30, 40];
const discountedPrices = prices.map((price) => price * 0.8);
console.log(discountedPrices); // Output: [8, 16, 24, 32]
/*
In this example, a custom callback function is used to calculate discounted prices by multiplying each element in the prices array by 0.8.
*/
//Accessing object properties:

const products = [
  { id: 1, name: "Apple", price: 0.5 },
  { id: 2, name: "Banana", price: 0.3 },
  { id: 3, name: "Orange", price: 0.4 },
];

const productNames = products.map((product) => product.name);
console.log(productNames); // Output: ["Apple", "Banana", "Orange"]
/*
In this case, the map method is used to extract the name property from each object in the products array.
*/
//JavaScript also provides predefined functions for working with objects
//Object.keys: Returns an array containing the property names (keys) of an object.

const obj1 = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj1);
console.log(keys); // Output: ["a", "b", "c"]
//Object.values: Returns an array containing the property values of an object.

const obj2 = { a: 1, b: 2, c: 3 };
const values = Object.values(obj2);
console.log(values); // Output: [1, 2, 3]
//Object.entries: Returns an array of arrays, where each inner array contains a key-value pair from the object.

const obj3 = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj3);
console.log(entries); // Output: [["a", 1], ["b", 2], ["c", 3]]
//Object.assign: Copies the values of all enumerable properties from one or more source objects to a target object.

const target = { a: 1 };
const source = { b: 2, c: 3 };
const merged = Object.assign(target, source);
console.log(merged); // Output: { a: 1, b: 2, c: 3 }
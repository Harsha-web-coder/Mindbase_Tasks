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

let obj = {
  name: 'John',
  age: 30,
};

// Object.assign()
let target = {};
Object.assign(target, obj);
console.log('Object.assign():', target);

// Object.create()
let newObj = Object.create(obj);
console.log('Object.create():', newObj);

// Object.entries()
let entries = Object.entries(obj);
console.log('Object.entries():', entries);

// Object.freeze()
Object.freeze(obj);
obj.name = 'Jane'; // Attempt to modify a frozen object
console.log('Object.freeze():', obj);

// Object.fromEntries()
let fromEntriesObj = Object.fromEntries(entries);
console.log('Object.fromEntries():', fromEntriesObj);

// Object.getOwnPropertyDescriptor()
let propertyDescriptor = Object.getOwnPropertyDescriptor(obj, 'age');
console.log('Object.getOwnPropertyDescriptor():', propertyDescriptor);

// Object.getOwnPropertyNames()
let propertyNames = Object.getOwnPropertyNames(obj);
console.log('Object.getOwnPropertyNames():', propertyNames);

// Object.getOwnPropertySymbols()
let symbols = Object.getOwnPropertySymbols(obj);
console.log('Object.getOwnPropertySymbols():', symbols);

// Object.getPrototypeOf()
let prototype = Object.getPrototypeOf(obj);
console.log('Object.getPrototypeOf():', prototype);

// Object.is()
let isSame = Object.is(5, '5');
console.log('Object.is():', isSame);

// Object.isFrozen()
let isObjFrozen = Object.isFrozen(obj);
console.log('Object.isFrozen():', isObjFrozen);

// Object.isSealed()
let isObjSealed = Object.isSealed(obj);
console.log('Object.isSealed():', isObjSealed);

// Object.keys()
let keys = Object.keys(obj);
console.log('Object.keys():', keys);

// Object.preventExtensions()
Object.preventExtensions(obj);
obj.city = 'New York'; // Attempt to add a new property to a non-extensible object
console.log('Object.preventExtensions():', obj);

// Object.seal()
Object.seal(obj);
delete obj.age; // Attempt to delete a property from a sealed object
console.log('Object.seal():', obj);

// Object.prototype.hasOwnProperty()
let hasProperty = obj.hasOwnProperty('name');
console.log('Object.prototype.hasOwnProperty():', hasProperty);

// Object.prototype.isPrototypeOf()
let isPrototype = Object.prototype.isPrototypeOf(obj);
console.log('Object.prototype.isPrototypeOf():', isPrototype);

// Object.prototype.propertyIsEnumerable()
let isEnumerable = obj.propertyIsEnumerable('age');
console.log('Object.prototype.propertyIsEnumerable():', isEnumerable);

// Object.prototype.toLocaleString()
let localizedString = obj.toLocaleString();
console.log('Object.prototype.toLocaleString():', localizedString);

// Object.prototype.toString()
let stringRepresentation = obj.toString();
console.log('Object.prototype.toString():', stringRepresentation);

// Object.prototype.valueOf()
let value = obj.valueOf();
console.log('Object.prototype.valueOf():', value);

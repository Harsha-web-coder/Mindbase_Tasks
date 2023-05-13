//JavaScript provides several predefined functions for working with arrays
//length: Returns the length of an array.

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.length); // Output: 5

//push: Adds one or more elements to the end of an array and returns the new length of the array.
const arr2 = [1, 2, 3];
arr2.push(4);
console.log(arr2); // Output: [1, 2, 3, 4]

//pop: Removes the last element from an array and returns that element.

const arr3 = [1, 2, 3, 4];
const lastElement = arr3.pop();
console.log(lastElement); // Output: 4
console.log(arr3); // Output: [1, 2, 3]

//shift: Removes the first element from an array and returns that element, shifting all subsequent elements to a lower index.

const arr4 = [1, 2, 3, 4];
const firstElement = arr4.shift();
console.log(firstElement); // Output: 1
console.log(arr4); // Output: [2, 3, 4]

//unshift: Adds one or more elements to the beginning of an array and returns the new length of the array.

const arr5 = [2, 3, 4];
arr5.unshift(1);
console.log(arr5); // Output: [1, 2, 3, 4]

//concat: Combines two or more arrays and returns a new array.

const arr11 = [1, 2];
const arr22 = [3, 4];
const arr33 = arr11.concat(arr22);
console.log(arr33); // Output: [1, 2, 3, 4]

//slice: Returns a shallow copy of a portion of an array into a new array.

const arr6 = [1, 2, 3, 4, 5];
const subArray = arr6.slice(1, 4);
console.log(subArray); // Output: [2, 3, 4]

//splice: Changes the contents of an array by removing, replacing, or adding elements.

const arr7 = [1, 2, 3, 4, 5];
arr7.splice(2, 1, 'a', 'b');
console.log(arr7); // Output: [1, 2, 'a', 'b', 4, 5]
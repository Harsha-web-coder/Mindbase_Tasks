let fruits = ['apple', 'banana', 'cherry'];

// concat()
//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let combinedArray = fruits.concat(['date', 'elderberry']);
console.log(combinedArray);

// copyWithin()
//The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
let copiedArray = fruits.copyWithin(2, 0);
console.log(copiedArray);

// entries()
//The entries() method returns a new array iterator object that contains the key/value pairs for each index in the array.
for (let [index, value] of fruits.entries()) {
  console.log(index, value);
}

// every()
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let allFruitsHaveA = fruits.every(fruit => fruit.includes('a'));
console.log(allFruitsHaveA);

// fill()
//The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
let filledArray = fruits.fill('grape', 1, 3);
console.log(filledArray);

// filter()
//The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
let filteredArray = fruits.filter(fruit => fruit.length > 5);
console.log(filteredArray);

// find()
//The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
let foundFruit = fruits.find(fruit => fruit.startsWith('b'));
console.log(foundFruit);

// findIndex()
//The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
let foundIndex = fruits.findIndex(fruit => fruit === 'cherry');
console.log(foundIndex);

// forEach()
//The forEach() method executes a provided function once for each array element.
fruits.forEach(fruit => console.log(fruit));

// includes()
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let includesBanana = fruits.includes('banana');
console.log(includesBanana);

// indexOf()
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let indexOfCherry = fruits.indexOf('cherry');
console.log(indexOfCherry);

// join()
//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
let joinedString = fruits.join(', ');
console.log(joinedString);

// keys()
//The keys() method returns a new array iterator object that contains the keys for each index in the array.
for (let key of fruits.keys()) {
  console.log(key);
}

// lastIndexOf()
//The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
let lastIndexOfApple = fruits.lastIndexOf('apple');
console.log(lastIndexOfApple);

// map()
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
let mappedArray = fruits.map(fruit => fruit.toUpperCase());
console.log(mappedArray);

// pop()
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
let poppedFruit = fruits.pop();
console.log(poppedFruit);

// push()
//The push() method adds the specified elements to the end of an array and returns the new length of the array.
let newLength = fruits.push('dragon fruit');
console.log(fruits);
console.log(newLength);

// reduce()
//The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
//The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength);

// reduceRight()
//The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
let reversedString = fruits.reduceRight((acc, fruit) => acc + fruit, '');
console.log(reversedString);

// reverse()
//The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
fruits.reverse();
console.log(fruits);

// shift()
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
let shiftedFruit = fruits.shift();
console.log(shiftedFruit);

// slice()
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
let slicedArray = fruits.slice(1, 3);
console.log(slicedArray);

// some()
//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
let someFruitHasA = fruits.some(fruit => fruit.includes('a'));
console.log(someFruitHasA);

// sort()
//The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending,
fruits.sort();
console.log(fruits);

// splice()
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let splicedArray = fruits.splice(1, 2, 'kiwi', 'lemon');
console.log(fruits);
console.log(splicedArray);

// toLocaleString()
//The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma ",").
let localizedString = fruits.toLocaleString();
console.log(localizedString);

// toString()
//The toString() method returns a string representing the specified array and its elements.
let stringRepresentation = fruits.toString();
console.log(stringRepresentation);

// unshift()
//The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.
let newLengthAfterUnshift = fruits.unshift('apricot', 'blueberry');
console.log(fruits);
console.log(newLengthAfterUnshift);

// values()
//The values() method returns a new array iterator object that iterates the value of each item in the array.
for (let value of fruits.values()) {
  console.log(value);
}

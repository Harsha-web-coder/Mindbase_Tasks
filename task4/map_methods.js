/*
built-in methods for the `Map` object in JavaScript:

1. `clear()`: Removes all key-value pairs from the map.
2. `delete(key)`: Removes the key-value pair associated with the specified key.
3. `entries()`: Returns a new Iterator object that contains an array of `[key, value]` pairs for each element in the map.
4. `forEach(callbackFn[, thisArg])`: Executes a provided function once for each key-value pair in the map.
5. `get(key)`: Returns the value associated with the specified key.
6. `has(key)`: Checks if a key exists in the map.
7. `keys()`: Returns a new Iterator object that contains the keys of the map.
8. `set(key, value)`: Sets the value for the specified key in the map.
9. `size`: Returns the number of key-value pairs in the map.
10. `values()`: Returns a new Iterator object that contains the values of the map.
*/
let map = new Map();

// set()
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');

// size
console.log('size:', map.size);

// get()
let name = map.get('name');
console.log('get:', name);

// has()
let hasAge = map.has('age');
console.log('has:', hasAge);

// delete()
let deleted = map.delete('city');
console.log('delete:', deleted);

// clear()
map.clear();
console.log('clear - size:', map.size);

// set() again
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');

// entries()
for (let [key, value] of map.entries()) {
  console.log('entries:', key, value);
}

// keys()
for (let key of map.keys()) {
  console.log('keys:', key);
}

// values()
for (let value of map.values()) {
  console.log('values:', value);
}

// forEach()
map.forEach((value, key) => {
  console.log('forEach:', key, value);
});

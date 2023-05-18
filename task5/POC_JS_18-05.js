//let and const are block scoped
/*
The let and const keywords provide block-scoping. The var keyword does not.

That means that if you declare a variable with var, then use var to declare another variable with same name inside a block scope, the original variable will be updated. If you use let or const, a new variable contained within the block scope is created.
*/
/*
var sandwich = 'tuna';
let drink = 'soda';

if (true) {

	// drink is in the block scope, but sandwich is not
	var sandwich = 'turkey';
	let drink = 'water';

	// logs "turkey"
	console.log(sandwich);

	// logs "water"
	console.log(drink);

}

// logs "turkey"
console.log(sandwich);

// logs "soda"
console.log(drink);
*/
/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/
function outerFunction() {
  var outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closure = outerFunction();
closure(); // Output: "I am from the outer function"
/*
In this example, we have an outer function called outerFunction that defines a variable outerVariable and an inner function called innerFunction. The inner function has access to the variables defined in the outer function, even after the outer function has finished executing. This is possible because of closures in JavaScript.

When we invoke outerFunction and assign its return value to the closure variable, we essentially create a closure. The closure retains access to the outerVariable even though outerFunction has completed executing.

Finally, when we call closure(), it logs the value of outerVariable to the console.

Closures are powerful in JavaScript as they allow you to create functions with persistent state and private variables.
*/
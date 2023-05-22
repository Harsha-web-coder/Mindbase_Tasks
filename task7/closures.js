/*
A closure is the combination of a function bundled together with the lexical environment. 
In other words, a closure gives you access to an outer function's scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.
*/
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z=x();
console.log(z);
z();

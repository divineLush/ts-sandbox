"use strict";
// FUNCTIONS
// const add = (n1: number, n2: number): number => n1 + n2
// bad practice
var printResult = function (n) { return console.log("Result: " + n); };
printResult(2);
console.log(printResult(2)); // undefined
// But!
// const undefResult = (n: number): undefined => console.log(`Result: ${n}`)
// Error! Void is not assignable to undefined.
var combineValues;
combineValues = printResult;
var func;
func = function (n) { return n + 2; };
var funcWithCallback;
funcWithCallback = function (a, callback) {
    console.log('Log from funcWithCallback: ', a);
    console.log('Log from callback inside funcWithCallback: ', callback(a + 1));
};
var callback = function (b) {
    console.log('Log from callback: ', b);
    return 2; // TS won't care that callback returns a number even if I specified void
};
funcWithCallback(2, callback);
// Callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.

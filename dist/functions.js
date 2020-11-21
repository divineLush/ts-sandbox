"use strict";
const printResult = (n) => console.log(`Result: ${n}`);
printResult(2);
console.log(printResult(2));
let combineValues;
combineValues = printResult;
let func;
func = (n) => n + 2;
let funcWithCallback;
funcWithCallback = (a, callback) => {
    console.log('Log from funcWithCallback: ', a);
    console.log('Log from callback inside funcWithCallback: ', callback(a + 1));
};
const callback = (b) => {
    console.log('Log from callback: ', b);
    return 2;
};
funcWithCallback(2, callback);

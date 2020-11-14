"use strict";
console.log('Here we go...');
// CORE TYPES
var add = function (n1, n2) { return n1 + n2; };
console.log(add(2, 3), add('2', 3));
// 5, '23'
var addTyped = function (n1, n2) { return n1 + n2; };
// console.log(addTyped(2, 3), addTyped('2', 3))
// 5, Error!
var addImproved = function (n1, n2) {
    var isNumber = function (n) { return typeof n === 'number'; };
    if (isNumber(n1) && isNumber(n2)) {
        return n1 + n2;
    }
    else {
        throw new Error('Incorrect input');
    }
};
console.log(addImproved('2', 3));

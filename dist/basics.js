"use strict";
console.log('Here we go...');
const add = (n1, n2) => n1 + n2;
console.log(add(2, 3), add('2', 3));
const addTyped = (n1, n2) => n1 + n2;
const addImproved = (n1, n2) => {
    const isNumber = (n) => typeof n === 'number';
    if (isNumber(n1) && isNumber(n2)) {
        return n1 + n2;
    }
    else {
        throw new Error('Incorrect input');
    }
};
console.log(addImproved('2', 3));

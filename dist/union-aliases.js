"use strict";
const combine = (input1, input2) => {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
console.log(combine('Alex', 'Anna'));
let literalType;
literalType = 'first';
let customTypeTest;
customTypeTest = 'custom';

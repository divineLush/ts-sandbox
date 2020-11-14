"use strict";
// UNIONS
// const combine = (input1: number | string, input2: number | string) => input1 + input2
// Error! Operator '+' cannot be applied to types 'string | number' and 'string | number'
var combine = function (input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
console.log(combine('Alex', 'Anna'));
// LITERAL TYPES
var literalType;
// literalType = '1'
// Error!
literalType = 'first';
var customTypeTest;
customTypeTest = 'custom';
// customTypeTest = 'test'
// Error!

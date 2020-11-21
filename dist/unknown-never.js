"use strict";
let userInput;
userInput = 5;
userInput = '2';
let userName;
let anyInput;
userName = anyInput;
const generateError = (message, errorCode) => {
    throw { message, errorCode };
};
generateError('Error occured', 500);
console.log(generateError('Error occured', 500));
const infiniteLoop = () => {
    while (true)
        console.log(1);
};

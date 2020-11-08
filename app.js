// UNKNOWN
var userInput;
userInput = 5;
userInput = '2';
// Any value can be stored, but...
var userName;
// userName = userInput
// Error!
var anyInput;
userName = anyInput; // No error!
// Unknown is more strict than any
// NEVER
// Another typee functions can return
var generateError = function (message, errorCode) {
    throw { message: message, errorCode: errorCode };
};
generateError('Error occured', 500); // returns never
console.log(generateError('Error occured', 500)); // no logs!
var infiniteLoop = function () {
    while (true)
        console.log(1);
    // returns never
};

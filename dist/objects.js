"use strict";
// OBJECTS TYPES
var person = {
    name: 'Alex',
    age: 23
};
console.log(person);
// console.log(person.isHappy)
// Error!
var typedPerson = {
    name: 'Alex',
    age: 23
};
// ARRAYS TYPES
var personWithArray = {
    name: 'Alex',
    age: 23,
    hobbies: ['Death Metal', 'Burpees']
};
var favBands;
// favBands = [2]
// Error!
favBands = ['Possessed', 'Napalm Death', 'Bathory'];
for (var _i = 0, _a = personWithArray.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
// TS won't complain! It knows that hobby is string.
// TUPLES
var personWithTuple = {
    name: 'Alex',
    age: 23,
    role: [2, 'developer'] // otherwise role is a union type (string | number)[]
};
// personWithTuple.role[1] = 10
// Error! 10 is not a string!
personWithTuple.role.push(123); // No Error
console.log(personWithTuple);
// ENUMS
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR"; // 2
})(Role || (Role = {}));
var CustomRole;
(function (CustomRole) {
    CustomRole[CustomRole["ADMIN"] = 5] = "ADMIN";
    CustomRole[CustomRole["READ_ONLY"] = 6] = "READ_ONLY";
    CustomRole[CustomRole["AUTHOR"] = 7] = "AUTHOR"; // 7
})(CustomRole || (CustomRole = {}));
var personWithEnum = {
    name: 'Alex',
    age: 23,
    role: Role.AUTHOR
};
console.log(Role.ADMIN, personWithEnum);
// ANY
var array;
array = [1, '2', personWithEnum];

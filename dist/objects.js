"use strict";
const person = {
    name: 'Alex',
    age: 23
};
console.log(person);
const typedPerson = {
    name: 'Alex',
    age: 23
};
const personWithArray = {
    name: 'Alex',
    age: 23,
    hobbies: ['Death Metal', 'Burpees']
};
let favBands;
favBands = ['Possessed', 'Napalm Death', 'Bathory'];
for (const hobby of personWithArray.hobbies)
    console.log(hobby.toUpperCase());
const personWithTuple = {
    name: 'Alex',
    age: 23,
    role: [2, 'developer']
};
personWithTuple.role.push(123);
console.log(personWithTuple);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var CustomRole;
(function (CustomRole) {
    CustomRole[CustomRole["ADMIN"] = 5] = "ADMIN";
    CustomRole[CustomRole["READ_ONLY"] = 6] = "READ_ONLY";
    CustomRole[CustomRole["AUTHOR"] = 7] = "AUTHOR";
})(CustomRole || (CustomRole = {}));
const personWithEnum = {
    name: 'Alex',
    age: 23,
    role: Role.AUTHOR
};
console.log(Role.ADMIN, personWithEnum);
let array;
array = [1, '2', personWithEnum];

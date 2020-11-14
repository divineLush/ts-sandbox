// OBJECTS TYPES
const person = {
    name: 'Alex',
    age: 23
}

console.log(person)
// console.log(person.isHappy)
// Error!

const typedPerson: {
    name: string,
    age: number
} = {
    name: 'Alex',
    age: 23
}


// ARRAYS TYPES
const personWithArray = {
    name: 'Alex',
    age: 23,
    hobbies: ['Death Metal', 'Burpees']
}

let favBands: string[]
// favBands = [2]
// Error!
favBands = ['Possessed', 'Napalm Death', 'Bathory']

for (const hobby of personWithArray.hobbies)
    console.log(hobby.toUpperCase())
// TS won't complain! It knows that hobby is string.


// TUPLES
const personWithTuple: {
    name: string,
    age: number,
    role: [number, string] // tuple
} = {
    name: 'Alex',
    age: 23,
    role: [2, 'developer'] // otherwise role is a union type (string | number)[]
}

// personWithTuple.role[1] = 10
// Error! 10 is not a string!

personWithTuple.role.push(123) // No Error
console.log(personWithTuple)


// ENUMS
enum Role {
    ADMIN, // 0
    READ_ONLY, // 1
    AUTHOR // 2
}

enum CustomRole {
    ADMIN = 5, // 5
    READ_ONLY, // 6
    AUTHOR // 7
}

const personWithEnum = {
    name: 'Alex',
    age: 23,
    role: Role.AUTHOR
}

console.log(Role.ADMIN, personWithEnum)

// ANY
let array: any[]
array = [1, '2', personWithEnum]

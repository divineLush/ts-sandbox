console.log('Here we go...')

// CORE TYPES
const add = (n1, n2) => n1 + n2

console.log(add(2, 3), add('2', 3))
// 5, '23'

const addTyped = (n1: number, n2: number) => n1 + n2

// console.log(addTyped(2, 3), addTyped('2', 3))
// 5, Error!

const addImproved = (n1, n2) => {
    const isNumber = n => typeof n === 'number'

    if (isNumber(n1) && isNumber(n2)) {
        return n1 + n2
    } else {
        throw new Error('Incorrect input')
    }
}

console.log(addImproved('2', 3))

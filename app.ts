console.log('Here we go...')

// CORE TYPES
function add(n1, n2) {
    return n1 + n2
}

console.log(add(2, 3), add('2', 3))
// 5, '23'

function addTyped(n1: number, n2: number) {
    return n1 + n2
}

// console.log(addTyped(2, 3), addTyped('2', 3))
// 5, Error!

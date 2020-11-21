// UNKNOWN

let userInput: unknown
userInput = 5
userInput = '2'
// Any value can be stored, but...
let userName: string
// userName = userInput
// Error!
let anyInput: any
userName = anyInput // No error!
// Unknown is more strict than any


// NEVER

// Another typee functions can return
const generateError = (message: string, errorCode: number) => {
    throw { message, errorCode }
}
generateError('Error occured', 500) // returns never
console.log(generateError('Error occured', 500)) // no logs!
const infiniteLoop = () => {
    while (true)
        console.log(1)
    // returns never
}

// UNIONS
// const combine = (input1: number | string, input2: number | string) => input1 + input2
// Error! Operator '+' cannot be applied to types 'string | number' and 'string | number'

const combine = (input1: number | string, input2: number | string) => {
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }

    return result
}

console.log(combine('Alex', 'Anna'))

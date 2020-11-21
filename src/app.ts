// DECORATORS

// CLASS DECORATORS
// Decorator is just a function
// Decorators execute when our class is defined, not when it's instantiated
const Logger = (logString: string) => {
    console.log('Logger factory')

    return (constructor: Function) => {
        console.log(logString)
        console.log(constructor)
    }
}

const WithTemplate = (template: string, hookId: string) => {
    console.log('Template factory')

    return (constructor: any) => {
        console.log('Rendering template...')
        const hookEl = document.getElementById(hookId)
        const p = new constructor()
        if (hookEl) {
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

@Logger('Logging...')
@WithTemplate('<h1>Person</h1>', 'app')
class Person {
    name = 'Alex'

    constructor () {
        console.log('Creating person object...')
    }
}

const pers = new Person()
console.log(pers)

// PROPERTY DECORATORS
// Executes when our class definition is registered in JS, when we define the property
const Log = (target: any, propertyName: string | Symbol) => {
    console.log('')
    console.log('Property decorator')
    console.log('Target: ' , target)
    console.log('Property name: ', propertyName)
    console.log('')
}

const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
    console.log('')
    console.log('Accessor decorator')
    console.log('Target: ' , target)
    console.log('Name: ' , name)
    console.log('Descriptor: ' , descriptor)
    console.log('')
}

const Log3 = (target: any, name: string | Symbol, descriptor: PropertyDescriptor) => {
    console.log('')
    console.log('Method decorator')
    console.log('Target: ' , target)
    console.log('Name: ' , name)
    console.log('Descriptor: ' , descriptor)
    console.log('')
}

const Log4 = (target: any, name: string | Symbol, position: number) => {
    console.log('')
    console.log('Parameter decorator')
    console.log('Target: ' , target)
    console.log('Name: ' , name) // name of the method where parameter is used
    console.log('Position: ' , position)
    console.log('')
}

class Product {
    @Log
    title: string
    private _price: number

    constructor (title: string, price: number) {
        this.title = title
        this._price = price
    }

    @Log2
    set price (value: number) {
        if (value > 0)
            this._price = value
        else
            throw new Error('Invalid price - should be positive!')
    }

    @Log3
    getPriceWithTax (@Log4 tax: number) {
        return this._price * (1 + tax)
    }
}

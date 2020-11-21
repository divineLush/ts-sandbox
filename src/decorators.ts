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

    return <T extends { new (...args: any[]): { name: string } }>(originalConstructor: T) => {
        console.log('Rendering template...')

        // WithTemplate gets added to a class
        // In such a decorator function I can return a new constructor function
        // Which will replace the old one
        // Now the template will be rendered to the DOM only when
        // The class is instantiated, not when decorator function is executed
        // Which happens as soon as we define a class
        return class extends originalConstructor {
            constructor (..._: any[]) {
                super() // originalConstructor call
                console.log('New constructor function')
                const hookEl = document.getElementById(hookId)
                if (hookEl) {
                    hookEl.innerHTML = template
                    hookEl.querySelector('h1')!.textContent = this.name
                }
            }
        }
    }
}

@Logger('Logging...')
@WithTemplate('<h1>Person</h1>', 'template-wrapper')
class Person {
    name = 'Alex'

    constructor () {
        console.log('Creating person object...')
    }
}

const pers = new Person() // if I don't instantiate this class nothing will be rendered
console.log(pers)

// PROPERTY DECORATORS
// Executes when our class definition is registered in JS, when we define the property
// Target is either a prototype or constructor function
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

    // Return values are supported for decorators that we add to methods or accessors
    // But not for properites or parameters decorators
    @Log3
    getPriceWithTax (@Log4 tax: number) {
        return this._price * (1 + tax)
    }
}

// AUTOBIND DECORATOR
const AutoBind = (_: any, _2: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value
    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            // This will refer to whatever is responsible for triggering this method
            return originalMethod.bind(this)
        }
    }

    return adjustedDescriptor
}

class Printer {
    message = 'This works!'

    // AutoBind ensures that this is always bound correctly
    // No matter how we call showMessage
    @AutoBind
    showMessage() {
        console.log(this.message)
    }
}

const printer = new Printer()
const button = document.querySelector('button')!
button.addEventListener('click', printer.showMessage)


// VALIDATION WITH DECORATORS
interface ValidatorConfig {
    [property: string]: {
        [validatableProperty: string]: string[] // ['required', 'positive']
    }
}

const registeredValidators: ValidatorConfig = {}

enum Validator {
    REQUIRED = 'required',
    POSITIVE = 'positive'
}

const Required = (target: any, propertyName: string) => {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propertyName]: [Validator.REQUIRED]
    }
}

const PositiveNumber = (target: any, propertyName: string) => {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propertyName]: [Validator.POSITIVE]
    }
}

// goes throught all registered validators and runs corresponding logic
const validate = (obj: any) => {
    const objValidatorConfig = registeredValidators[obj.constructor.name]
    if (!objValidatorConfig)
        return true

    let isValid = true
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch(validator) {
                case Validator.REQUIRED:
                    isValid = isValid && !!obj[prop]
                    break
                case Validator.POSITIVE:
                    isValid = isValid && obj[prop] > 0
                    break
            }
        }
    }

    return isValid
}

class Course {
    @Required
    title: string
    @PositiveNumber
    price: number

    constructor (title: string, price: number) {
        this.title = title
        this.price = price
    }
}

const courseForm = document.querySelector('form')!
courseForm.addEventListener('submit', event => {
    event.preventDefault()
    const titleEl = document.getElementById('title') as HTMLInputElement
    const priceEl = document.getElementById('price') as HTMLInputElement

    const title = titleEl.value
    const price = +priceEl.value

    const createdCourse = new Course(title, price)
    if (!validate(createdCourse)) {
        alert('Invalid input, please try again!')
        return
    }
    console.log(createdCourse)
})

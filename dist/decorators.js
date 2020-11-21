"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const Logger = (logString) => {
    console.log('Logger factory');
    return (constructor) => {
        console.log(logString);
        console.log(constructor);
    };
};
const WithTemplate = (template, hookId) => {
    console.log('Template factory');
    return (originalConstructor) => {
        console.log('Rendering template...');
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log('New constructor function');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
};
let Person = class Person {
    constructor() {
        this.name = 'Alex';
        console.log('Creating person object...');
    }
};
Person = __decorate([
    Logger('Logging...'),
    WithTemplate('<h1>Person</h1>', 'template-wrapper')
], Person);
const pers = new Person();
console.log(pers);
const Log = (target, propertyName) => {
    console.log('');
    console.log('Property decorator');
    console.log('Target: ', target);
    console.log('Property name: ', propertyName);
    console.log('');
};
const Log2 = (target, name, descriptor) => {
    console.log('');
    console.log('Accessor decorator');
    console.log('Target: ', target);
    console.log('Name: ', name);
    console.log('Descriptor: ', descriptor);
    console.log('');
};
const Log3 = (target, name, descriptor) => {
    console.log('');
    console.log('Method decorator');
    console.log('Target: ', target);
    console.log('Name: ', name);
    console.log('Descriptor: ', descriptor);
    console.log('');
};
const Log4 = (target, name, position) => {
    console.log('');
    console.log('Parameter decorator');
    console.log('Target: ', target);
    console.log('Name: ', name);
    console.log('Position: ', position);
    console.log('');
};
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(value) {
        if (value > 0)
            this._price = value;
        else
            throw new Error('Invalid price - should be positive!');
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const AutoBind = (_, _2, descriptor) => {
    const originalMethod = descriptor.value;
    const adjustedDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        }
    };
    return adjustedDescriptor;
};
class Printer {
    constructor() {
        this.message = 'This works!';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const printer = new Printer();
const button = document.querySelector('button');
button.addEventListener('click', printer.showMessage);
const registeredValidators = {};
var Validator;
(function (Validator) {
    Validator["REQUIRED"] = "required";
    Validator["POSITIVE"] = "positive";
})(Validator || (Validator = {}));
const Required = (target, propertyName) => {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propertyName]: [Validator.REQUIRED] });
};
const PositiveNumber = (target, propertyName) => {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propertyName]: [Validator.POSITIVE] });
};
const validate = (obj) => {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig)
        return true;
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case Validator.REQUIRED:
                    isValid = isValid && !!obj[prop];
                    break;
                case Validator.POSITIVE:
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
};
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log(createdCourse);
});

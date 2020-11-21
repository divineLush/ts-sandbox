// GENERIC FUNCTIONS

interface Lengthy {
    length: number
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
    let descriptionText = 'Got no value'
    if (element.length === 1) {
        descriptionText = 'Got 1 element'
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('Hey there'))
console.log(countAndDescribe(['black metal', 'death metal', 'doom metal']))

// U is a key of T
const extractAndConvert = <T extends object, U extends keyof T>(obj: T, key: U) => obj[key]
console.log(extractAndConvert({ genre: 'doom metal' }, 'genre'))


// GENERIC CLASSES

class DataStorage<T> { // should only work with primitive types
    private data: T[] = []

    addItem (item: T) {
        this.data.push(item)
    }

    removeItem (item: T) {
        const index = this.data.indexOf(item)
        if (index !== -1)
            this.data.splice(index, 1)
    }

    getItems () {
        return [...this.data]
    }
}

const metalStorage = new DataStorage<string>()
metalStorage.addItem('doom metal')
metalStorage.addItem('black metal')
metalStorage.removeItem('black metal')
console.log(metalStorage.getItems())

const numberStorage = new DataStorage<number>()
numberStorage.addItem(1)
numberStorage.addItem(9000)
console.log(numberStorage.getItems())

const objectStorage = new DataStorage<object>()
const doomMetal = { metal: 'doom metal' }
objectStorage.addItem(doomMetal)
objectStorage.removeItem({ metal: 'doom metal' }) // won't work as expected as object is a reference type
const blackMetal = { metal: 'black metal' }
objectStorage.addItem(blackMetal)
objectStorage.removeItem(blackMetal) // works fine
console.log(objectStorage.getItems())


// GENEREIC UTILITY TYPES

interface CourseGoal {
    title: string
    description: string
    completeUntil: Date
}

// PARTIAL
const createCourseGoal = (title: string, description: string, date: Date): CourseGoal => {
    let courseGoal: Partial<CourseGoal> = {} // Partial turns CourseGoal to interface where all properties are optional
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUntil = date

    return courseGoal as CourseGoal
}

// READONLY
const genres: Readonly<string[]> = ['doom metal', 'black metal']
// genres.push('death metal')
// Error!

// Gerenics are great if you want to lock in a certain type, use the same type throughout the entire function/class.

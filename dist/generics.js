"use strict";
const countAndDescribe = (element) => {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
};
console.log(countAndDescribe('Hey there'));
console.log(countAndDescribe(['black metal', 'death metal', 'doom metal']));
const extractAndConvert = (obj, key) => obj[key];
console.log(extractAndConvert({ genre: 'doom metal' }, 'genre'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        const index = this.data.indexOf(item);
        if (index !== -1)
            this.data.splice(index, 1);
    }
    getItems() {
        return [...this.data];
    }
}
const metalStorage = new DataStorage();
metalStorage.addItem('doom metal');
metalStorage.addItem('black metal');
metalStorage.removeItem('black metal');
console.log(metalStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(9000);
console.log(numberStorage.getItems());
const objectStorage = new DataStorage();
const doomMetal = { metal: 'doom metal' };
objectStorage.addItem(doomMetal);
objectStorage.removeItem({ metal: 'doom metal' });
const blackMetal = { metal: 'black metal' };
objectStorage.addItem(blackMetal);
objectStorage.removeItem(blackMetal);
console.log(objectStorage.getItems());
const createCourseGoal = (title, description, date) => {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
};
const genres = ['doom metal', 'black metal'];

"use strict";
// GENERIC FUNCTIONS
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var countAndDescribe = function (element) {
    var descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
};
console.log(countAndDescribe('Hey there'));
console.log(countAndDescribe(['black metal', 'death metal', 'doom metal']));
// U is a key of T
var extractAndConvert = function (obj, key) { return obj[key]; };
console.log(extractAndConvert({ genre: 'doom metal' }, 'genre'));
// GENERIC CLASSES
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        var index = this.data.indexOf(item);
        if (index !== -1)
            this.data.splice(index, 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArrays(this.data);
    };
    return DataStorage;
}());
var metalStorage = new DataStorage();
metalStorage.addItem('doom metal');
metalStorage.addItem('black metal');
metalStorage.removeItem('black metal');
console.log(metalStorage.getItems());
var numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(9000);
console.log(numberStorage.getItems());
var objectStorage = new DataStorage();
var doomMetal = { metal: 'doom metal' };
objectStorage.addItem(doomMetal);
objectStorage.removeItem({ metal: 'doom metal' }); // won't work as expected as object is a reference type
var blackMetal = { metal: 'black metal' };
objectStorage.addItem(blackMetal);
objectStorage.removeItem(blackMetal); // works fine
console.log(objectStorage.getItems());
// PARTIAL
var createCourseGoal = function (title, description, date) {
    var courseGoal = {}; // Partial turns CourseGoal to interface where all properties are optional
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
};
// READONLY
var genres = ['doom metal', 'black metal'];
// genres.push('death metal')
// Error!
// Gerenics are great if you want to lock in a certain type, use the same type throughout the entire function/class.

"use strict";
function createFriut(name, color, taste) {
    return {
        name,
        color,
        taste,
    };
}
const fruits = [
    createFriut("Apple", "Red", "sweet"),
    createFriut("Banana", "Yellow", "sweet"),
    createFriut("Orange", "Orange", "Citrusy"),
    createFriut("Grapes", "Green/Purple", "sweet"),
    createFriut("Strawberry", "Red", "sweet"),
];
const invalidIndex = 10;
console.log(`fruit at index ${invalidIndex}:`, fruits[invalidIndex]);
fruits.forEach((fruit) => {
    console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`);
});

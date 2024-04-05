"use strict";
const pizza = [
    'Margherita',
    'Pepperoni',
    'Hawaiian',
];
console.log("My Favorite pizzas are:");
for (let i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}
console.log("\n I like these pizzas: \t");
for (let i = 0; i < pizza.length; i++) {
    console.log(`I like ${pizza[i]} pizza.`);
}
console.log(`\n I really love pizza! \t`);

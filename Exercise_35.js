"use strict";
const animals = [
    'cat', 'dog', 'cow',
];
console.log("List of animals:");
for (const animal of animals) {
    console.log(animal);
}
console.log("\n Statements about each animal: \t");
for (const animal of animals) {
    if (animal === 'dog') {
        console.log(`A ${animal} is a great pet.`);
    }
    else if (animal === 'cow') {
        console.log(`A ${animal} is a healthy animal.`);
    }
    else if (animal === 'cat') {
        console.log(`A ${animal} is a cute pet.`);
    }
}
console.log("\n What these animals have in common:\t");
console.log("Any of these animals could be a great pet.");

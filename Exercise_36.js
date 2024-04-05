"use strict";
const makeShirt = (size, description) => {
    console.log(`Size: ${size}, Message: ${description}`);
    return `Size: ${size}, Message: ${description}`;
};
let size = "Medium";
let description = "This is a sports shirt";
makeShirt(size, description);
makeShirt("Medium", "This is a sports shirt");

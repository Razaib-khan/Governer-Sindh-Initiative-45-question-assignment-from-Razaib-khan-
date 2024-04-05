"use strict";
function make_shirt(size = "Large", description = "I Love Typescript") {
    return console.log(`Size: ${size}, Message: ${description}`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "This is Good Quality Shirt.");

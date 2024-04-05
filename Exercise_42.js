"use strict";
const Magician_names = ["Dynamo", "Shin Lim", "Harry Houdini", "Derren Brown", "David Blaine"];
function Show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatmagicians = magicians.map(magician => `The Great ${magician}`);
    return greatmagicians;
}
const greatmagiciannames = make_great(Magician_names);
console.log("Original Magicians:");
Show_magicians(Magician_names);
console.log("Great Magicians:");
Show_magicians(greatmagiciannames);

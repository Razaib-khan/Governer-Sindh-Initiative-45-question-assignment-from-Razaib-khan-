"use strict";
const Magician_Names = ["Dynamo", "Shin Lim", "Harry Houdini", "Derren Brown", "David Blaine"];
function Show_Magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function Make_Great(magicians) {
    const greatmagicians = magicians.map(magician => `The Great ${magician}`);
    return greatmagicians;
}
const Greatmagiciannames = Make_Great(Magician_Names);
console.log("Original Magicians:");
Show_Magicians(Magician_Names);
console.log("Great Magicians:");
Show_Magicians(Greatmagiciannames);

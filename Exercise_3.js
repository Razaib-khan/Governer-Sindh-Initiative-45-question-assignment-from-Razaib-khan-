"use strict";
let Name = "Razaib Khan Babar Khan";
let Lowercase = Name.toLowerCase();
console.log(Lowercase);
let uppercase = Name.toUpperCase();
console.log(uppercase);
let words = Name.split(" ");
let titlecase = "";
for (let i = 0; i < words.length; i++) {
    titlecase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecase);

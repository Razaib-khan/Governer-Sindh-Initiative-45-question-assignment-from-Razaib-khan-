"use strict";
for (let guest of guests) {
    console.log(`Assalam u Alaikum, ${guest}, we found a bigger dinning table.`);
}
let moreguest = "Usman Mughal";
guests.unshift(moreguest);
// console.log(guests)
let newmidguest = "Ikram Kamran";
let midindex = Math.floor(guests.length / 2);
guests.splice(midindex, 0, newmidguest);
// console.log(guests)
let endguest = "Umer Khan";
guests.push(endguest);
// console.log(guests)
// new set of Ivitations
guests.forEach((guest) => { console.log(`Dear ${guest}, You're invited to dinner.`); });

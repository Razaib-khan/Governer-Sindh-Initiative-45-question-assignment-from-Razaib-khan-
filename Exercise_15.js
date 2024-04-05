"use strict";
let notcomingguest = "Mazher Ahmed";
console.log(`${notcomingguest} can't make it to Dinner`);
let newguest = "Mahad Khan";
let indexnotcomingguest = guests.indexOf(notcomingguest);
// console.log(indexnotcomingguest)
if (indexnotcomingguest !== -1) {
    guests[indexnotcomingguest] = newguest;
}
// console.log(guests[2])
console.log("Second set of invitations messages:");
guests.forEach((guest) => { console.log(`Dear ${guest}, You're invited to dinner.`); });

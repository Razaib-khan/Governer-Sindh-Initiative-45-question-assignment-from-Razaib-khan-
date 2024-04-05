"use strict";
let favtransport = [];
favtransport.push(["Car", "Rolls Royce"]);
favtransport.push(["Motorcycle", "Yamaha"]);
favtransport.push(["Aeroplane", "AirBus"]);
// console.log(favtransport)
favtransport.forEach(([transportation, brand]) => { console.log(`I would like to own a ${brand} ${transportation}.`); });

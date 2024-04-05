"use strict";
let Users = [
    "Admin",
    "Aaliyan Khan",
    "Irfan ullah Khan",
    "Kashan Ismail",
    "Razaib Khan",
];
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log("We need to find some users!");
        return;
    }
}
console.log('\t For non empty user name: \n');
for (const username of Users) {
    if (username.toLowerCase() === 'admin') {
        console.log('Hello! admin, would you like to see a status report');
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
greetUsers(Users);
console.log('\t For empty user name: \n');
Users = [];
greetUsers(Users);

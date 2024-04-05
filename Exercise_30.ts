const users:string[] = [
    "Admin",
    "Aaliyan Khan",
    "Irfan ullah Khan",
    "Kashan Ismail",
    "Razaib Khan",
];
function greetusers(): void {
    for (const i in users) {
        if (users[i].toLowerCase() === 'admin'){
            console.log(`Hello admin, would you like to to see a status report?`);
        } else {
            console.log(`Hello ${users[i]}, thank you for logging in again.`);
        }
    }
}
greetusers()
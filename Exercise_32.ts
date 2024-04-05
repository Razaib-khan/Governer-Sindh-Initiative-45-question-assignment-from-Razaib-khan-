const current_users: string[] = [
    "Razaib Khan",
    "Irfan Khan",
    "Aaliyan Khan",
    "Mazher Ahmed",
    "Kashan Ismail"
];

const new_users: string[] = [
    "Fahad Khan",
    "Mahad Khan",
    "RAZAIB Khan",
    "Mateen Khan",
    "Shahzaib Khan",
];
 function checkusers(current_users: string[], new_users: string[]): void {
const lowercasedcurrentusers = current_users.map(user => user.toLowerCase()); 
 }
 const lowercasedcurrentusers = current_users.map(user => user.toLowerCase());
for (const newUser of new_users) {
    const lowercasednewusers = newUser.toLowerCase();
    if (lowercasedcurrentusers.includes(lowercasednewusers)) {
        console.log(`Username "${newUser}" is already taken. Please enter a new username.`);
    
} else {
    console.log(`Username "${newUser}" is Available` )
}
}

checkusers(current_users, new_users);

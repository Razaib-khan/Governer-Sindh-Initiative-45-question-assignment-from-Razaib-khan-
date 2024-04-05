console.log("I can invite only two people for dinner.")
while(guests.length > 2) {
    let removeguest = guests.pop()
    console.log(`Sorry ${removeguest}, I can't invite you`) 
}
for(let guest of guests){
    console.log(`Assalam u Alaikum, ${guest}, you're still invited to the dinner.`)
}
guests.pop()
guests.pop()
console.log(`guest list after dinner:`, guests )
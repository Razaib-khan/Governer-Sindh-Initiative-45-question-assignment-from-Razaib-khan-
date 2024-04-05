let notcomingguest: string = "Mazher Ahmed"
console.log(`${notcomingguest} can't make it to Dinner`)
let newguest: string = "Mahad Khan"
let indexnotcomingguest: number = guests.indexOf(notcomingguest)
// console.log(indexnotcomingguest)
if(indexnotcomingguest !== -1){
    guests[indexnotcomingguest] = newguest
}
// console.log(guests[2])
console.log("Second set of invitations messages:")
guests.forEach((guest:string) =>
{console.log(`Dear ${guest}, You're invited to dinner.`)}
)
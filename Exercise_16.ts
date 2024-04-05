for (let guest of guests) {
    console.log(`Assalam u Alaikum, ${guest}, we found a bigger dinning table.`)
}
let moreguest: string = "Usman Mughal"
guests.unshift(moreguest)
// console.log(guests)
let newmidguest: string = "Ikram Kamran"
let midindex: number = Math.floor(guests.length/2)
guests.splice(midindex, 0, newmidguest)
// console.log(guests)
let endguest: string = "Umer Khan"
guests.push(endguest)
// console.log(guests)
// new set of Ivitations
guests.forEach((guest:string) =>
{console.log(`Dear ${guest}, You're invited to dinner.`)}
)
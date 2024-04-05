const laptop = {
    name: "HP",
    price: "50000",
    description: "A High End Laptop, Which supports every things"

}
let laptops: Array<typeof laptop> = [];
laptops.push(laptop);
laptops.push({name: "Chromebook", price:"55000", description:"A Excellent Laptop, Which supports every things"})
let laptop3 = {name: "Dell",
    price: "60000",
    description: "A superb Laptop, Which supports every things"}
laptops.push(laptop3);
laptops.push({name: "macbook", price:"155000", description:"A Expensive & Excellent Laptop, Which supports every things"})
// console.log(laptops)
function displaylaptops(laptops: Array<typeof laptop>)
{
    for (let i of laptops) {
         console.log(`
         title: ${i.name}
         description: ${i.description}
         price: ${i.price}
        _______________\n`);
    }
}
displaylaptops(laptops); 
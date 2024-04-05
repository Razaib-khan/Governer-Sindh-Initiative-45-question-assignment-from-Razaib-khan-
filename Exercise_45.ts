function create_car(manufacturer: string, model: string, ...properties:[string, any][]):any{
    const car: any = {
    manufacturer,
    model,
};
for (const [key, value] of properties){
    car[key] = value;
}
return car;
}
const mycar = create_car("Tesla", "CyberTruck", ["Color", "Silver"],
["Optional_Feature", "Bomb Proof"]);
console.log(mycar);
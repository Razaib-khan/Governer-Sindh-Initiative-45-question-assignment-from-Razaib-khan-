function describe_city(city:string, country: string = "Unknown Country"): void{
    console.log (`${city} is in ${country}.`);
}
describe_city("Washington","USA");
describe_city("London");
describe_city("Kabul","Afghanistan");
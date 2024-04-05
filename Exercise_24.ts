const str1: string = "Razaib";
const str2: string = "razaib";
console.log(str1 === str2);
console.log(str1 !== str2);
console.log(str1.toLowerCase() === str2);
const num1 : number = 25;
const num2 : number = 11;

console.log(num1 === num2);
console.log(num2 !== num1);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

const x: number = 50;
const y: number = 30;
const z: number = 40;

console.log( x<y && y<z);
console.log( x < y || y < z);
console.log( x > y && y < z);
console.log( x > y || y > z);
const cities: string[] =[
    "Karachi",
    "Lahore",
    "Islamabad",
    "Hyderabad",
    "Multan"
];
console.log(cities.includes('Karachi'));
console.log(cities.includes('Rawalpindi'));
console.log(!cities.includes('Islamabad'));
console.log(!cities.includes('Queeta'));


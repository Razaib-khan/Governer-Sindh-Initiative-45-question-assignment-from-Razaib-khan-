const makeShirt = (size: string, description: string): string =>
{
console.log(`Size: ${size}, Message: ${description}`);
return `Size: ${size}, Message: ${description}`;
}

let size: string = "Medium";
let description: string = "This is a sports shirt"
makeShirt(size, description);
makeShirt("Medium", "This is a sports shirt" );

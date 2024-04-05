function make_shirt(size: string = "Large", description:
 string = "I Love Typescript"):void{
   return console.log(`Size: ${size}, Message: ${description}`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "This is Good Quality Shirt.");
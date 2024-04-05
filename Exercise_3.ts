let Name: string = "Razaib Khan Babar Khan"
let Lowercase : string = Name.toLowerCase()
console.log(Lowercase);
let uppercase:string = Name.toUpperCase()
console.log(uppercase)
let words: string[] = Name.split(" ");
let titlecase: string = ""
for (let i = 0 ; i < words.length; i++){
    titlecase +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+" "
};
console.log(titlecase);
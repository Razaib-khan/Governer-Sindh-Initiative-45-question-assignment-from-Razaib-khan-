const Magician_Names: string[] = ["Dynamo", "Shin Lim", "Harry Houdini", "Derren Brown", "David Blaine"];

function Show_Magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    } }
function Make_Great(magicians: string[]): string[]{
        const greatmagicians: string[] = magicians.map(magician => `The Great ${magician}`);
        return greatmagicians;
    }
const Greatmagiciannames: string[] = Make_Great(Magician_Names);
console.log("Original Magicians:");
Show_Magicians(Magician_Names)
console.log("Great Magicians:");
Show_Magicians(Greatmagiciannames);
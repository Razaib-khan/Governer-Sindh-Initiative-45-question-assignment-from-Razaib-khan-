const Magician_names: string[] = ["Dynamo", "Shin Lim", "Harry Houdini", "Derren Brown", "David Blaine"];

function Show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    } }
function make_great(magicians: string[]): string[]{
    const greatmagicians: string[] = magicians.map(magician => `The Great ${magician}`);
    return greatmagicians;
}
const greatmagiciannames: string[] = make_great(Magician_names);
console.log("Original Magicians:");
Show_magicians(Magician_names)
console.log("Great Magicians:");
Show_magicians(greatmagiciannames);
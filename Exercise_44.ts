function makesandwich(...items: string[]):void{
    console.log("Sandwich Summary:");
    if (items.length === 0){
        console.log("Please add some items to the Sandwich.");
    } else {
        items.forEach((item, i) => {
            console.log(`${i + 1}. ${item}`);
        });
    }
    console.log("\n");
}
makesandwich();
makesandwich("Minced Chicken", "Ketchup", "Egg", "Mayo");
makesandwich("Zinger","Cheese");
makesandwich("Beef","Sauce","Black Pepper");
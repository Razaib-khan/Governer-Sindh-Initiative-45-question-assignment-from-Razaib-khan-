"use strict";
function describe_city(city, country = "Unknown Country") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Washington", "USA");
describe_city("London");
describe_city("Kabul", "Afghanistan");

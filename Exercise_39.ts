const city_country = (city: string, country: string)
: string =>
{
    return `${city}, ${country}`
}
console.log(city_country("Washington","USA"))
console.log(city_country("Tokyo", "Japan"))
console.log(city_country("Kabul","Afghanistan"))
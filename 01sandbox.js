
let city = {
    name:"Tampa",
    population: 5,
    continent:"North America"
};




function CityFacts(obj){
    return `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}. `;
}

console.log(CityFacts(city));



